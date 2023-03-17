export const addToFavorites = newsItem => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: newsItem,
  };
};

export const removeFromFavorites = newsItemId => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: newsItemId,
  };
};
