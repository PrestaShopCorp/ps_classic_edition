import { useContext } from "@/common/composables/use-context";
import segment from "@/common/tracking/segment";

const trackWithContext = async (event: string, properties?: Record<string, unknown>) => {
  if (!event) return;

  const {
    context: {
      value: { psAccountID, psAccountShopID },
    },
  } = useContext();

  if (import.meta.env.VITE_SEGMENT_WRITE_KEY) {
    await segment.track(event, properties, {
      userId: psAccountID,
      context: {
        groupId: psAccountShopID,
      },
    });
  }
};

export default trackWithContext;
