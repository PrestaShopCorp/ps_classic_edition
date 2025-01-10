// https://segment.com/docs/connections/sources/catalog/libraries/website/javascript

import { capitalCase } from "change-case";
import { AnalyticsBrowser } from "@segment/analytics-next";
import type { Plugin } from "@segment/analytics-next";

const titlecase: Plugin = {
  name: "Titlecase",
  type: "before",
  version: "1.0.0",

  isLoaded: () => true,
  load: () => Promise.resolve(),

  track: (ctx) => {
    if (ctx.event.event) {
      ctx.event.event = capitalCase(ctx.event.event);
    }

    return ctx;
  },
};

const segment = new AnalyticsBrowser();
if (import.meta.env.VITE_SEGMENT_WRITE_KEY) {
  segment.load({
    writeKey: import.meta.env.VITE_SEGMENT_WRITE_KEY,
    plugins: [titlecase],
  });
}

export default segment;
