import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product, ProductFilter } from '@vue-storefront/propelvsf-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: any): string {
  return product?.name[0]?.value;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: any): string {
  return 'slug-' + product?.classId;
  // return product?.classId;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: any): AgnosticPrice {
  return {
    regular: product?.originalPrice,
    special: product?.costPrice
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: any): AgnosticMediaGalleryItem[] {
  return [
    {
      small: product?.images[0]?.url,
      normal: product?.images[0]?.url,
      big: product?.images[0]?.url
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: any): string {
  return product?.images[0]?.url;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  console.log('PROPELLER getFiltered', products, filters);

  if (!products) {
    return [];
  }
  
  return products;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  return {};
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: any): string {
  return product?.classId;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating
};
