"use client";

import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained";
    color?: "primary";
    size?: "m";
    fullWidth?: boolean;
    borderRadius?: "s";
}

export const Button = ({
    variant = "contained",
    color = "primary",
    size = "m",
    fullWidth,
    borderRadius = "s",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                styles.button,
                variant && styles[`button--variant__${variant}`],
                color && styles[`button--color__${color}`],
                size && styles[`button--size__${size}`],
                fullWidth && styles[`button--fullWidth`],
                borderRadius && styles[`button--border-radius__${borderRadius}`]
            )}
            type="button"
            {...props}
        />
    );
};
