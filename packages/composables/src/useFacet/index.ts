import {
  Context,
  useFacetFactory,
  FacetSearchResult
} from '@vue-storefront/core';
import type {
  UseFacetSearchParams as SearchParams
} from '../types';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<SearchParams>) => {
    console.log('PROPELLER Mocked: useFacet.search');

    const { data } = await context.$propelvsf.api.products();

    console.log('PROPELLER Mocked: useFacet.search data', data);

    return {
      items: data?.products?.items || []
    };
  }
};

export const useFacet = useFacetFactory<SearchParams>(factoryParams);
