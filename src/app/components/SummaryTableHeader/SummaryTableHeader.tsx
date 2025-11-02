import React from "react";
import clsx from "clsx";

export interface SummaryTableHeaderProps {
    align?: "left" | "center" | "right";
    children: React.ReactNode;
}

export const SummaryTableHeader = ({ align = "left", children }: SummaryTableHeaderProps) => {
    return (
        <th
            className={clsx(
                "px-5 py-2 text-xs font-normal first-of-type:rounded-l-sm last-of-type:rounded-r-sm",
                `text-${align}`,
                "[&:nth-child(3n+1)]:bg-gray-900 [&:nth-child(3n+1)]:text-white",
                "[&:nth-child(3n+2)]:bg-purple-200 [&:nth-child(3n+2)]:text-gray-900",
                "[&:nth-child(3n+3)]:bg-lime-200 [&:nth-child(3n+3)]:text-gray-900"
            )}
        >
            {children}
        </th>
    );
};
