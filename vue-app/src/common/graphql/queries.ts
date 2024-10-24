import { graphql } from "../gql";

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
