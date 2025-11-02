"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button/Button";

export const AddCompanyButton = () => {
    const router = useRouter();
    return <Button onClick={() => router.push("/companies/new", { scroll: false })}>Add company</Button>;
};
