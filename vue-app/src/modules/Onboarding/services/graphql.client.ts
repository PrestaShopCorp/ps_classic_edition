import { useContext } from "@/common/composables/use-context";
import { request, type Variables } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

const { context } = useContext();
const client = <T, U extends Variables>(document: TypedDocumentNode<T, U>, variables: U) => {
  const requestHeaders: { Authorization: string; sandbox?: string } = {
    Authorization: `Bearer ${context.value.userToken}`,
  };

  // Billing restriction, if sandbox is false, it must not be present
  if (import.meta.env.VITE_BILLING_SANDBOX && import.meta.env.VITE_BILLING_SANDBOX === "true") {
    requestHeaders["sandbox"] = "true";
  }

  return request<T>({
    url: import.meta.env.VITE_API_URL,
    document,
    variables,
    requestHeaders,
  });
};
