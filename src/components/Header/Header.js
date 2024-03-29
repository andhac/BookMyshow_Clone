import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ padding: "0" }}>
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              style={{ width: "150px", height: "55px" }}
              alt="brand logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/regi">Registation</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="cont">
        <div className="hii">
          <div className="NavDown">
            <div className="hie">
              <a href="/mov" className="he">
                Movie
              </a>
              <a href=" " className="he">
                Stream
              </a>
              <a href=" " className="he">
                Events
              </a>
              <a href=" " className="he">
                Plays
              </a>
              <a href=" " className="he">
                Sports
              </a>
            </div>
          </div>
          <div className="ho">
            <div className="hie">
              <a href=" " className="next">
                ListYourShow
              </a>
              <a href=" " className="next">
                Corporates
              </a>
              <a href=" " className="next">
                Offer
              </a>
              <a href=" " className="next">
                Gift Cards
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
