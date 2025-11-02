import React from "react";

import { PageParams } from "@/app/types/global";
import { Header } from "@/components/Header";
import { CompanyType, getCompany } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";

export type PageProps = PageParams<{ id: string }>;

export default async function Page({ params }: PageProps) {
    const id = (await params).id;
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["companies", id],
        queryFn: () => getCompany(id, { cache: "no-store" }),
        staleTime: 10 * 1000,
    });

    const company = queryClient.getQueryData(["companies", id]) as CompanyType;

    return <Header>{company?.title}</Header>;
}
