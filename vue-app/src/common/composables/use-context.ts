// https://github.com/PrestaShopCorp/smb_edition/blob/master/src/Controller/AdminSmbEditionHomepageController.php

import { ref } from "vue";
import { z } from "zod";

export type Context = z.infer<typeof contextSchema>;
export type Tab = z.infer<typeof tabSchema>;

const baseTabSchema = z
  .object({
    id_tab: z.union([z.number(), z.string()]),
    id_parent: z.union([z.number(), z.string()]),
    position: z.union([z.number(), z.string()]),
    module: z.string().nullable(),
    class_name: z.string(),
    route_name: z.string(),
    active: z.union([z.number(), z.string()]),
    enabled: z.coerce.boolean(),
    icon: z.string(),
    wording: z.string().nullable(),
    wording_domain: z.string().nullable(),
    name: z.string().nullable(),
    current: z.boolean(),
    img: z.string().nullable(),
    href: z.string().nullable(),
  })
  .partial();

// @ts-ignore
const tabSchema = baseTabSchema.extend({
  sub_tabs: z.lazy(() => z.array(tabSchema).default([])),
});

const contextSchema = z
  .object({
    SETUP_GUIDE_API_URL: z.string().default(""),
    SETUP_GUIDE_API_URL_EDIT: z.string().default(""),
    SETUP_GUIDE_API_URL_MODAL_HIDDEN: z.string().default(""),
    CACHE_CLEAR_API_URL: z.string().default(""),
    PS_CLASSIC_EDITION_PS_ACADEMY_API_URL: z.string().default(""),
    MAINTENANCE_URL: z.string().default(""),
    moduleVersion: z.string().default(""),
    moduleName: z.string().default(""),
    moduleSlug: z.string().default(""),
    moduleIsUpdatable: z.boolean().default(false),
    moduleUpdateLink: z.string().default(""),
    userToken: z.string().default(""),
    psAccountShopID: z.string().default(""),
    psAccountID: z.string().default(""),
    shopName: z.string().default(""),
    isShopEnabled: z.boolean().default(false),
    locale: z.string().default(""),
    shopCountry: z.string().default(""),
    baseUrl: z.string().default(""),
  })
  .required();

const context = ref<Context>(contextSchema.parse({}));

function setContext(data: unknown) {
  context.value = contextSchema.parse(data);
}

function updateIsRequired(): boolean {
  if (!context.value) return false;

  try {
    const currentModuleVersionAsInt = parseInt(context.value.moduleVersion.replace(/\./g, ""), 10);
    const requiredModuleVersionAsInt = parseInt(
      (import.meta.env.VITE_MINIMUM_REQUIRED_MODULE_VERSION || 0).replace(/\./g, ""),
      10,
    );

    return currentModuleVersionAsInt < requiredModuleVersionAsInt;
  } catch (e: any) {
    return false;
  }
}

function callForMboCacheClear() {
  fetch(context.value.CACHE_CLEAR_API_URL, {
    method: "PATCH",
  });
}

export function useContext() {
  return { context, setContext, updateIsRequired, callForMboCacheClear };
}
