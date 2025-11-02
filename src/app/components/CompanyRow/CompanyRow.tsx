import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Chip } from "@/components/Chip";
import { CompanyType } from "@/lib/api";

export interface CompanyRowProps {
    company: CompanyType;
}

export const CompanyRow = ({ company }: CompanyRowProps) => {
    return (
        <tr className="h-14 bg-white text-center text-gray-900">
            <td className="rounded-l border-l-4 border-blue-700 text-xs font-medium text-blue-700">
                {company.categoryTitle}
            </td>
            <td>
                <Link href={`/companies/${company.id}`}>{company.title}</Link>
            </td>
            <td>
                <Chip type={company.status} />
            </td>
            <td>
                <div className="inline-flex items-center gap-1">
                    <Image
                        width={16}
                        height={16}
                        src={`/icons/${company.hasPromotions ? "check" : "x-mark"}.svg`}
                        alt="promotion icon"
                    />
                    <span
                        className={clsx(
                            "text-sm font-medium",
                            company.hasPromotions ? "text-green-700" : "text-red-700"
                        )}
                    >
                        {company.hasPromotions ? "Yes" : "No"}
                    </span>
                </div>
            </td>
            <td>{company.countryTitle}</td>
            <td className="rounded-r">{new Date(company.joinedDate).toLocaleDateString("uk-UA")}</td>
        </tr>
    );
};
