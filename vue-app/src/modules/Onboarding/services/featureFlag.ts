const GLOBAL_WW_FLAG = "WW";

export enum FeatureFlag {
  WORKSHOPS_FEATURE = "WORKSHOPS_FEATURE",
}

export const isFeatureActive = (feature: FeatureFlag, countryCode: string) => {
  const countryCodeUppercase = countryCode.toUpperCase();
  const countriesForFeature = ((import.meta.env[`VITE_COUNTRIES_FOR_${feature}`] as string) ?? "")
    .toUpperCase()
    .split(",");
  let ret = countriesForFeature.includes(countryCodeUppercase);

  // World Wide mode (all countries are activated exept the excluded ones)
  if (countriesForFeature.includes(GLOBAL_WW_FLAG)) {
    const countriesExcluded = ((import.meta.env[`VITE_COUNTRIES_EXCLUDED_FOR_${feature}`] as string) ?? "")
      .toUpperCase()
      .split(",");
    ret = !countriesExcluded.includes(countryCodeUppercase);
  }

  return ret;
};
