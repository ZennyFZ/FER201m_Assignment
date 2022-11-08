import { Button, Row, Col, Container } from "react-materialize";
import { Link } from "react-router-dom";
export default function AnimeList(animes) {
    console.log(animes);
  return (
    <div>
      <h4 style={{ color: "white" }}>All Anime</h4>
      <div className="bottom-line2"></div>
      <Container>
        <Row>
          {animes.animes.map((anime, index) => (
            <Col s={12} m={6} l={4} key={index}>
              <div style={{ background: "black" }} className="card">
                <div className="card-image">
                  <img src={anime.image} alt={anime.name} />
                </div>
                <Link to={`/Anime/${anime.id}`}>
                  <div className="card-title">{anime.name}</div>
                </Link>
                <Link to={`/Watch/${anime.id}`}>
                  <div className="card-action">
                    <Button>Watch</Button>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
