import { describe, it, expect } from "vitest";
import { FeatureFlag, isFeatureActive } from "./featureFlag";

describe("Service: Feature flag", () => {
  describe("Method: isFeatureActive", () => {
    describe("Feature: CALLBACK_FEATURE", () => {
      it("souldn't be active if environment is not set", () => {
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "ES")).toBeFalsy();
      });

      it("sould be active if country is allowed (lowercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "fr";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "fr")).toBeTruthy();
      });

      it("sould be active if country is allowed (uppercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "FR";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "FR")).toBeTruthy();
      });

      it("souldn't be active if country is not allowed (lowercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "fr";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "es")).toBeFalsy();
      });

      it("souldn't be active if country is not allowed (uppercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "FR";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "ES")).toBeFalsy();
      });

      it("sould be active if feature flag is in WorlWide mode (lowercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "fr,it,ww";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "es")).toBeTruthy();
      });

      it("sould be active if feature flag is in WorlWide mode (uppercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "WW";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "ES")).toBeTruthy();
      });

      it("sould be active if feature flag is in WorlWide mode & country is not excluded (lowercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "ww";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_CALLBACK_FEATURE = "fr";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "es")).toBeTruthy();
      });

      it("sould be active if feature flag is in WorlWide mode & country is not excluded (uppercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "WW";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_CALLBACK_FEATURE = "FR";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "ES")).toBeTruthy();
      });

      it("souldn't be active if feature flag is in WorlWide mode & country is excluded (lowercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "ww";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_CALLBACK_FEATURE = "es";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "es")).toBeFalsy();
      });

      it("souldn't be active if feature flag is in WorlWide mode & country is excluded (uppercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "ww";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_CALLBACK_FEATURE = "ES";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "ES")).toBeFalsy();
      });

      it("sould be active if feature flag isn't in WorlWide mode & country is excluded (lowercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "fr,it,es";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_CALLBACK_FEATURE = "fr";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "es")).toBeTruthy();
      });

      it("sould be active if feature flag isn't in WorlWide mode & country is excluded (uppercase)", () => {
        import.meta.env.VITE_COUNTRIES_FOR_CALLBACK_FEATURE = "FR,IT,ES";
        import.meta.env.VITE_COUNTRIES_EXCLUDED_FOR_CALLBACK_FEATURE = "FR";
        expect(isFeatureActive(FeatureFlag.CALLBACK_FEATURE, "ES")).toBeTruthy();
      });
    });
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
