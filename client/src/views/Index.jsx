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
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        {"game3.js"}
                        <span>The Web 3.0 Game Framework</span>
                      </h1>
                      <p className="lead text-white">
                        Web 2.0 platforms have changed how we design video games: from delighting our players, to monetizing their attention.
                      </p>
                      <p className="lead text-white">
                      Web 3.0 will help us break free from these coercive, centralized platforms.
                      </p>

                    </Col>
                    <Col lg="6">
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

            <section className="section section-lg pt-lg-0 mt--200">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                              <i className="ni ni-bulb-61" />
                            </div>
                            <h6 className="text-primary text-uppercase">
                              <strong>STEP 1. &nbsp;</strong>DESIGN THE ECOSYSTEM
                            </h6>
                            <p className="description mt-3">
                              Game ecosystems don't need to be limited to in-app purchases and ads.
                              Cryptocurrencies, NFTs and DeFi can inspire new monetization flows.
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                              <i className="ni ni-spaceship" />
                            </div>
                            <h6 className="text-success text-uppercase">
                              <strong>STEP 2. &nbsp;</strong>BUILD WITH WEB 3.0
                            </h6>
                            <p className="description mt-3">
                              Centralized platforms control our players' data and
                              gatekeep their transactions. Build on open-source, blockchains, and
                              other decentralized services to reduce this reliance.
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardBody className="py-5">
                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                              <i className="ni ni-planet" />
                            </div>
                            <h6 className="text-warning text-uppercase">
                              <strong>STEP 3. &nbsp;</strong>DEPLOY ON THE WEB
                            </h6>
                            <p className="description mt-3">
                            Modern browsers have native device capabilities,
                            no need to download a build from the app stores.
                            Get players into our game by just sharing a URL.
                            </p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>

            <section name="design" className="section section-shaped">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-md">
                <Row className="justify-content-between align-items-center">
                <Col className="order-lg-1" lg="12">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-bulb-61 text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                          <strong>STEP 1. &nbsp;</strong>DESIGN THE ECOSYSTEM
                      </h4>
                      <p className="lead text-white">
                      Game ecosystems don't need to be limited to in-app purchases and ads.
                      Cryptocurrencies, NFTs and DeFi can inspire new monetization flows.


                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-book-bookmark" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-primary">
                            LEARN FROM ECOSYSTEMS, BOTH OLD AND NEW
                          </h5>
                          <p>
                            - Read <a href="https://mitpress.mit.edu/books/virtual-economies"> Virtual Economies: Design and Analysis</a>
                          </p>

                          <p>
                            - Read about <a href="https://opensea.io/blog/guides/non-fungible-tokens/"> Non-Fungible Tokens (NFTs)</a>
                          </p>

                          <p>
                            - Read on <a href="https://medium.com/@w_brealey/5-ethereum-defi-apps-revolutionizing-saving-9f717fe2e595
                          "> Decentralized Finance (DeFi)</a>
                          </p>

                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-settings" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-primary">
                            PROTOTYPE YOUR ECOSYSTEM
                          </h5>
                          <p>
                            It helps to use your favorite diagramming tool to map out your game's ecosystem. ETH.BUILD is
                            a good example -- the web 2.0 diagram above was made using custom ETH.BUILD components.
                          </p>
                          <a
                            className="text-primary"
                            href="https://eth.build"
                            onClick={e => e.preventDefault()}
                          >
                            Visit ETH.BUILD
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
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
                  <polygon className="fill-success" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </section>


            <section name="build" className="section section-shaped bg-success">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-md">
                <Row className="justify-content-between align-items-center">
                <Col className="order-lg-1" lg="12">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-spaceship text-success" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                          <strong>STEP 2. &nbsp;</strong>BUILD WITH WEB 3.0
                      </h4>
                      <p className="lead text-white">
                      Centralized platforms control our players' data and
                      gatekeep their transactions. Build on open-source, blockchains, and
                      other decentralized services to reduce this reliance.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-atom" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            SOME EXAMPLE WEB 2.0 - WEB 3.0 CONVERSIONS

                          </h5>

                          <p>
                            - Instead of a Facebook Login, authenticate users via cryptographic signing like <a href="https://metamask.io/">Metamask</a>
                          </p>

                          <p>
                            - Instead of using a CDN, use decentralized storage like <a href="https://ipfs.io/">IPFS</a>
                          </p>

                          <p>
                            - Instead of using Unity, use an open-source web-based game engine like <a href="https://phaser.io/">Phaser</a> or <a href="https://www.babylonjs.com/">Babylon.js</a>
                          </p>

                          <p>
                            - Instead of in-app purchases, monetize our game using NFTs in open markets like <a href="https://opensea.io/">Opensea</a>
                          </p>

                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
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
                  <polygon className="fill-success" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </section>



            <section name="deploy" className="section section-lg bg-gradient-warning">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col className="order-md-2" md="5">
                    <ChessDemo/>
                  </Col>
                  <Col className="order-md-1" md="7">

                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-planet text-warning" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                          <strong>STEP 3. &nbsp;</strong>DEPLOY ON THE WEB
                      </h4>
                      <p className="lead text-white">
                      Modern browsers have native device capabilities,
                      no need to download a build from the app stores.
                      Get players into our game by just sharing a URL.
                      </p>

                      <p className="lead text-white">
                      - Quickly test deploys on web-based prototyping services such as <a href="https://codesandbox.io/">CodeSandbox</a>
                      </p>

                      <p className="lead text-white">
                      - Deploy on your own URL or on web platforms like <a href="https://itch.io/">itch.io</a>
                      </p>


                      <p className="lead text-white">
                      Play a game of chess.
                      </p>


                    </div>
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
