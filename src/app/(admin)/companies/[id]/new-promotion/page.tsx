import React from "react";

import { PromotionForm } from "@/app/shared/Forms/PromotionForm";
import { PageParams } from "@/app/types/global";

export type PageProps = PageParams<{ id: string }>;

export default async function Page({ params }: PageProps) {
    const id = (await params).id;
    console.log("🚀 ~ id:", id);

    return (
        <div className="px-10 py-6">
            <PromotionForm companyId={id} />
        </div>
    );
}
