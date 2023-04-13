import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </Container>
    </Navbar>
  );
};

export default MyNav;
