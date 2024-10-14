import { defineStore } from "pinia";
import { ref } from "vue";
import { useContext } from "@/common/composables/use-context";
const { context } = useContext();

export type Subscription = {
  id: string;
  plan_id: string;
  customer_id: string;
  status: string;
  currency_code: string;
  has_scheduled_changes: boolean;
  billing_period: number;
  billing_period_unit: string;
  due_invoices_count: number;
  meta_data: {
    module: string;
  };
  plan_amount: number;
  plan_quantity: number;
  plan_unit_price: number;
  pricing_model: string;
  subscription_items: {
    item_price_id: string;
    group_id: string;
    amount: number;
    item_type: string;
    quantity: number;
    unit_price: number;
  }[];
  created_at: number;
  next_billing_at: number;
  started_at: number;
  updated_at: number;
  trial_end: number;
  is_free_trial_used: boolean;
};

export const useSubscriptionStore = defineStore("subscription", () => {
  const subscription = ref<Subscription>();

  async function fetchSubscription() {
    {
      const subscriptionData = await fetch(`${context.value.GET_SUBSCRIPTION_API_URL}`).then(
        (response): Promise<Subscription> => {
          if (response.status === 404) {
            throw new Error("No subscription");
          } else if (!response.ok) {
            throw new Error("Error request subscription infos");
          }
          return response.json();
        },
      );
      subscription.value = subscriptionData;
      return subscriptionData;
    }
  }

  return { fetchSubscription, subscription };
});
