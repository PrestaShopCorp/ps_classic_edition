// https://github.com/PrestaShopCorp/smb_edition/blob/master/src/Controller/AdminSmbEditionHomepageController.php

import { ref } from "vue";
import { z } from "zod";

export type Context = z.infer<typeof contextSchema>;

const contextSchema = z
  .object({
    SETUP_GUIDE_API_URL: z.string().default(""),
    SETUP_GUIDE_API_URL_EDIT: z.string().default(""),
    SETUP_GUIDE_API_URL_MODAL_HIDDEN: z.string().default(""),
    SETUP_GUIDE_MODAL_IS_HIDDEN: z.boolean().default(false),
    PS_CLASSIC_EDITION_PS_ACADEMY_API_URL: z.string().default(""),
    moduleVersion: z.string().default(""),
    moduleName: z.string().default(""),
    moduleSlug: z.string().default(""),
    userToken: z.string().default(""),
    psAccountShopID: z.string().default(""),
    psAccountID: z.string().default(""),
    shopName: z.string().default(""),
    locale: z.string().default(""),
    shopCountry: z.string().default(""),
    baseUrl: z.string().default(""),
  })
  .required();

const context = ref<Context>(contextSchema.parse({}));

function setContext(data: unknown) {
  context.value = contextSchema.parse(data);
}
export function useContext() {
  return { context, setContext };
}
