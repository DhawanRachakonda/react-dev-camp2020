import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import './Login.css';

function Login() {
  return (
    <Row className="justify-content-md-center">
      <Col lg={6} md={6}>
        <Card className="login-form">
          <Card.Header>
            <FormattedMessage id="app.login" />
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={6} lg={8}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <FormattedMessage id="app.input.emailAddress" />
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6} lg={8}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                      <FormattedMessage id="app.input.password" />
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col lg={2} sm={2} xs={2}>
                <Button variant="primary" type="submit">
                  <FormattedMessage id="app.login" />
                </Button>
              </Col>
              <Col lg={2} sm={2} xs={2}>
                <Button variant="secondary">
                  <FormattedMessage id="app.cancelLogin" />
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Login Page</title>
    </Helmet>
    <Login />
  </React.Fragment>
);
