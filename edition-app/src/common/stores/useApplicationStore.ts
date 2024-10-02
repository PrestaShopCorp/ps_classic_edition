import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicationStore = defineStore("application", () => {
  const loading = ref(true);

  function isLoading() {
    return loading.value;
  }

  function setLoading(value: boolean) {
    loading.value = value;
  }

  return { isLoading, setLoading };
});
