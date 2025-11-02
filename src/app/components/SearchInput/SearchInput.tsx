import React from "react";
import Image from "next/image";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchInput = ({ onSearchClick, ...rest }: SearchInputProps) => {
    return (
        <div className="relative w-96">
            <input
                {...rest}
                type="text"
                className="h-11 w-full flex-1 rounded border border-gray-300 bg-gray-50 py-3 pr-11 pl-3 text-sm"
            />
            <button type="button" className="absolute top-0	right-0 p-3" onClick={onSearchClick}>
                <Image width={20} height={20} src="/icons/magnifying-glass.svg" alt="search icon" />
            </button>
        </div>
    );
};
