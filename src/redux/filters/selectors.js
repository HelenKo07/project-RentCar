export const selectFilters = (state) => state.filters;
export const selectFilterByName = (name) => (state) => state.filters[name];
