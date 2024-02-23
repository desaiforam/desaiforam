

export const addToCart = (state, ids) =>
  ids.map(id => state.products.find(product => product.id === id));


