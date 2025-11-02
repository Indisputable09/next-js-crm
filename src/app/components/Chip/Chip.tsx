import React from "react";
import clsx from "clsx";

import { CompanyStatus } from "@/lib/api";

import { ChipType } from "./types";

import styles from "./styles.module.scss";

interface ChipProps {
    type?: CompanyStatus;
    children?: React.ReactNode;
    styled?: boolean;
}

const statusMapper: Record<ChipType, string> = {
    active: "Active",
    notActive: "Not Active",
    pending: "Pending",
    suspended: "Suspended",
};

export const Chip = ({ type = "active", styled = true }: ChipProps) => {
    const label = statusMapper[type];
    if (!styled) return <>{label}</>;

    return (
        <>
            <div className={clsx(styles.chip, styles[`chip--${type}`])}>
                <div className={clsx(styles.circle, styles[`circle--${type}`])} />
                {statusMapper[type]}
            </div>
        </>
    );
};
