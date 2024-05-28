import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const strApiHeaders = {
  Authorization: `bearer ` + import.meta.env.VITE_APP_STRAPI_TOKEN,
};

const baseUrl = import.meta.env.VITE_APP_STRAPI_API_URL;

const createRequest = (url) => ({ url, headers: strApiHeaders });

export const strApi = createApi({
  reducerPath: "strApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => createRequest(`/products?populate=*`),
    }),
    getAllProductsPlusFilter: builder.query({
      query: ({ subCats, maxPrice, sort }) =>
        createRequest(
          `/products?populate=*${subCats.map(
            (item) => `&filters[sub_category][id][$eq]=${item}&`
          )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
        ),
    }),
    getSubCategoriesByCategoryId: builder.query({
      query: (catId) =>
        createRequest(
          `/sub-categories?[filters][categories][id][$eq]=${catId}`
        ),
    }),
    getProductById: builder.query({
      query: (id) => createRequest(`/products/${id}?populate=*`),
    }),
    getCategoryById: builder.query({
      query: (catId) => createRequest(`/categories/${catId}?populate=img`),
    }),
    getCategoryProductList: builder.query({
      query: ({ subCats, maxPrice, sort, catId }) =>
        createRequest(
          `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
            (item) => `&filters[sub_category][id][$eq]=${item}&`
          )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
        ),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAllProductsPlusFilterQuery,
  useGetSubCategoriesByCategoryIdQuery,
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
  useGetCategoryProductListQuery,
} = strApi;
