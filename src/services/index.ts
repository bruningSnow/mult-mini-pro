import http from "./http";

type TConfig = Omit<Parameters<typeof http>[0], "url" | "data">;

// 获取接口的 示例
export const queryBaseUrl = (data, config?: TConfig) =>
  http({
    url: "https://path",
    data,
    ...(config || {}),
  });
