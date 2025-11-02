import React from "react";

export interface ToolbarProps {
    children: React.ReactNode;
    action?: React.ReactNode;
}

export const Toolbar = ({ children, action }: ToolbarProps) => {
    return (
        <div className="flex items-center gap-7 px-10 py-8">
            <div className="flex-1">{children}</div>
            {action}
        </div>
    );
};
