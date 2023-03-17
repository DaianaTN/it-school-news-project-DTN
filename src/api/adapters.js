export const getNewsList = apiResponse => {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  const rawNewsList = apiResponse.response.results;

  const adaptedNewsList = rawNewsList.map(item => {
    return {
      id: item.id,
      image: item.fields.thumbnail,
      title: item.fields.headline,
      description: item.fields.trailText,
    };
  });

  return adaptedNewsList;
};

export const getNewsDetails = apiResponse => {
  if (!apiResponse || !apiResponse.response) {
    return {};
  }

  const rawNewsDetails = apiResponse.response.content;

  const adaptedDetailsList = {
    date: rawNewsDetails.webPublicationDate,
    title: rawNewsDetails.fields.headline,
    description: rawNewsDetails.fields.trailText,
    image: rawNewsDetails.fields.main,
    content: rawNewsDetails.fields.body,
    author: rawNewsDetails.fields.byline,
    thumbnail: rawNewsDetails.fields.thumbnail,
  };

  return adaptedDetailsList;
};
