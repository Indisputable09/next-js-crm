import React from "react";

export interface DashboardCardProps {
    label: React.ReactNode;
    children: React.ReactNode;
}

export const DashboardCard = ({ label, children }: DashboardCardProps) => {
    return (
        <div className="h-full w-full rounded bg-gray-100">
            <p className="p-5 text-xl	font-medium text-gray-900">{label}</p>
            <div>{children}</div>
        </div>
    );
};
