import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/baselayout';
import Typed from 'react-typed';

const Index = () => {
  const roles = ["Robust", "Modern", "Simple", "Fast"]
  return (
    <div className="cover">
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Learning Management System </h2>
                      <div className="hero-section-content-intro">
                        It provides tools for teaching staff to develop and administer course websites.                    </div>
                    </div>
                    <img className="image" src="/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome ...
              </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={30}
                strings={roles}
                smartBackspace
                shuffle={false}
                backDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
                className="self-typed"
              />
              <div className="hero-welcome-bio">
                <h1>
                  Let's start.
              </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  )
}
export default Index;