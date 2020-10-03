import * as React from 'react';
import './WorkDeck.css';
import './structural-styles.css';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './custom-aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function WorkDeck() {

  const getRandomColorClassName = React.useCallback(() => {
    const classNames = ['blue', 'green', 'orange'];
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber <= 0.45) {
      return classNames[0]
    } 

    if(randomNumber >= 0.45 && randomNumber <= 0.9) {
      return classNames[1]
    }
    
    if(randomNumber >= 0.9 && randomNumber <= 1) {
      return classNames[2]
    }
  },
  [])

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    })
  },[])

  return (
      <Row className="workdeck-container">
        <CardColumns>
          <Card className="work-card" data-aos='fade-up-highest'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 1</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up-highest'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 2</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action. This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up-highest'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 3</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action. This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up-medium'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 4</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up-medium'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 5</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action. This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up-medium'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 6</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 7</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
          <Card className="work-card" data-aos='fade-up'>
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title 8</h3></Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Read 1 minute</small>
                </Card.Text>
              </Card.Body>
            </a>
          </Card>
        </CardColumns>
      </Row>
    );
  }
  
  export default WorkDeck;
