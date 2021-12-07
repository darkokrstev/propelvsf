import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/propelvsf-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    console.log('PROPELLER Mocked: useProduct.productsSearch');

    let productData;
    if (params.id)
      productData = await context.$propelvsf.api.productDetails(params);
    else
      productData = await context.$propelvsf.api.products(params);

    console.log('composable params', params);
    console.log('composable data', productData);
    
    return params.id ? productData?.product || {} : productData?.products?.items || [];
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
