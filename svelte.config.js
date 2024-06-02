import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),

    alias: {
      $components: "src/components",
      $public: "public",
      $user: "src/components/user",
      $admin: "src/components/admin",
      $staff: "src/components/staff",
      $technician: "src/components/technician",
      $nav: "src/components/nav",
    },
  },
};

export default config;
