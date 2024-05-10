export const selectCategoriesMap = (state) => state.categories.categoriesMap;

// import { createSelector } from 'reselect';

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title] = items;
//       return acc;
//     }, {})
// );


// TODO: it's from:
// useEffect(() => {
//   setProducts(categoriesMap[category]);
// }, [category, categoriesMap]);