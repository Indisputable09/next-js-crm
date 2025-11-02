import React from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";

import { PageParams } from "@/app/types/global";
import { CompanyInfo } from "@/components/CompanyInfo";
import { CompanyPromotions } from "@/components/CompanyPromotions";
import { CompanyType, getCompany, getPromotions } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";

type CompanyProps = PageParams<{ id: string }>;

export default async function Company({ params }: CompanyProps) {
    const id = (await params).id;
    const queryClient = getQueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["companies", id],
        queryFn: () => getCompany(id, { cache: "no-store" }),
        staleTime: 10 * 1000,
    });

    await queryClient.prefetchQuery({
        queryKey: ["promotions", id],
        queryFn: () => getPromotions({ companyId: id }, { cache: "no-store" }),
        staleTime: 10 * 1000,
    });

    const company = queryClient.getQueryData(["companies", id]) as CompanyType;

    if (!company) {
        notFound();
    }

    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <div className="grid grid-cols-12 gap-5 px-10 py-6">
                <div className="col-span-3">
                    <CompanyInfo companyId={id} />
                </div>
                <div className="col-span-9">
                    <CompanyPromotions companyId={id} />
                </div>
            </div>
        </HydrationBoundary>
    );
}
