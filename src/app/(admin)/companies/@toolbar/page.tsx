import React from "react";

import { AddCompanyButton } from "@/app/shared/Buttons/AddCompanyButton";
import { SearchInput } from "@/components/SearchInput";
import { Toolbar } from "@/components/Toolbar";

export default function Page() {
    return (
        <Toolbar action={<AddCompanyButton />}>
            <SearchInput />
        </Toolbar>
    );
}
