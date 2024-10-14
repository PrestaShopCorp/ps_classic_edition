import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `${process.env.VITE_API_URL ?? import.meta.env.VITE_API_URL}`,
  documents: ["src/common/graphql/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/common/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
