const GLOBAL_WW_FLAG = "WW";

export enum FeatureFlag {
  CALLBACK_FEATURE = "CALLBACK_FEATURE",
  WORKSHOPS_FEATURE = "WORKSHOPS_FEATURE",
}

export const isFeatureActive = (feature: FeatureFlag, countryCode: string) => {
  const countryCodeUppercase = countryCode.toUpperCase();
  const countriesForCallbackFeature = ((import.meta.env[`VITE_COUNTRIES_FOR_${feature}`] as string) ?? "")
    .toUpperCase()
    .split(",");
  let ret = countriesForCallbackFeature.includes(countryCodeUppercase);

  // World Wide mode (all countries are activated exept the excluded ones)
  if (countriesForCallbackFeature.includes(GLOBAL_WW_FLAG)) {
    const countriesExcluded = ((import.meta.env[`VITE_COUNTRIES_EXCLUDED_FOR_${feature}`] as string) ?? "")
      .toUpperCase()
      .split(",");
    ret = !countriesExcluded.includes(countryCodeUppercase);
  }

  return ret;
};

export const isFormFeedBackEnabled = import.meta.env.VITE_FORM_FEEDBACK_ENABLED === "true" ? true : false;
export const isPromoBannerEnabled = import.meta.env.VITE_PROMO_BANNER_ENABLED === "true" ? true : false;
export const isDynamicBlocEnabled = import.meta.env.VITE_DYNAMIC_BLOC_ENABLED === "true" ? true : false;
export const isDiskUsageEnabled = import.meta.env.VITE_DISK_USAGE_ENABLED === "true" ? true : false;
