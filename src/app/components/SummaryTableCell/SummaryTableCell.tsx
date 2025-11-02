import React from "react";
import clsx from "clsx";

export interface SummaryTableCellProps {
    align?: "left" | "center" | "right";
    children: React.ReactNode;
}

export const SummaryTableCell = ({ align = "left", children }: SummaryTableCellProps) => {
    return (
        <td className={clsx("border-r border-gray-100 px-5 py-2 text-sm first-of-type:border-l", `text-${align}`)}>
            {children}
        </td>
    );
};
