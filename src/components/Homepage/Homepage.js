import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa"; // Import an icon for bullet points

const Homepage = () => {
  const [gameID, setGameID] = useState("");

  const location = useLocation();
  let errorMessage = location.state?.errMessage;

  // Inline styles for the background animation and other elements
  const pageStyles = {
    background: "linear-gradient(135deg, #ffcc33, #ff66cc)",
    backgroundSize: "200% 200%",
    animation: "gradientAnimation 6s ease infinite",
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
    maxWidth: "800px",
  };

  const headingStyles = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "3.5rem",
    fontWeight: "bold",
    color: "#ffcc33",
    textTransform: "uppercase",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
    letterSpacing: "3px",
    background: "linear-gradient(to right, #ff66cc, #ffcc33)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const paragraphStyles = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  };

  const gameRulesStyles = {
    color: "#ffcc33",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "2rem",
  };

  const ruleItemStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const ruleIconStyles = {
    marginRight: "1rem",
    color: "#ffcc33",
    fontSize: "1.5rem",
  };

  const bonusActionsHeadingStyles = {
    marginTop: "3rem",
    fontWeight: "bold",
    fontSize: "1.8rem",
    color: "#ff66cc",
  };

  const buttonStyles = {
    transition: "transform 0.2s ease-in-out",
  };

  // Keyframes for background animation (using JS approach for CSS animation)
  const addAnimationStyles = `
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;

  return (
    <div>
      <style>{addAnimationStyles}</style>
      <div style={pageStyles}>
        <Container style={containerStyles}>
          {errorMessage && (
            <Alert variant="danger" dismissible>
              {errorMessage}
            </Alert>
          )}

          <div className="py-4 text-center w-100">
            {/* Updated Main Heading */}
            <h1 style={headingStyles} className="mb-4">
              Card Game Rules
            </h1>

            {/* Instructions to Create and Join Game */}
            <p style={paragraphStyles} className="lead col-md-8 m-auto mb-5">
              Welcome to the card game! To play the game, one player must create
              a game room by clicking on <strong>"Create Game"</strong>. A unique
              Game ID will be generated. The other player will use this Game ID
              to join the game by entering it in the <strong>"Enter Game ID"</strong>{" "}
              field.
            </p>

            {/* Styled Game Rules Section */}
            <h3 className="fw-bold mb-3">Game Rules</h3>
            <ul className="col-md-8 m-auto text-start list-unstyled" style={gameRulesStyles}>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>Each player starts with a hand of 5 cards.</span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>The game starts with a standard 52-card deck.</span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>Players take turns playing cards from their hand.</span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  Cards can be played if they match the rank or suit of the top card on the discard pile.
                </span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  If a player cannot play, they must draw a card. The game ends in a draw if no cards remain in the draw pile.
                </span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  The game ends when one player plays all their cards and wins.
                </span>
              </li>
            </ul>

            <h4 style={bonusActionsHeadingStyles}>Bonus Actions</h4>
            <p style={paragraphStyles} className="fs-6 mb-3">
              Certain cards have special effects when played:
            </p>
            <ul className="col-md-8 m-auto text-start list-unstyled" style={gameRulesStyles}>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  <strong>Ace (A):</strong> Skip the next player’s turn.
                </span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  <strong>King (K):</strong> Reverse the order of play.
                </span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  <strong>Queen (Q):</strong> The next player draws 2 cards from the
                  deck.
                </span>
              </li>
              <li style={ruleItemStyles}>
                <FaCheckCircle style={ruleIconStyles} />
                <span>
                  <strong>Jack (J):</strong> The next player draws 4 cards from the
                  deck.
                </span>
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
                      style={buttonStyles}
                      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >
                      Join Game
                    </Button>
                  </Link>
                </Form>
              </Col>

              <Col md={5} className="p-3 text-center">
                <Link to="/play">
                  <Button
                    variant="success"
                    className="mt-3 w-100"
                    style={buttonStyles}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    Create Game
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div >
    </div >
  );
};

export default Homepage;
