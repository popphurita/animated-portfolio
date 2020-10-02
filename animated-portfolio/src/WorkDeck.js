import * as React from 'react';
import './WorkDeck.css';
import './structural-styles.css';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

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

  return (
      <Row className="workdeck-container">
        <CardColumns>
          <Card className="work-card">
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title</h3></Card.Title>
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
          <Card className="work-card">
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title</h3></Card.Title>
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
          <Card className="work-card">
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title</h3></Card.Title>
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
          <Card className="work-card">
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title</h3></Card.Title>
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
          <Card className="work-card">
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title</h3></Card.Title>
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
          <Card className="work-card">
            <a href="/">
              <Card.Body className={getRandomColorClassName()}>
                <Card.Title><h3>Card title</h3></Card.Title>
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
        </CardColumns>
      </Row>
    );
  }
  
  export default WorkDeck;
