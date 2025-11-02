import React from "react";
import clsx from "clsx";
import Image from "next/image";

import { DashboardCard } from "@/components/DashboardCard";
import { getCompanies, getCountries } from "@/lib/api";
import getCountById from "@/lib/utils/getCountById";

export default async function Page() {
    const countries = await getCountries();
    const companies = await getCompanies();

    const counts = getCountById(companies, "countryId");

    return (
        <DashboardCard label="Countries of companies">
            <div className="flex items-end gap-2 px-5 pb-5">
                <div>
                    {countries.map(({ id, title }) => (
                        <p
                            key={id}
                            className={clsx(
                                "text-sm font-medium text-gray-900",
                                "before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-purple-200 before:align-middle"
                            )}
                        >{`${title} - ${counts[id] || 0}`}</p>
                    ))}
                </div>
                <Image width={395} height={262} src="/images/world.svg" alt="world" />
            </div>
        </DashboardCard>
    );
}
