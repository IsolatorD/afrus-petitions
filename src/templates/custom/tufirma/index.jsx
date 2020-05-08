import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Visible,
  useScreenClass
} from 'react-grid-system'

import Card from '../../../components/Card'
import Button from '../../../components/Button'
import Text from '../../../components/Text'
import Input from '../../../components/Input'

import CustomSelect from '../../../components/CustomSelect'

import './index.css'

import Header from './Header'
import Campaign from './Campaign'
import Guia from './Guia'
import Footer from './Footer'

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
      <Header />
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
      <Campaign />
      <Guia />
      <Footer />
    </Container>
  )
}

export default TuFirma