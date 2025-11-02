"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getCompany } from "@/lib/api";

import { Chip } from "../Chip";

export interface CompanyInfoProps {
    companyId: string;
}

export const CompanyInfo = ({ companyId }: CompanyInfoProps) => {
    const { data: company } = useQuery({
        queryKey: ["companies", companyId],
        queryFn: () => getCompany(companyId),
        staleTime: 10 * 1000,
    });

    if (!company) return null;
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-5 rounded bg-gray-900 p-7">
                <div className="h-20 w-20 rounded-full bg-blue-500">
                    {company.avatar && <Image fill src={company.avatar} alt="company avatar" />}
                </div>
                <p className="text-base font-semibold text-white">{company.title}</p>
                <Chip type={company.status} />
            </div>
            <div className="rounded bg-gray-100 p-7 text-base text-gray-900">
                <p className="pb-5 text-xl font-semibold">About company</p>
                <p className="pb-3">{`Category: ${company.categoryTitle}`}</p>
                <p className="pb-3">{`Country: ${company.countryTitle}`}</p>
                <p className="pb-3">{`Joined date: ${new Date(company.joinedDate).toLocaleDateString("uk")}`}</p>
                <div className="my-8 h-px w-full bg-gray-300" />
                <p>{company.description}</p>
            </div>
        </div>
    );
};
