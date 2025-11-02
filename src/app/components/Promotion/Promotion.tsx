import React from "react";
import Image from "next/image";

import { PromotionType } from "@/lib/api";

export interface PromotionProps {
    promotion: PromotionType;
}

export const Promotion = ({ promotion }: PromotionProps) => {
    return (
        <div className="overflow-hidden rounded	bg-gray-100">
            <div className="relative h-40 w-full bg-gray-300">
                {promotion.avatar && <Image fill src={promotion.avatar} alt="promotion avatar" />}
                <div className="absolute top-0 left-px h-14 w-14 rounded-br-full bg-lime-200" />
                <div className="absolute inset-0 h-14 w-14 rounded-br-full bg-gray-900 py-3 pr-3 pl-0.5">
                    <p className="text-center text-xs font-bold text-lime-200">{`-${promotion.discount}%`}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5">
                <p className="text-base font-semibold text-gray-900">{promotion.title}</p>
                <p className="text-sm text-gray-900">{promotion.description}</p>
            </div>
        </div>
    );
};
