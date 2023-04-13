import { Container, Row, Col } from "react-bootstrap";
import NewsComponent from "./NewsComponent";
import { useEffect, useState } from "react";
import { News } from "../interfaces/News";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);

  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const fetchNews = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const res = await response.json();
        setNews(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Container className="my-5">
      <Row xs={2} lg={4}>
        {news.map(n => (
          <Col key={n.id}>
            <NewsComponent imageUrl={n.imageUrl} title={n.title} newsSite={n.newsSite} id={n.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
