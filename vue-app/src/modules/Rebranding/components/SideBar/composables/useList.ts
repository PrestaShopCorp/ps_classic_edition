import { ref } from "vue";

export default () => {
  const openedItemLabel = ref("");

  const toggleList = (itemLabel?: string) => {
    if (!itemLabel) return;

    if (itemLabel === openedItemLabel.value) {
      openedItemLabel.value = "";
    } else {
      openedItemLabel.value = itemLabel;
    }
  };

  return {
    toggleList,
    openedItemLabel,
  };
};
