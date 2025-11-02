import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export interface SidebarItemProps {
    current?: boolean;
    pathname: string;
    src: string;
    alt: string;
    children: React.ReactNode;
}

export const SidebarItem = ({ current, pathname, src, alt, children }: SidebarItemProps) => {
    return (
        <li>
            <Link
                href={pathname}
                className={clsx(
                    "mx-1 flex h-9 items-center gap-3.5",
                    current && "after:ml-auto after:h-full after:rounded-sm after:border-2 after:border-purple-200"
                )}
            >
                <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
                <span className="font-medium text-zinc-50">{children}</span>
            </Link>
        </li>
    );
};
