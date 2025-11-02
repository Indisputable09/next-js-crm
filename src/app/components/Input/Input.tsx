"use client";

import React from "react";
import { Field, FieldAttributes } from "formik";

export interface InputFieldProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        Partial<Pick<FieldAttributes<string>, "as">> {
    label?: string;
}

export const InputField = ({ label, id, ...rest }: InputFieldProps) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label htmlFor={id} className="mb-2 text-base text-gray-900">
                    {label}
                </label>
            )}
            <Field {...rest} id={id} className="h-11 rounded border border-gray-300 p-3 text-sm shadow" />
        </div>
    );
};
