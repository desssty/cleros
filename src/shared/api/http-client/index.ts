import axios, { type AxiosInstance } from "axios";
import type { HttpRequestConfig, HttpResponse } from "./types";

const BASE_URL = "http://localhost:3000";

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  async get<T>(utl: string, config?: HttpRequestConfig): Promise<T> {
    const response: HttpResponse<T> = await this.instance.get<T>(utl, config);
    return response.data;
  }

  async post<T, D>(
    utl: string,
    data?: D,
    config?: HttpRequestConfig
  ): Promise<T> {
    const response: HttpResponse<T> = await this.instance.post<T>(
      utl,
      data,
      config
    );
    return response.data;
  }

  async put<T, D>(
    utl: string,
    data?: D,
    config?: HttpRequestConfig
  ): Promise<T> {
    const response: HttpResponse<T> = await this.instance.put<T>(
      utl,
      data,
      config
    );
    return response.data;
  }
  async delete<T>(utl: string, config?: HttpRequestConfig): Promise<T> {
    const response: HttpResponse<T> = await this.instance.delete<T>(
      utl,
      config
    );
    return response.data;
  }
}

export const httpClient = new HttpClient(BASE_URL);
