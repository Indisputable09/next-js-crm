import React from "react";

export interface SummaryTableProps {
    headers: React.ReactNode;
    children?: React.ReactNode;
}

export const SummaryTable = ({ headers, children }: SummaryTableProps) => {
    return (
        <table className="w-full table-auto border-separate border-spacing-0">
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">{children}</tbody>
        </table>
    );
};
