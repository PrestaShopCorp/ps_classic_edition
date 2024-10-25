import { describe, it, expect } from "vitest";
import { FeatureFlag, isFeatureActive } from "./featureFlag";

describe("Service: Feature flag", () => {
  describe("Method: isFeatureActive", () => {
    describe("Feature: WORKSHOPS_FEATURE", () => {
      it("shouldn't be active if environment is not set", () => {
        expect(isFeatureActive(FeatureFlag.WORKSHOPS_FEATURE, "es")).toBeFalsy();
      });

      it("should be active if country is allowed", () => {
        import.meta.env.VITE_COUNTRIES_FOR_WORKSHOPS_FEATURE = "fr,it,es";
        expect(isFeatureActive(FeatureFlag.WORKSHOPS_FEATURE, "es")).toBeTruthy();
      });

      it("should be active if WorlWide mode is active", () => {
        import.meta.env.VITE_COUNTRIES_FOR_WORKSHOPS_FEATURE = "fr,it,WW";
        expect(isFeatureActive(FeatureFlag.WORKSHOPS_FEATURE, "es")).toBeTruthy();
      });

      it("shouldn't be be active if WorlWide mode is active and country is ecluded", () => {
        import.meta.env.VITE_COUNTRIES_FOR_WORKSHOPS_FEATURE = "fr,it,WW";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_WORKSHOPS_FEATURE = "es";
        expect(isFeatureActive(FeatureFlag.WORKSHOPS_FEATURE, "es")).toBeFalsy();
      });
    });
  });
});
