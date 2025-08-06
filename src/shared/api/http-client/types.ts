import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HttpRequestConfig<T = unknown> extends AxiosRequestConfig<T> {}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HttpResponse<T = unknown> extends AxiosResponse<T> {}
