import { useLoading } from "@/app/components/LoadingProvider";
import axios, { AxiosRequestConfig } from "axios";

export const useRequest = () => {
  const { showLoading, hideLoading } = useLoading();

  const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
    showLoading();
    try {
      const response = await axios(config);
      return response.data;
    } catch (err) {
      throw err;
    } finally {
      hideLoading();
    }
  };

  return { request };
};
