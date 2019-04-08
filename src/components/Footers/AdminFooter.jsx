/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2018{" "}
              <a
                className="font-weight-bold ml-1"
                href="http://elevatetickets.com/"
                rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Elevate Tickets
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://elevatetickets.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://elevatetickets.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://support.festivalticketing.com/hc/en-us"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Support
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
