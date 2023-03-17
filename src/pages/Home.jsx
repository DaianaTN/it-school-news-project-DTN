import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adapters";
import { NewsCardList } from "../components/NewsCardList";

export function Home() {
  const musicNewsEndpoint = getNewsCategoriesEndpoint("music", 1, 6);
  const booksNewsEndpoint = getNewsCategoriesEndpoint("books", 1, 6);
  const scienceNewsEndpoint = getNewsCategoriesEndpoint("science", 1, 6);

  let musicData = useFetch(musicNewsEndpoint);
  let booksData = useFetch(booksNewsEndpoint);
  let scienceData = useFetch(scienceNewsEndpoint);

  const adaptedMusicData = getNewsList(musicData);
  const adaptedBooksData = getNewsList(booksData);
  const adaptedScienceData = getNewsList(scienceData);

  return (
    <Layout>
      {/* Music section */}
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Music</h1>

          <NewsCardList newsList={adaptedMusicData} />
          <p>
            Mai multe stiri din{" "}
            <Link to="/category/music" className="text-success">
              Muzica
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Books section */}
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Books</h1>

          <NewsCardList newsList={adaptedBooksData} />
          <p>
            Mai multe stiri din{" "}
            <Link to="/category/books" className="text-success">
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Science section */}
      <section className="my-5">
        <Container>
          <h1 className="mb-5 pt-3">Science</h1>

          <NewsCardList newsList={adaptedScienceData} />
          <p>
            Mai multe stiri din{" "}
            <Link to="/category/science" className="text-success">
              Stiinta
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Favorites section */}
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>Salveaza stirile favorite</p>

          <p className="pb-3">
            Vezi stiri{" "}
            <Link to="/favorites" className="text-success">
              favorite
            </Link>{" "}
          </p>
        </Container>
      </section>
    </Layout>
  );
}
