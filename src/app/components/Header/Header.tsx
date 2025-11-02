import React from "react";
import Image from "next/image";

export interface HeaderProps {
    children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
    return (
        <header className="flex items-center gap-5 border-b	border-gray-300 px-10 py-6">
            <h1 className="flex-1 text-3xl font-semibold text-gray-900">{children}</h1>
            <div className="w-px self-stretch bg-gray-300" />
            <div className="flex gap-3">
                <Image width={44} height={44} src="/images/avatar.png" alt="avatar" />
                <div>
                    <p className="text-base	font-semibold text-gray-900">Adam Smith</p>
                    <p className="text-sm	font-light text-gray-900">adamsmith@gmail.com</p>
                </div>
            </div>
        </header>
    );
};
