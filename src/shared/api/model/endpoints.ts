enum enumEndpoints {
  PRODUCTS = "PRODUCTS",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.PRODUCTS]: "/products",
};
