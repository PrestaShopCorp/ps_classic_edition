/* eslint-disable */
import * as types from "./graphql";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetOneSubscription($customerId: String!) {\n    getOneSubscription(customer_id: $customerId, product_id: "smb_edition") {\n      id\n      trial_end\n    }\n  }\n':
    types.GetOneSubscriptionDocument,
  "\n  query GetInstanceDetails($instanceId: String!) {\n    getInstanceDetails(instanceId: $instanceId) {\n      data {\n        diskUsage {\n          total\n          used\n        }\n      }\n    }\n  }\n":
    types.GetInstanceDetailsDocument,
  "\n  query GetHomepageDynamicData($subscriptionStartedAt: Int, $subscriptionBillingUnit: String, $lang: String) {\n    homepageDynamicData(\n      subscriptionStartedAt: $subscriptionStartedAt\n      subscriptionBillingUnit: $subscriptionBillingUnit\n      lang: $lang\n    ) {\n      blocs {\n        image {\n          id\n          src\n        }\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n          icon\n        }\n        isActive\n        id\n        text\n        title\n        subTitle\n      }\n      formFeedback {\n        id\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n        }\n        text\n      }\n      promoBanners {\n        id\n        icon\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n        }\n        text\n      }\n    }\n  }\n":
    types.GetHomepageDynamicDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetOneSubscription($customerId: String!) {\n    getOneSubscription(customer_id: $customerId, product_id: "smb_edition") {\n      id\n      trial_end\n    }\n  }\n',
): (typeof documents)['\n  query GetOneSubscription($customerId: String!) {\n    getOneSubscription(customer_id: $customerId, product_id: "smb_edition") {\n      id\n      trial_end\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetInstanceDetails($instanceId: String!) {\n    getInstanceDetails(instanceId: $instanceId) {\n      data {\n        diskUsage {\n          total\n          used\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetInstanceDetails($instanceId: String!) {\n    getInstanceDetails(instanceId: $instanceId) {\n      data {\n        diskUsage {\n          total\n          used\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetHomepageDynamicData($subscriptionStartedAt: Int, $subscriptionBillingUnit: String, $lang: String) {\n    homepageDynamicData(\n      subscriptionStartedAt: $subscriptionStartedAt\n      subscriptionBillingUnit: $subscriptionBillingUnit\n      lang: $lang\n    ) {\n      blocs {\n        image {\n          id\n          src\n        }\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n          icon\n        }\n        isActive\n        id\n        text\n        title\n        subTitle\n      }\n      formFeedback {\n        id\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n        }\n        text\n      }\n      promoBanners {\n        id\n        icon\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n        }\n        text\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetHomepageDynamicData($subscriptionStartedAt: Int, $subscriptionBillingUnit: String, $lang: String) {\n    homepageDynamicData(\n      subscriptionStartedAt: $subscriptionStartedAt\n      subscriptionBillingUnit: $subscriptionBillingUnit\n      lang: $lang\n    ) {\n      blocs {\n        image {\n          id\n          src\n        }\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n          icon\n        }\n        isActive\n        id\n        text\n        title\n        subTitle\n      }\n      formFeedback {\n        id\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n        }\n        text\n      }\n      promoBanners {\n        id\n        icon\n        link {\n          href\n          id\n          referrerpolicy\n          rel\n          target\n          text\n        }\n        text\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
