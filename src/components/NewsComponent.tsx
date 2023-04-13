import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewsProps } from "../interfaces/News";

const NewsComponent = ({ imageUrl, title, newsSite, id, publishedAt }: NewsProps) => {
  const navigate = useNavigate();
  return (
    <Card className="my-2">
      <Card.Img id="img" variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{newsSite}</Card.Text>
        <Card.Text>Pubblicato il: {publishedAt}</Card.Text>
        <Button onClick={() => navigate(`/article/${id}`)} variant="primary">
          Discover more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsComponent;
