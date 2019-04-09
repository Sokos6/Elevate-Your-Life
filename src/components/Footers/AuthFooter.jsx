/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  © 2018{" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="http://elevatetickets.com/"
                    target="_blank"
                  >
                    Elevate Tickets
                  </a>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  <NavItem>
                    <NavLink
                      href="http://elevatetickets.com/"
                      target="_blank"
                    >
                      Elevate Tickets
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://elevatetickets.com/"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://elevatetickets.com/"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://support.festivalticketing.com/hc/en-us"
                      target="_blank"
                    >
                      Support
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
