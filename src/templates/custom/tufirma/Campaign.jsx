import React from 'react'
import {Col, Row, Visible, useScreenClass} from 'react-grid-system'
import Text from '../../../components/Text'
import Card from '../../../components/Card'

const Campaign = () => {
  const screenClass = useScreenClass()

  return (
    <>
      <Row>
        <Col
          
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            backgroundImage: `url(${require('./assets/fondo_pasos.png')})`,
            backgroundSize: 'cover',
            width: `${100}%`,
            height: ['xs', 'sm'].includes(screenClass) ? `${40}rem` : `${25}rem`,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: ['xs', 'sm'].includes(screenClass) ? 30 : 100
          }}
        >
          <Row>
            <Col
              
              xs={12}
              sm={12}
              md={4.7}
              lg={4.7}
              xl={4.7}
              style={{
                display: 'flex',
                paddingBottom: 30,
                textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                paddingLeft: ['md'].includes(screenClass) ? `${3}rem` : `${0}rem`
              }}
            >
              <Text
                className="default-title"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.5}rem` : `${1.9}rem`,
                  fontWeight: 'bolder',
                  color: '#fff'
                }}
              >
                Crear una campaña <br/> en tres simples pasos...
              </Text>
            </Col>
            <Col
              
              xs={12}
              sm={12}
              md={2.3}
              lg={2.3}
              xl={2.3}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={require('./assets/paso1.svg')}
                alt="paso1"
                style={{
                  width: ['md'].includes(screenClass) ? `${6.5}rem` : `${7.5}rem`,
                  height: `${10}rem`
                }}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={2.3}
              lg={2.3}
              xl={2.3}
              
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${3}rem` : `${15}px`
              }}
            >
              <img
                src={require('./assets/paso2.svg')}
                alt="paso2"
                style={{
                  width: ['md'].includes(screenClass) ? `${8.5}rem` :  `${10}rem`,
                  height: `${10}rem`
                }}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={2.3}
              lg={2.3}
              xl={2.3}
              
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${5}rem` : `${15}px`
              }}
            >
              {console.log(screenClass)}
              <img
                src={require('./assets/paso3.svg')}
                alt="paso3"
                style={{
                  width: ['md'].includes(screenClass) ? `${10.5}rem` : `${12}rem`,
                  height: `${10}rem`
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Visible
          xs
          sm
        >
          <Col
            xs={12}
            sm={12}
            style={{
              padding: 0
            }}
            
          >
            <Card
              className="tf-search-box"
              style={{
                padding: `${2}rem`
              }}
            >
              <Row>
                <Col
                  xs={3}
                  sm={3}
                  
                >
                  <img
                    src={require('./assets/pen.svg')}
                    alt="pen"
                    style={{
                      width: `${4}rem`
                    }}
                  />
                </Col>
                <Col
                  xs={8}
                  sm={8}
                  
                >
                  <Text
                    className="default-title"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.8}rem` : `${2.3}rem`,
                      fontWeight: 'bolder',
                      textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                      color: '#fff'
                    }}
                  >
                    CREA YA TU CAMPAÑA
                  </Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Visible>
        <Visible
          md
          lg
          xl
        >
          <Col
            md={2.6}
            lg={2.6}
            xl={2.6}
            
            style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 6,
              left: ['lg', 'xl'].includes(screenClass) ? `${10}rem` : `${7}rem`,
              bottom: `${38}rem`
            }}
          >
            <Card
              className="tf-search-box"
              style={{
                padding: `${2}rem`,
                backgroundColor: '#FF3300'
              }}
            >
              <Row>
                <Col
                  md={12}
                  lg={12}
                  xl={12}
                  
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={require('./assets/pen.svg')}
                    alt="pen"
                    style={{
                      width: `${4}rem`
                    }}
                  />
                </Col>
                <Col
                  md={12}
                  lg={12}
                  xl={12}
                  
                  style={{
                    marginTop: `${1}rem`,
                    textAlign: 'center'
                  }}
                >
                  <Text
                    className="default-title"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.8}rem` : `${1.5}rem`,
                      fontWeight: 'bolder',
                      color: '#fff'
                    }}
                  >
                    CREA YA TU CAMPAÑA
                  </Text>
                </Col>
              </Row>
            </Card>
          </Col>
        </Visible>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          
          style={{
            backgroundImage: `url(${require('./assets/fondo_amarillo.svg')})`,
            backgroundSize: 'cover',
            width: `${100}%`,
            height: ['xs', 'sm'].includes(screenClass) ? `${17}rem` : `${12}rem`,
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <div
            style={{
              backgroundImage: `url(${require('./assets/manos.svg')})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: `${100}%`,
              height: ['xs', 'sm'].includes(screenClass) ? `${17}rem` : `${12}rem`
            }}
          >
            <Row
              style={{
                paddingTop: ['xs', 'sm'].includes(screenClass) ? `${2}rem` : `${5}rem`
              }}
            >
              <Col
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                offset={{
                  md: 5,
                  lg: 5,
                  xl: 5
                }}
                
                style={{
                  display: 'flex'
                }}
              >
                <Text
                  className="default-title"
                  style={{
                    fontSize: ['xs', 'sm'].includes(screenClass) ? `${3}rem` : `${2.3}rem`,
                    fontWeight: 'bolder',
                    textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                    padding: 0
                  }}
                >
                  705,823
                  <Text
                    className="default-title"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.5}rem` : `${1}rem`,
                      fontWeight: 'bolder',
                      padding: 0,
                      paddingTop: 5,
                      margin: 0,
                      display: 'block'
                    }}
                  >
                    Personas firmaron
                  </Text>
                </Text>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
                
                style={{
                  display: 'flex',
                  marginTop: ['xs', 'sm'].includes(screenClass) ? `${1}rem` : 0
                }}
              >
                <Text
                  className="default-title"
                  style={{
                    fontSize: ['xs', 'sm'].includes(screenClass) ? `${3}rem` : `${2.3}rem`,
                    fontWeight: 'bolder',
                    textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                    padding: 0
                  }}
                >
                  143
                  <Text
                    className="default-title"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.5}rem` : `${1}rem`,
                      fontWeight: 'bolder',
                      padding: 0,
                      paddingTop: 5,
                      margin: 0,
                      display: 'block'
                    }}
                  >
                    Campañas
                  </Text>
                </Text>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Campaign