import React from 'react';
import { connect } from 'react-redux';
import { Main, Header, Container } from '@/components';

const App = ({ appName, children }) => (
  <Main>
    <Header>{appName}</Header>
    <Container>{children}</Container>
  </Main>
);

const mapStateToProps = ({ home: { appName } }) => ({ appName });

export default connect(mapStateToProps)(App);
