import React from "react";

import { DashboardCard } from "@/components/DashboardCard";
import { StatCard, StatCardType } from "@/components/StatCard";
import { getCategories, getCompanies } from "@/lib/api";
import getCountById from "@/lib/utils/getCountById";

export default async function Page() {
    const categories = await getCategories();
    const companies = await getCompanies();

    const counts = getCountById(companies, "categoryId");

    return (
        <DashboardCard label="Categories of companies">
            <div className="grid grid-cols-12 gap-3 px-5 pb-5">
                {categories.map(({ title, id }) => (
                    <div key={id} className="col-span-3">
                        <StatCard type={StatCardType.Dark} label={title} counter={counts[id] || 0} />
                    </div>
                ))}
            </div>
        </DashboardCard>
    );
}
