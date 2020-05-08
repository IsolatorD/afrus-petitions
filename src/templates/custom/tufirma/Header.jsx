import React from 'react'
import {Row, Col, useScreenClass, Visible} from 'react-grid-system'
import Dropdown from '../../../components/Dropdown'
import Logo from './assets/logo.svg'

import Button from '../../../components/Button'
import Text from '../../../components/Text'

const Header = () => {
  const screenClass = useScreenClass()
  return (
    <Row>
      <Col
        
        xs={5}
        sm={5}
        md={6.5}
        lg={6.5}
        xl={6.5}
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
        md={5.5}
        lg={5.5}
        xl={5.5}
      >
        <Row>
          <Visible md lg xl>
            <Col
                    
              xs={12}
              sm={12}
              md={6}
              lg={7}
              xl={7}
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
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat-ExtraBold'
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
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat-ExtraBold'
                  }}
                >
                  Iniciar Sesión
                </Text>
              </ul>
            </Col>
          </Visible>
          <Col
            xs={11}
            sm={11}
            md={6}
            lg={5}
            xl={5}
            style={{
              marginTop: 20,
              padding: 0,
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
                  marginLeft: `${1}rem`
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
  )
}

export default Header