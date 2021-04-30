import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NutriRiceContent.scss';

export const NutriRiceContent: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h2>Background</h2>
            <p>There has been a long going issue with the rice farming system in Thailand. A lot of the hard work goes to the farmers who have to pamper the crops and get paid a very small amount of money. The middlemen such as the milling factories and the supermarkets normally take the profit. </p>
            <p>The majority of Thai local farmers do not have a sustainable business plan to run their farm and had to take a loan from a bank and other illegal loans. </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h2>The challenges</h2>
            <p>It is impossible to find any information anywhere online. To understand where the issues are is by field research where we talk to the farmers directly. We recruited farmer families who are willing to talk to us.</p>
            <p>After talking through the issues with three farmer families, we found out that one of the main reasons they take loans is because they have to use pesticides to keep the crops alive. That is due to the choice of the rice they chose to grow. It's the only type of rice that can be grown more than once a year but it is a very poor quality of rice, not needed in the market and can be sold very cheaply. As a result, there isn't any profit in growing them.</p>
            <p>The crops are sold to the milling factory when they are ready at a surprisingly low rate. The milling factory then sold the rice to the supermarket and the price of the rice get four to five times more than what they are. That is where the middle man gets the most profit.</p>
            <p>While researching the farmers, we also did a market with the customers who consume rice and found out that the customers are willing to pay more for organic rice but it's hard to find in a supermarket. They also claimed that it's too much of a hassle if they need to try to buy it somewhere else rather than just a trip to the supermarket. </p>

          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <h2>The solution</h2>
            <p>As a result, we came up with a business model where we set up small organic rice milling and packaging hub in various areas so farmers can sell their rice there. The farmers only need to pay to cover the cost of the machinery and transportation and the rest of the profit goes directly to them. The organic hub then will transport the rice directly to the customer who orders through the e-commerce web app.</p>


          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
            <p>As a result, we have delivered an e-commerce application, NutriRice, that allows customers to order all various types of rice from one place, allow customers to mix the rice, and create a set of mixed rice with specific nutrients for different needs. Customers also get to explore and share their recipe within the NutriRice community.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="horizontal-container">
          <div className="content-container-body">
          <div className="btn center-cta">
            <Button href="https://projects.invisionapp.com/share/E3BLXT9MS?fbclid=IwAR3kdg5kE_tfXUddzRaaQA-Q6pgol7SA8nSQidPW0x3d8MWM6uzdR1z0JqA#/screens/230378357_1_STORY" className="btn-secondary">
            View prototype on Invision
            </Button>
            </div>
          </div>
          <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXciheQ1k&#x2F;view?embed">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXciheQ1k&#x2F;view?utm_content=DAEXciheQ1k&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
            <div className="responsive-div">
              <iframe className="responsive-iframe"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXcnQcNXw&#x2F;view?embed">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXcnQcNXw&#x2F;view?utm_content=DAEXcnQcNXw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
        </Col>
      </Row>
    </>
  );
};
