"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";

import { PromotionFormModal } from "@/app/shared/Modals/PromotionFormModal";
import { PageParams } from "@/app/types/global";

export type PageProps = PageParams<{ id: string }>;

export default function Page({ params }: PageProps) {
    const router = useRouter();
    const { id } = use(params);

    return <PromotionFormModal companyId={id} show={true} onClose={() => router.back()} />;
}
