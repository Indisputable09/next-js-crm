"use client";

import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";

import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { InputField } from "@/components/Input";
import { LogoUploader } from "@/components/LogoUploader";
import { CompanyStatus, CompanyType, createCompany, getCategories, getCountries } from "@/lib/api";

export interface CompanyFieldValues {
    title: string;
    description: string;
    status: CompanyStatus;
    joinedDate: string;
    categoryId: string;
    countryId: string;
}

const initialValues: CompanyFieldValues = {
    title: "",
    description: "",
    status: "active",
    joinedDate: "",
    categoryId: "",
    countryId: "",
};

export interface CompanyFormProps {
    onSubmit?: (values: CompanyFieldValues) => void | Promise<void>;
}

const options: CompanyStatus[] = ["active", "notActive", "pending", "suspended"];

export const CompanyForm = ({ onSubmit }: CompanyFormProps) => {
    const queryClient = useQueryClient();

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 10 * 1000,
    });

    const { data: countries } = useQuery({
        queryKey: ["countries"],
        queryFn: getCountries,
        staleTime: 10 * 1000,
    });

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (data: Omit<CompanyType, "id" | "hasPromotions">) => createCompany(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["companies"],
            });
        },
    });

    const handleSubmit = async (values: CompanyFieldValues) => {
        await mutateAsync({
            ...values,
            categoryTitle: categories?.find(({ id }) => id === values.categoryId)?.title ?? "",
            countryTitle: countries?.find(({ id }) => id === values.countryId)?.title ?? "",
        });

        if (onSubmit) {
            onSubmit(values);
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="flex flex-col gap-10">
                <p className="mb-0.5 text-xl">Add new company</p>
                <div className="flex gap-6">
                    <div className="flex flex-1 flex-col gap-5">
                        <LogoUploader label="Logo" placeholder="Upload photo" />
                        <InputField required label="Status" placeholder="Status" name="status" as="select">
                            {options.map((status) => (
                                <option key={status} value={status}>
                                    <Chip type={status} styled={false} />
                                </option>
                            ))}
                        </InputField>
                        <InputField required label="Country" placeholder="Country" name="countryId" as="select">
                            {countries?.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.title}
                                </option>
                            ))}
                        </InputField>
                    </div>
                    <div className="flex flex-1 flex-col gap-5">
                        <InputField required label="Name" placeholder="Name" name="title" />
                        <InputField required label="Category" placeholder="Category" name="categoryId" as="select">
                            {categories?.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
                        </InputField>
                        <InputField required label="Joined date" type="date" name="joinedDate" />
                        <InputField required label="Description" placeholder="Description" name="description" />
                    </div>
                </div>
                <Button type="submit" disabled={isPending}>
                    Add company
                </Button>
            </Form>
        </Formik>
    );
};
