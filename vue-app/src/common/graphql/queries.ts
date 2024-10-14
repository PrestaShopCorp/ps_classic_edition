import { graphql } from "../gql";

export const QUERY_GET_SHOP_DOMAIN_INFOS = graphql(`
  query GetShopDomainInfos($shopId: ID!) {
    getShopDomainInfos(input: { shopId: $shopId }) {
      instanceId
    }
  }
`);

export const QUERY_GET_INSTANCE_DETAIL = graphql(`
  query GetInstanceDetails($instanceId: String!) {
    getInstanceDetails(instanceId: $instanceId) {
      data {
        diskUsage {
          total
          used
        }
      }
    }
  }
`);

export const QUERY_GET_HOMEPAGE_DYNAMIC_DATA = graphql(`
  query GetHomepageDynamicData($subscriptionStartedAt: Int, $subscriptionBillingUnit: String, $lang: String) {
    homepageDynamicData(
      subscriptionStartedAt: $subscriptionStartedAt
      subscriptionBillingUnit: $subscriptionBillingUnit
      lang: $lang
    ) {
      blocs {
        image {
          id
          src
        }
        link {
          href
          id
          referrerpolicy
          rel
          target
          text
          icon
        }
        isActive
        id
        text
        title
        subTitle
      }
      formFeedback {
        id
        link {
          href
          id
          referrerpolicy
          rel
          target
          text
        }
        text
      }
      promoBanners {
        id
        icon
        link {
          href
          id
          referrerpolicy
          rel
          target
          text
        }
        text
      }
    }
  }
`);
