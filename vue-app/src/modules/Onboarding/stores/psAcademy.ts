import { ref } from "vue";
import { defineStore } from "pinia";
import { useContext } from "@/common/composables/use-context";

export interface PsAcademyCard {
  name: string;
  description: string;
  url: string;
  breadcrumbs: string;
}

const { context } = useContext();

export const usePsAcademy = defineStore("psAcademy", () => {
  const sortedProducts = ref<Array<PsAcademyCard>>([]);
  const pages = ref<number>(0);
  const loading = ref<boolean>(true);

  const getProducts = async () => {
    const response = await fetch(context.value.PS_CLASSIC_EDITION_PS_ACADEMY_API_URL);
    return response.json();
  };

  const initProducts = async () => {
    loading.value = true;
    const products = await getProducts();
    pages.value = products.length / 5;

    // Live product on index 0 and 1
    // Move second live product to index 5 to be in the big square of psacademy bloc
    const element = products[1];
    products.splice(1, 1);
    products.splice(5, 0, element);
    sortedProducts.value = products;
    loading.value = false;
  };

  return {
    initProducts,
    sortedProducts,
    pages,
    loading,
  };
});
