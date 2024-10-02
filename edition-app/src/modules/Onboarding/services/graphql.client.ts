import { useContext } from "@/common/composables/use-context";
import {
  QUERY_GET_HOMEPAGE_DYNAMIC_DATA,
  QUERY_GET_INSTANCE_DETAIL,
  QUERY_GET_SHOP_DOMAIN_INFOS,
} from "@/common/graphql/queries";
import { request, type Variables } from "graphql-request";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { Subscription } from "../stores/useSubscriptionStore";

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

export const getInstanceInfos = (instanceId: string) => {
  const variables = { instanceId };

  return client(QUERY_GET_INSTANCE_DETAIL, variables).then((data) => {
    return {
      disk: data.getInstanceDetails.data?.diskUsage,
    };
  });
};

export const getShopDomainInfos = (shopId: string) => {
  const variables = { shopId };

  return client(QUERY_GET_SHOP_DOMAIN_INFOS, variables).then((data) => {
    return {
      instanceId: data.getShopDomainInfos.instanceId,
    };
  });
};

export const getHomepageDynamicBlocDatas = (subscription: Subscription) => {
  const variables = {
    subscriptionStartedAt: subscription?.started_at,
    subscriptionBillingUnit: subscription?.billing_period_unit,
    lang: context.value.locale,
  };
  return client(QUERY_GET_HOMEPAGE_DYNAMIC_DATA, variables).then((data) => {
    return {
      blocs: data.homepageDynamicData.blocs,
      formFeedback: data.homepageDynamicData.formFeedback,
      promoBanners: data.homepageDynamicData.promoBanners,
    };
  });
};
