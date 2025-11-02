import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

export enum StatCardType {
    Dark = "dark",
    Gradient = "gradient",
}

export interface StatCardProps {
    type: StatCardType;
    label: string;
    counter: number;
}

export const StatCard = ({ type, label, counter }: StatCardProps) => {
    return (
        <div
            className={clsx(
                "rounded",
                type === StatCardType.Dark && "bg-gray-900 px-3 pt-3 text-right odd:text-purple-200 even:text-lime-200",
                type === StatCardType.Gradient && [styles.gradient, "bg-purple-200 p-7 text-left text-gray-900"]
            )}
        >
            <p
                className={clsx(
                    "text-left before:h-0.5 before:w-4 before:rounded",
                    type === StatCardType.Dark &&
                        "mb-1 text-sm text-zinc-50 before:mb-2 before:block before:bg-zinc-50",
                    type === StatCardType.Gradient &&
                        "mb-5 text-xs before:mr-2 before:inline-block before:bg-gray-900 before:align-middle"
                )}
            >
                {label}
            </p>
            <p className="text-6xl font-semibold">{counter}</p>
        </div>
    );
};
