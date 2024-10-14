import { onMounted, onUnmounted, ref, watch, type Ref } from "vue";

export function useClickOutside<T extends HTMLElement>(elementRefs: Array<Ref<T | null>>, onClickOutside: () => void) {
  const isClickOutside = ref<(boolean | null)[]>([]);

  const handleClick = (event: MouseEvent) => {
    isClickOutside.value = elementRefs.map((elementRef) => {
      return elementRef.value && !elementRef.value.contains(event.target as Node);
    });
  };

  watch(
    () => isClickOutside.value,
    (value) => {
      if (value.every((value) => value)) {
        onClickOutside();
      }
    },
  );

  onMounted(() => {
    document.addEventListener("click", handleClick);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClick);
  });

  return isClickOutside;
}
