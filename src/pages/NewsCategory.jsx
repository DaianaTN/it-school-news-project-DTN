import { useLocation, useParams } from "react-router-dom";
import { getNewsList } from "../api/adapters";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { NewsCardList } from "../components/NewsCardList";
import { Pagination } from "../components/Pagination";
import { useFetch } from "../utils/hooks/useFetch";

export function NewsCategory() {
  const { categoryId } = useParams();
  const queryParams = new URLSearchParams(useLocation().search);
  let currentPage = queryParams.get("page");
  if (!currentPage) {
    currentPage = 1;
  }

  const newsEndpoint = getNewsCategoriesEndpoint(categoryId, currentPage);
  const news = useFetch(newsEndpoint);
  const adaptedNews = getNewsList(news);

  let title = "";

  switch (categoryId) {
    case "technology": {
      title = "Tech";
      break;
    }
    case "music": {
      title = "Music";
      break;
    }
    case "books": {
      title = "Books";
      break;
    }
    case "science": {
      title = "Science";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <Layout>
      <h1 className="my-5">{title}</h1>
      <NewsCardList newsList={adaptedNews} />
      <Pagination baseUrl={`/category/${categoryId}`} active={currentPage} />
    </Layout>
  );
}
