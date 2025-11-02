import path from "path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/app/styles")],
        prependData: `@use "variables" as *;`,
    },
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/dashboard",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
