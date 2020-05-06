import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Visible,
  useScreenClass
} from 'react-grid-system'
import Logo from './assets/logo.svg'

import Button from '../../../components/Button'
import Text from '../../../components/Text'
import Card from '../../../components/Card'
import Input from '../../../components/Input'
import Dropdown from '../../../components/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomSelect from '../../../components/CustomSelect'

import './index.css'

const categories = [
  { id: 0, name: 'todas', icon: require('./assets/0.svg')},
  { id: 1, name: 'construcción', icon: require('./assets/1.svg')},
  { id: 2, name: 'parroquia', icon: require('./assets/2.svg')},
  { id: 3, name: 'misiones', icon: require('./assets/3.svg')},
  { id: 4, name: 'evangelización', icon: require('./assets/4.svg')},
  { id: 5, name: 'comunidades', icon: require('./assets/5.svg')},
  { id: 6, name: 'medios', icon: require('./assets/6.svg')},
  { id: 7, name: 'educación', icon: require('./assets/7.svg')},
  { id: 8, name: 'formación', icon: require('./assets/8.svg')}
]

const blog = [
  { id: 0, type: 'img', name: 'iglesia', image: require('./assets/iglesia.png') },
  { id: 1, type: 'text', size: 27, color: '#F2F2F2', text: 'Términamos la parroquia de São Paulo' },
  { id: 2, type: 'img', name: 'flor', image: require('./assets/flor.png') },
  { id: 3, type: 'text', size: 23, color: '#FFA7C0', text: 'Los sacerdotes de la comunidad pudieron culminar su misión.' },
  { id: 4, type: 'img', name: 'cura', image: require('./assets/cura.png') },
  { id: 5, type: 'text', size: 19, color: '#A4DED2', text: 'Más de 300 seminaristas recibieron el segundo o el tercer grado del sacramento del Orden sacerdotal.' }
]

