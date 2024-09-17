import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";

const Homepage = () => {
  const [gameID, setGameID] = useState("");

  const location = useLocation();
  let errorMessage = location.state?.errMessage;

  const pageStyles = {
    background: "linear-gradient(135deg, #ffcc33, #ff66cc)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  const containerStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: "2rem",
    borderRadius: "10px",
  };

  return (
    <div style={pageStyles}>
      <Container style={containerStyles}>
        {errorMessage && (
          <Alert variant="danger" dismissible>
            {errorMessage}
          </Alert>
        )}

        <div className="py-4 text-center w-100">
          <h1 className="fw-bold mb-4">Card Game Rules</h1>
          <p className="lead col-md-8 m-auto mb-5">
            Welcome to the card game! One player will create a game room, and
            the other player will join using the provided game ID. The objective
            is to play all your cards according to the rules below.
          </p>

          <h3 className="fw-bold mb-3">Game Rules</h3>
          <ul className="col-md-8 text-start fs-5 list-unstyled">
            <li>1. Each player starts with a hand of 5 cards.</li>
            <li>2. The game starts with a standard 52-card deck.</li>
            <li>3. Players take turns playing cards from their hand.</li>
            <li>
              4. Cards can be played if they match the rank or suit of the top
              card on the discard pile.
            </li>
            <li>
              5. If a player cannot play, they must draw a card. The game ends
              in a draw if no cards remain in the draw pile.
            </li>
            <li>6. The game ends when one player plays all their cards and wins.</li>
          </ul>

          <h4 className="fw-bold mt-5">Bonus Actions</h4>
          <p className="fs-6 mb-3">Certain cards have special effects when played:</p>
          <ul className="col-md-8 text-start fs-5 list-unstyled">
            <li>
              <strong>Ace (A):</strong> Skip the next player’s turn.
            </li>
            <li>
              <strong>King (K):</strong> Reverse the order of play.
            </li>
            <li>
              <strong>Queen (Q):</strong> The next player draws 2 cards from the
              deck.
            </li>
            <li>
              <strong>Jack (J):</strong> The next player draws 4 cards from the
              deck.
            </li>
          </ul>

          <Row className="d-flex flex-row mt-5 justify-content-center">
            <Col md={5} className="p-3 text-center">
              <Form>
                <Form.Group controlId="gameID">
                  <Form.Control
                    type="text"
                    placeholder="Enter Game ID"
                    value={gameID}
                    onChange={(e) => setGameID(e.target.value)}
                    className="text-center"
                  />
                </Form.Group>
                <Link to={gameID ? "/play" : "#"} state={{ gameID: gameID }}>
                  <Button
                    variant="primary"
                    className="mt-3 w-100"
                    disabled={!gameID}
                  >
                    Join Game
                  </Button>
                </Link>
              </Form>
            </Col>

            <Col md={5} className="p-3 text-center">
              <Link to="/play">
                <Button variant="success" className="mt-3 w-100">
                  Create Game
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
