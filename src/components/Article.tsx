import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { News } from "../interfaces/News";

const Article = () => {
  const params = useParams();
  const [article, setArticle] = useState<News | null>(null);
  const endpoint = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`;

  const fetchArticle = async () => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const res = await response.json();
        setArticle(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <Card id="article" className="my-5">
        {article && (
          <>
            <Card.Img variant="top" src={article.imageUrl} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.newsSite}</Card.Text>
              <Card.Text>{article.summary}</Card.Text>
            </Card.Body>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Article;
