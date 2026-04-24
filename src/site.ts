import { WorkLayout } from "./layout";
import workSiteContent from "./site-content";
import { workRoutes } from "./routes";

export default {
  pluginConfig: {
    themeProfile: "studio",
  },
  templates: workSiteContent,
  layouts: {
    default: WorkLayout,
  },
  routes: workRoutes,
};
