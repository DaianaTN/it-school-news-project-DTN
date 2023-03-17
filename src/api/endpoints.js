const API_KEY = "27483dee-88b3-4fec-a213-61e3c62f5f54"; //not safe

export const getNewsCategoriesEndpoint = (
  category,
  page = 1,
  pageSize = 20
) => {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page=${page}&page-size=${pageSize}`;

  return `https://content.guardianapis.com/search${queryParams}`;
};

export const getNewsDetailsEndpoint = newsId => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
};
