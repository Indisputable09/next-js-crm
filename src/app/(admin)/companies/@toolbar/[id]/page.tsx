import React, { use } from "react";

import { AddPromotionButton } from "@/app/shared/Buttons/AddPromotionButton";
import { PageParams } from "@/app/types/global";
import { SearchInput } from "@/components/SearchInput";
import { Toolbar } from "@/components/Toolbar";

export type PageProps = PageParams<{ id: string }>;

export default function Page({ params }: PageProps) {
    const { id } = use(params);

    return (
        <Toolbar action={<AddPromotionButton companyId={id} />}>
            <SearchInput />
        </Toolbar>
    );
}
