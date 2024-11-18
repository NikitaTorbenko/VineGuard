import { ApiClient, FILE_API, Endpoints } from "./index";

export const createNewProduct = async (data: any) => {
  const result = await ApiClient({
    url: `${Endpoints.PRODUCTS}`,
    method: "POST",
    data: data,
  });

  return result;
};

// если надо сделать запрос на другой урл (не базовый)
export const createNewProduct2 = async (data: any) => {
  const result = await ApiClient(
    {
      url: `${Endpoints.PRODUCTS}`,
      method: "POST",
      data: data,
    },
    FILE_API // добавляем второй параметр с другим апи
  );

  return result;
};
