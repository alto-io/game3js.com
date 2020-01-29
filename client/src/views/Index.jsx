import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";

import ChessDemo from "components/ChessDemo";
import EthBuild from "components/ethbuild";

class Index extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row className="row-grid align-items-center">
                    <Col lg="4">
                      <h1 className="display-3 text-white">
                        The Web 3.0 Game Framework{" "}
                        <span>Open-source & Decentralized</span>
                      </h1>
                      <p className="lead text-white">
                        Web 2.0 platforms such as social networks, app stores and
                        ad networks have changed the focus of games: from delighting players, to monetizing their attention.
                      </p>
                      <p className="lead text-white">
                      Web 3.0 will help us break free from this unsustainable attention economy.
                      </p>

                    </Col>
                    <Col lg="8">
                      <EthBuild/>
                    </Col>

                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
            <section className="section section-lg">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col className="order-md-2" md="6">
                    <ChessDemo/>
                  </Col>
                  <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                      <h3>Awesome features</h3>
                      <p>
                        Play the example games to get a quick understanding
                        of the engine. Afterwards, download the source code
                        and make them your own.
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="success"
                              >
                                <i className="ni ni-settings-gear-65" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Carefully crafted components
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="success"
                              >
                                <i className="ni ni-html5" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">Distribute on any web page</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div>
                              <Badge
                                className="badge-circle mr-3"
                                color="success"
                              >
                                <i className="ni ni-satisfied" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Designed for players, not platforms
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default Index;
