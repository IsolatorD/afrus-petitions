import React from 'react'
import {
  Container,
  Row,
  Col,
  Visible,
  useScreenClass
} from 'react-grid-system'

import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'

import Card from '../../../components/Card'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import ProgressBar from '../../../components/ProgressBar'
import Badge from '../../../components/Badge'

import './index.css'

import Header from './Header'
import Campaign from './Campaign'
import Guia from './Guia'
import Footer from './Footer'
import Avatar from '../../../components/Avatar'


const tags = ['parroquia', 'capilla', 'apoyo']


const TuFirmaInterna = () => {
  const screenClass = useScreenClass()

  return (
    <Container
      fluid
      style={{
        overflowX: 'hidden'
      }}
    >
      <Header />
      <Row>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`,
            paddingTop: `${.7}rem`
          }}
        >
          <Text
            className="default-title"
            style={{
              fontSize: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${2.2}rem`,
              fontWeight: 'bolder',
              color: '#000000',
              textTransform: 'uppercase'
            }}
          >
            Recuperemos <br/>la Iglesia de Santa Lucía
          </Text>
        </Col>
        <Visible
          md
          lg
          xl
        >
          <Col
            md={4}
            lg={4}
            xl={4}
          >
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{
                  paddingBottom: `${1}rem`
                }}
              >
                <img
                  src={require('./assets/clock.svg')}
                  alt="clock"
                  style={{
                    width: `${1.5}rem`,
                    position: 'absolute'
                  }}
                />
                <Text
                  className="default-text"
                  style={{
                    fontSize: `${1}rem`,
                    fontWeight: 'bolder',
                    color: '#676C77',
                    paddingLeft: `${2}rem`,
                    fontFamily: 'Montserrat-Bold'
                  }}
                >
                  12
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.6}rem`,
                      fontWeight: 'bolder',
                      color: '#676C77',
                      display: 'block',
                      paddingLeft: `${2}rem`,
                      textTransform: 'uppercase'
                    }}
                  >
                    días de inicio
                  </Text>
                </Text>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <Text
                  className="default-text"
                  style={{
                    fontSize: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${1}rem`,
                    fontWeight: 'bolder',
                    color: '#000000',
                    fontFamily: 'Montserrat-Bold'
                  }}
                >
                  8249 personas firmaron
                  <Text
                    className="default-text"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${.8}rem`,
                      fontWeight: 'bolder',
                      color: '#676C77',
                      display: 'block'
                    }}
                  >
                    de 9000
                  </Text>
                </Text>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{
                  paddingTop: `${.2}rem`
                }}
              >
                <ProgressBar />
              </Col>
            </Row>
          </Col>
        </Visible>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{
            paddingTop: `${3}rem`,
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? 0 : `${2.5}rem`,
            paddingRight: ['xs', 'sm'].includes(screenClass) ? 0 : `${15}px`
          }}
        >
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <img
                src={require('./assets/capilla.png')}
                alt="first_image"
                style={{
                  width: `${100}%`,
                  height: ['xs', 'sm'].includes(screenClass) ? `${15}rem` : `${22}rem`
                }}
              />
            </Col>
            <Visible
              md
              lg
              xl
            >
              <Col
                md={6}
                lg={6}
                xl={6}
                style={{
                  paddingTop: `${.6}rem`,
                  paddingRight: `${.5}rem`
                }}
              >
                <img
                  src={require('./assets/capilla.png')}
                  alt="second_image"
                  style={{
                    width: `${100}%`,
                    height: `${12.5}rem`
                  }}
                />
              </Col>
              <Col
                md={6}
                lg={6}
                xl={6}
                style={{
                  paddingTop: `${.6}rem`,
                  paddingLeft: `${.5}rem`
                }}
              >
                <img
                  src={require('./assets/capilla.png')}
                  alt="third_image"
                  style={{
                    width: `${100}%`,
                    height: `${12.5}rem`
                  }}
                />
              </Col>
            </Visible>
          </Row>
        </Col>
        <Visible
          xs
          sm
        >
          <Col
            xs={12}
            sm={12}
            style={{
              paddingTop: `${1}rem`,
              paddingBottom: `${1}rem`,
              paddingLeft: `${1.5}rem`,
              paddingRight: `${1.5}rem`
            }}
          >
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{
                  paddingBottom: `${.2}rem`,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text
                  className="default-text"
                  style={{
                    fontSize: `${1.2}rem`,
                    fontWeight: 'bolder',
                    color: '#000000',
                    fontFamily: 'Montserrat-ExtraBold'
                  }}
                >
                  8249 firmas
                </Text>
                <Text
                  className="default-text"
                  style={{
                    fontSize: `${1}rem`,
                    fontWeight: 'bolder',
                    color: '#676C77',
                    fontFamily: 'Montserrat-Bold'
                  }}
                >
                  de 9000
                </Text>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{
                  paddingTop: `${.2}rem`
                }}
              >
                <ProgressBar
                  height={`${1}rem`}
                />
              </Col>
            </Row>
          </Col>
        </Visible>
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          style={{
            paddingTop: `${2.5}rem`
          }}
        >
          Aqui el formulario
        </Col>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          style={{
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`,
            paddingTop: `${1.5}rem`,
            paddingBottom: `${1.5}rem`
          }}
        >
          <Row>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={2}
              xl={2}
              style={{
                display: ['xs', 'sm'].includes(screenClass) ? 'flex' : 'block',
                justifyContent: ['xs', 'sm'].includes(screenClass) ? 'center' : ''
              }}
            >
              <Avatar>
                DA
              </Avatar>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={9}
              lg={10}
              xl={10}
            >
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    paddingTop: `${.5}rem`,
                    textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                    paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${15}px`,
                    paddingRight: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${15}px`
                  }}
                >
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.9}rem`,
                      fontWeight: 'bolder',
                      color: '#000000',
                      fontFamily: 'Montserrat-Bold'
                    }}
                  >
                    Jonathan Mora
                  </Text>
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.9}rem`,
                      color: '#6A6C72',
                      fontFamily: 'Montserrat',
                      marginLeft: ['xs', 'sm'].includes(screenClass) ? 0 : `${1.5}rem`,
                      paddingTop: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : 0,
                      paddingBottom: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : 0,
                      display: ['xs', 'sm'].includes(screenClass) ? 'block' : 'inline-block'
                    }}
                  >
                    Viceministro de la diócesis de Barcelona
                  </Text>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    paddingTop: `${.4}rem`,
                    textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                    paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${15}px`,
                    paddingRight: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${15}px`
                  }}
                >
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.9}rem`,
                      fontWeight: 'bolder',
                      color: '#0080F7',
                      fontFamily: 'Montserrat',
                      textDecoration: 'underline'
                    }}
                  >
                    Jmora@diobarcelona.org
                  </Text>
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.9}rem`,
                      color: '#000000',
                      fontWeight: 'bolder',
                      fontFamily: 'Montserrat',
                      marginLeft: ['xs', 'sm'].includes(screenClass) ? 0 : `${1.5}rem`,
                      paddingTop: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : 0,
                      display: ['xs', 'sm'].includes(screenClass) ? 'block' : 'inline-block'
                    }}
                  >
                    +93 095 849 54 23
                  </Text>
                </Col>
                <hr
                  style={{
                    width: ['xs', 'sm'].includes(screenClass) ? `${80}%` : `${95}%`,
                    backgroundColor: '#6A6C72',
                    marginTop: `${1}rem`,
                    marginBottom: `${1}rem`
                  }}
                />
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                    paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${15}px`,
                    paddingRight: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${15}px`
                  }}
                >
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.9}rem`,
                      color: '#676C77',
                      fontWeight: 'bolder',
                      fontFamily: 'Montserrat'
                    }}
                  >
                    Está campaña va dirigida a {' '}
                    <Text
                      className="default-text"
                      style={{
                        fontSize: `${.9}rem`,
                        color: '#FF3300',
                        fontFamily: 'Montserrat-Bold',
                        textDecoration: 'underline'
                      }}
                    >
                      Raul Roa Obispo del Ministerio de la diocesis de Barcelona, España
                    </Text>
                  </Text>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    paddingTop: `${.6}rem`,
                    paddingBottom: `${.6}rem`
                  }}
                >
                  <Text
                    className="default-text"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${1}rem` : `${.7}rem`,
                      color: '#000000',
                      fontWeight: 'bolder',
                      fontFamily: 'Montserrat-Bold',
                    }}
                  >
                    Compartir
                  </Text>

                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Visible
          md
          lg
          xl
        >
          <Col
            md={4}
            lg={4}
            xl={4}
          >
            <Row>
              <Col
                md={12}
                lg={12}
                xl={12}
                style={{
                  paddingBottom: `${2}rem`
                }}
              >
                <Row>
                  <Col
                    md={12}
                    lg={12}
                    xl={12}
                    style={{
                      paddingBottom: `${1}rem`
                    }}
                  >
                    <hr
                      style={{
                        width: `${1.2}rem`,
                        height: `${.2}rem`,
                        backgroundColor: '#000000',
                        border: 'none',
                        transform: 'rotate(90deg)',
                        display: 'inline-block'
                      }}
                    />
                    <Text
                      className="default-text"
                      style={{
                        fontSize: `${.9}rem`,
                        fontWeight: 'bolder',
                        color: '#1F2041',
                        paddingTop: `${.2}rem`
                      }}
                    >
                      Tags usados
                    </Text>
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    {tags.map((tag, i) => (
                      <Badge
                        key={i}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col
                md={12}
                lg={12}
                xl={12}
              >
                <Row>
                  <Col
                    md={12}
                    lg={12}
                    xl={12}
                    style={{
                      paddingBottom: `${1}rem`
                    }}
                  >
                    <hr
                      style={{
                        width: `${1.2}rem`,
                        height: `${.2}rem`,
                        backgroundColor: '#000000',
                        border: 'none',
                        transform: 'rotate(90deg)',
                        display: 'inline-block'
                      }}
                    />
                    <Text
                      className="default-text"
                      style={{
                        fontSize: `${.9}rem`,
                        fontWeight: 'bolder',
                        color: '#1F2041',
                        paddingTop: `${.2}rem`
                      }}
                    >
                      Siguenos en nuestras redes
                    </Text>
                  </Col>
                  <Col
                    md={12}
                    lg={12}
                    xl={12}
                  >
                    <Row>
                      <Col
                        md={6}
                        lg={6}
                        xl={6}
                      >
                        <Card
                          style={{
                            width: `${100}%`,
                            height: `${6}rem`,
                            boxShadow: `0px 10px 20px rgba(31, 32, 65, 0.2)`,
                            borderRadius: '4px',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          }}
                        >
                          <TwitterShareButton>
                            <TwitterIcon
                              size={32}
                              round
                            />
                          </TwitterShareButton>
                          <Text
                            className="default-text"
                            style={{
                              fontSize: `${.9}rem`,
                              fontWeight: 'bolder',
                              color: '#1F2041',
                              paddingTop: `${.2}rem`
                            }}
                          >
                            @tufirma
                          </Text>
                        </Card>
                      </Col>
                      <Col
                        md={6}
                        lg={6}
                        xl={6}
                      >
                        <Card
                          style={{
                            width: `${100}%`,
                            height: `${6}rem`,
                            boxShadow: `0px 10px 20px rgba(31, 32, 65, 0.2)`,
                            borderRadius: '4px',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                          }}
                        >
                          <FacebookShareButton>
                            <FacebookIcon
                              size={32}
                              round
                            />
                          </FacebookShareButton>
                          <Text
                            className="default-text"
                            style={{
                              fontSize: `${.9}rem`,
                              fontWeight: 'bolder',
                              color: '#1F2041',
                              paddingTop: `${.2}rem`
                            }}
                          >
                            tufirma
                          </Text>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Visible>
      </Row>
      <Campaign />
      <Guia />
      <Footer />
    </Container>
  )
}

export default TuFirmaInterna