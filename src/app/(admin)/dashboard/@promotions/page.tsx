import React from "react";

import { DashboardCard } from "@/components/DashboardCard";
import { SummaryTable } from "@/components/SummaryTable";
import { SummaryTableCell } from "@/components/SummaryTableCell";
import { SummaryTableHeader } from "@/components/SummaryTableHeader";
import { getPromotions } from "@/lib/api";

export default async function Page() {
    const data = await getPromotions();

    return (
        <DashboardCard label="Promotions">
            <SummaryTable
                headers={
                    <>
                        <SummaryTableHeader>Company</SummaryTableHeader>
                        <SummaryTableHeader>Name</SummaryTableHeader>
                        <SummaryTableHeader align="center">%</SummaryTableHeader>
                    </>
                }
            >
                {data.map(({ id, title, companyTitle, discount }) => (
                    <tr key={id}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell>{title}</SummaryTableCell>
                        <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    );
}
