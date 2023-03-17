import { Col, Container, Row } from "react-bootstrap";
import { NewsCard } from "./NewsCard";

export function NewsCardList(props) {
  const { newsList } = props;

  return (
    <Container>
      <Row>
        {newsList.map(newsItem => (
          <Col key={newsItem.id} xs={12} md={6} lg={4} className="mb-4">
            <NewsCard newsItem={newsItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