const TuFirma = () => {
  const [category, setCategory] = useState(0)
  const screenClass = useScreenClass()

  const changeCategory = (id) => {
    setCategory(id)
  }

  return (
    <Container
      fluid
      style={{
        overflowX: 'hidden'
      }}
    >
      <Row>
        <Col
          
          xs={5}
          sm={5}
          md={7}
          lg={7}
          xl={7}
          style={{
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`
          }}
        >
          <img
            className="tf-logo"
            src={Logo}
            alt={'TuFirma.org'}
            style={{
              marginTop: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${1.5}rem`
            }}
          />
        </Col>
        <Col
          
          xs={7}
          sm={7}
          md={5}
          lg={5}
          xl={5}
        >
          <Row>
            <Visible md lg xl>
              <Col
                      
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                style={{
                  marginTop: 10
                }}
              >
                <ul
                  className="tf-nav"
                >
                  <Text
                    className="tf-nav-item default-text"
                    style={{
                      marginTop: 2,
                      fontSize: `${.6}rem`,
                      fontWeight: 'bolder',
                      textTransform: 'uppercase'
                    }}
                  >
                    Contactenos
                  </Text>
                  <Text
                    className="tf-nav-item default-text"
                    style={{
                      marginTop: 2,
                      fontSize: `${.6}rem`,
                      fontWeight: 'bolder',
                      textTransform: 'uppercase'
                    }}
                  >
                    Iniciar Sesión
                  </Text>
                </ul>
              </Col>
            </Visible>
            <Col
              
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{
                marginTop: 20,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button
                onClick={() => console.log('Crea campaña!')}
              >
                Crea ya tu campaña
              </Button>
              <Visible xs sm>
                <Dropdown
                  style={{
                    marginLeft: `${.5}rem`
                  }}
                >
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.65}rem`,
                      fontWeight: 'bolder',
                      textTransform: 'uppercase'
                    }}
                  >
                    Contactenos
                  </Text>
                  <Text
                    className="default-text"
                    style={{
                      fontSize: `${.65}rem`,
                      fontWeight: 'bolder',
                      textTransform: 'uppercase'
                    }}
                  >
                    Iniciar Sesión
                  </Text>
                </Dropdown>
              </Visible>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={7}
          style={{
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`
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
                marginTop: `${2}em`,
                marginBottom: `${1.5}em`
              }}
            >
              <Text
                className="default-title"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.9}rem` : `${44}px`,
                  fontWeight: 'bolder'
                }}
              >
                La primera plataforma <br/>de firmas católicas del mundo
              </Text>
            </Col>
            <Col
              
              xs={12}
              sm={12}
              md={11}
              lg={11}
              xl={11}
              push={{
                md: 1,
                lg: 1,
                xl: 1
              }}
              style={{
                paddingBottom: ['xs', 'sm'].includes(screenClass) ? 25 : 0
              }}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${12}px` : `${16}px`
                }}
              >
                Somos una plataforma que busca <b>movilizar a ciudadanos y colaborar</b> con tomadores de decisión, para promover soluciones y ser un medio de difusión de las necesidades de los usuarios y organizaciones.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col
          
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          style={{
            paddingRight: 0,
            height: ['xs', 'sm'].includes(screenClass) ? `${10}em` : `${18}rem`,
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? 0 : 15
          }}
        >
          <Card
            className="tf-search-box"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              className="default-text"
              style={{
                fontSize: ['xs', 'sm'].includes(screenClass) ? `${16}px` : `${22}px`,
                color: '#fff',
                fontWeight: 'bolder',
                paddingBottom: 25
              }}
            >
              Buscar peticiones
            </Text>
            <Input
              placeholder="Buscar peticiones y proyectos"
              width={['xs', 'sm'].includes(screenClass) ? `${100}%` : `${100}%`}
              style={{
                border: 'none',
                borderRadius: 50,
                height: 35,
                paddingRight: 35,
                paddingLeft: 35,
                width: ['xs', 'sm'].includes(screenClass) ? `${70}%` : `${60}%`
              }}
            />
            <Text
              className="default-text"
              style={{
                fontSize: ['xs', 'sm'].includes(screenClass) ? `${10}px` : `${12}px`,
                color: 'rgba(255, 255, 255, .6)',
                paddingTop: 20,
                paddingRight: ['xs', 'sm'].includes(screenClass) ? 30 : 60,
                paddingLeft: ['xs', 'sm'].includes(screenClass) ? 30 : 60,
                textAlign: 'center'
              }}
            >
              Sugerencias: Construcción, parroquia, misiones, evangelización, comunidades...
            </Text>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`
          }}
        >
          Aqui va el carrousel
        </Col>
      </Row>
      <Row>
        <Col
          
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: `${2.5}rem`,
            backgroundColor: '#F6F6F6'
          }}
        >
          <Text
            className="default-title"
            style={{
              fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.9}rem` : `${44}px`,
              fontWeight: 'bolder'
            }}
          >
            Busca tu categoría
          </Text>
          <Text
            className="default-text"
            style={{
              fontSize: ['xs', 'sm'].includes(screenClass) ? `${12}px` : `${16}px`,
              color: '#494C54',
              paddingTop: 20,
              paddingRight: ['xs', 'sm'].includes(screenClass) ? 0 : 60,
              paddingLeft: ['xs', 'sm'].includes(screenClass) ? 0 : 60,
              textAlign: 'center',
              paddingBottom: 30
            }}
          >
            Descubre los proyectos justos para ti y encuentra excelentes recomendaciones según tus intereses.
          </Text>     
        </Col>
        <Col
          
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Visible
            xs
            sm
          >
            <CustomSelect
              optionsList={categories}
              defaultSelect={{
                name: categories[0].name,
                value: categories[0].id,
                icon: categories[0].icon
              }}
            />
          </Visible>
          <Visible
            md
            lg
            xl
          >
            <Row
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',                
                flexWrap: 'wrap'
              }}
            >
              {
                categories.map((ct, i) => (
                  <Col
                    key={i}
                    
                    md={1.3}
                    lg={1.3}
                    xl={1.3}
                    style={{
                      padding: 4
                    }}
                  >
                    <Card
                      onClick={() => changeCategory(ct.id)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: category === ct.id ? '#FF3300' : '#fff',
                        boxShadow: `${0} ${4}px ${4}px rgba(0, 0, 0, 0.25)`,
                        padding: 20
                      }}
                    >
                      <img
                        src={ct.icon}
                        alt={ct.name}
                        style={{
                          width: ct.id === 0 ? `${2}rem` : `${3}rem`,
                          height: `${3}rem`
                        }}
                      />
                      <Text
                        className="default-text"
                        style={{
                          textTransform: 'uppercase',
                          paddingTop: 10,
                          fontSize: ['xs', 'sm'].includes(screenClass) ? `${12}px` : ['md'].includes(screenClass) ?`${.45}rem` : `${.6}rem`,
                          fontWeight: 'bolder',
                          color: category === ct.id ? '#fff' : '#494C54',
                          paddingRight: ['xs', 'sm'].includes(screenClass) ? 0 : 60,
                          paddingLeft: ['xs', 'sm'].includes(screenClass) ? 0 : 60,
                          textAlign: 'center'
                        }}
                      >
                        {ct.name}
                      </Text>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Visible>
        </Col>
      </Row>
      <Row justify={'center'} >
        <Col
          
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            marginTop: 15,
            marginBottom: 15,
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`
          }}
        >
          <Text
            className="default-title"
            style={{
              fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.9}rem` : `${36}px`,
              fontWeight: 'bolder',
              display: 'flex',
              justifyContent: ['xs', 'sm'].includes(screenClass) ? 'center' : 'left'
            }}
          >
            Blog tufirma.org
          </Text>
        </Col>
        <Col
          
          xs={12}
          sm={12}
          md={11.6}
          lg={11.6}
          xl={11.6}
          style={{
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${2.5}rem`,
            marginBottom: ['xs', 'sm'].includes(screenClass) ? 0 : 20
          }}
        >
          <Row>
            {blog.map((bl, i) => {
              if (bl.type === 'img') {
                return (
                  <Visible
                  key={bl.id}
                    xs={bl.id !== 2 && bl.id !== 3}
                    sm={bl.id !== 2 && bl.id !== 3}
                    md={true}
                    lg={true}
                    xl={true}
                  >
                    <Col
                      
                      key={i}
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      style={{
                        padding: 0,
                      }}
                    >
                      <img
                        src={bl.image}
                        alt={bl.name}
                        style={{
                          width: `${100}%`,
                          height: `${17}rem`
                        }}
                      />
                    </Col>
                  </Visible>
                )
              } else {
                return (
                  <Visible
                    key={bl.id}
                    xs={bl.id !== 2 && bl.id !== 3}
                    sm={bl.id !== 2 && bl.id !== 3}
                    md={true}
                    lg={true}
                    xl={true}
                  >
                    <Col
                      
                      key={i}
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                      style={{
                        padding: 0
                      }}
                    >
                      <Card
                        style={{
                          backgroundColor: bl.color,
                          display: 'flex',
                          flexDirection: 'column',
                          height: `${17}rem`,
                          paddingLeft: 30,
                          paddingRight: 30
                        }}
                      >
                        <div
                          style={{
                            flex: 1.5,
                            display: 'flex',
                            paddingTop: 30,
                            marginBottom: 20
                          }}
                        >
                          <Text
                            className="default-title"
                            style={{
                              fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.4}rem` : `${bl.size}px`,
                              fontWeight: 'bolder',
                            }}
                          >
                            {bl.text}
                          </Text>
                        </div>
                        <div
                          style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <Button>
                            Ver más
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  </Visible>
                )
              }
            })}
          </Row>
        </Col>
      </Row>
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
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          
          style={{
            backgroundColor: '#A4DED2',
            height: ['xs', 'sm'].includes(screenClass) ? `${24}rem` : `${10}rem`,
            paddingTop: `${2}rem`
          }}
        >
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              
              style={{
                display: 'flex',
                textAlign: 'center',
                paddingTop: `${1}rem`,
                paddingBottom: `${1}rem`,
                paddingLeft: `${3}rem`,
                paddingRight: `${3}rem`
              }}
            >
              <Text
                className="default-title"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${2.6}rem` : `${1.6}rem`,
                  fontWeight: 'bolder',
                  color: '#043B5E'
                }}
              >
                ¿Necesitas <br/>una guía?
              </Text>
              <Visible
                md
                lg
                xl
              >
                <img
                  src={require('./assets/arrow.svg')}
                  alt="arrow"
                  style={{
                    width: `${1.5}rem`,
                    marginLeft: `${1}rem`
                  }}
                />
              </Visible>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              
              style={{
                display: 'flex',
                textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : '',
                paddingTop: `${1}rem`,
                paddingBottom: `${1}rem`,
                paddingLeft: `${3}rem`,
                paddingRight: `${3}rem`
              }}
            >
              <Text
                className="default-title"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${1}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: '#043B5E'
                }}
              >
                Si no estas seguro de comenzar, te damos todo el material para que puedas iniciar tu campaña con éxito.
              </Text>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Input
                placeholder="Ingresar Email"
                width={['xs', 'sm'].includes(screenClass) ? `${80}%` : `${90}%`}
                style={{
                  border: 'none',
                  borderRadius: 5,
                  width: ['xs', 'sm'].includes(screenClass) ? `${80}%` : `${80}%`,
                  height: 35,
                  paddingRight: ['xs', 'sm'].includes(screenClass) ? 35 : `${8}rem`,
                  paddingLeft: 20,
                }}
              />
              <Visible
                md
                lg
                xl
              >
                <Button
                  style={{
                    right: `${2.4}rem`,
                    position: 'absolute',
                    width: `${7}rem`
                  }}
                >
                  ENVIAR AHORA
                </Button>
              </Visible>
            </Col>
            <Visible
              xs
              sm
            >
              <Col
                xs={12}
                sm={12}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: `${1}rem`
                }}
              >
                <Button
                  style={{
                    width: `${19}rem`,
                    height: `${2}rem`
                  }}
                >
                  ENVIAR AHORA
                </Button>
              </Col>
            </Visible>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          lx={12}
          
          style={{
            height: ['xs', 'sm'].includes(screenClass) ? `${53}rem` : `${20}rem`,
            paddingTop: ['xs', 'sm'].includes(screenClass) ? `${1}rem` : `${2.5}rem`,
            paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px` : `${7}rem`
          }}
        >
          <Row>
            <Col
              
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
            >
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  
                  style={{
                    textAlign: ['xs', 'sm'].includes(screenClass) ? 'center' : ''
                  }}
                >
                  <img
                    src={require('./assets/logo2.svg')}
                    alt="logo2"
                    style={{
                      width: ['xs', 'sm'].includes(screenClass) ? `${15}rem` : `${13}rem`
                    }}
                  />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  
                  style={{
                    paddingTop: `${.5}rem`,
                    paddingBottom: `${1}rem`
                  }}
                >
                  <Text
                    className="default-text"
                    style={{
                      fontSize: ['xs', 'sm'].includes(screenClass) ? `${.7}rem` : `${.7}rem`,
                      fontWeight: 'bolder',
                      color: 'black'
                    }}
                  >
                    Religión en Libertad es propiedad de la Fundación Nueva Evangelización para el siglo XXI, una fundación formada exclusivamente por seglares católicos, que son padres de familia y tienen distintas sensibilidades espirituales.
                  </Text>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  
                >
                  <Button
                    style={{
                      marginBottom: `${1}rem`
                    }}
                  >
                    FIRMAR AHORA
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              
              xs={12}
              sm={12}
              md={1.5}
              lg={1.5}
              xl={1.5}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${.7}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: 'black',
                  textDecoration: 'underline'
                }}
              >
                Recursos
              </Text>
              <div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0
                  }}
                >
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Blog
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Ayuda y Soporte
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Prensa
                    </Text>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              
              xs={12}
              sm={12}
              md={1.5}
              lg={1.5}
              xl={1.5}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${.7}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: 'black',
                  textDecoration: 'underline'
                }}
              >
                Explorar
              </Text>
              <div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0
                  }}
                >
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Como trabajamos
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Log in
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Registrate
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.7}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Contáctanos
                    </Text>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              
              xs={12}
              sm={12}
              md={1.5}
              lg={1.5}
              xl={1.5}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${.7}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: 'black',
                  textDecoration: 'underline'
                }}
              >
                Categorías
              </Text>
              <div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0
                  }}
                >
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Construcción
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Parroquia
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Misiones
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Evangelización
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Comunidades
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Medios
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Educación
                    </Text>
                  </li>
                  <li
                    style={{
                      marginBottom: `${.4}rem`
                    }}
                  >
                    <Text
                      className="default-text"
                      style={{
                        fontSize: ['xs', 'sm'].includes(screenClass) ? `${.5}rem` : `${.6}rem`,
                        fontWeight: 'bolder',
                        color: 'black'
                      }}
                    >
                      Formación
                    </Text>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              
              xs={12}
              sm={12}
              md={2.5}
              lg={2.5}
              xl={2.5}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${.7}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: 'black',
                  textDecoration: 'underline'
                }}
              >
                Redes sociales
              </Text>
              <div
                style={{
                  marginTop: `${.5}rem`,
                  marginBottom: ['xs', 'sm'].includes(screenClass) ? `${1}rem` : `${8}rem`
                }}
              >
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  color={'#FF3300'}
                />
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  color={'#FF3300'}
                  style={{
                    paddingLeft: `${1.4}rem`
                  }}
                />
                <FontAwesomeIcon
                  icon={['fab', 'facebook-square']}
                  color={'#FF3300'}
                  style={{
                    paddingLeft: `${1.4}rem`
                  }}
                />
              </div>
              <div>
                <img
                  src={require('./assets/logo.svg')}
                  alt="logo"
                  style={{
                    width: `${6}rem`
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          
          style={{
            backgroundColor: '#1CB19E',
            height: ['xs', 'sm'].includes(screenClass) ? `${8}rem` : `${3}rem`,
            paddingTop: `${1}rem`
          }}
        >
          <Row>
            <Col
              xs={12}
              sm={12}
              md={9}
              lg={9}
              xl={9}
              
              style={{
                paddingLeft: ['xs', 'sm'].includes(screenClass) ? `${15}px`: `${6}rem`
              }}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${1.1}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: '#fff'
                }}
              >
                © Religión en Libertad 2020 Todos los derechos reservados
              </Text>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              
              style={{
                paddingTop: ['xs', 'sm'].includes(screenClass) ? `${1.5}rem`: 0
              }}
            >
              <Text
                className="default-text"
                style={{
                  fontSize: ['xs', 'sm'].includes(screenClass) ? `${1}rem` : `${.8}rem`,
                  fontWeight: 'bolder',
                  color: '#fff'
                }}
              >
                Términos y condiciones
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default TuFirma