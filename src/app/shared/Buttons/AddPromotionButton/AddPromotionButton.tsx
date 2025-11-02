"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";

export interface AddPromotionButtonProps {
    companyId: string;
}

export const AddPromotionButton = ({ companyId }: AddPromotionButtonProps) => {
    const router = useRouter();
    return (
        <Button onClick={() => router.push(`/companies/${companyId}/new-promotion`, { scroll: false })}>
            Add promotions
        </Button>
    );
};
