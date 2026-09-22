import { defineConfig } from "astro/config";

export default defineConfig({
  // 上线后改成你的自定义域名，例如 https://www.example.com
  site: "https://fuhai-liang.github.io",
  // 用户主页仓库(<用户名>.github.io) 用根路径；项目仓库则要改成 "/仓库名/"
  base: "/",
  output: "static",
  devToolbar: {
    enabled: false,
  },
});
