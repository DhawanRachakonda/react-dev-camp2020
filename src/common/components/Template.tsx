import React, { ReactNode } from 'react';

import './template.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import paths from '../../routes/paths';

interface IAppTemplateProps {
  children: ReactNode;
}

export default function AppTemplate({ children }: IAppTemplateProps) {
  return (
    <React.Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}

function Header() {
  return (
    <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href={paths.login.link}>
        <FormattedMessage id="app.appName" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-right">
          <Nav.Link href={paths.login.link}>
            <FormattedMessage id="app.login" />
          </Nav.Link>
          <Nav.Link eventKey={2} href={paths.registration.link}>
            <FormattedMessage id="app.register" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Footer() {
  return <FormattedHTMLMessage id="app.rightsReceived" />;
}
