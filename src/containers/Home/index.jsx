import React from 'react';
import { connect } from 'react-redux';
import { changeReduxStoreCounter } from '@/redux/actions';
import { Button } from '@/components';

const Home = ({ reduxStoreCounter, changeReduxStoreCounter }) => (
  <Button onClick={() => changeReduxStoreCounter(reduxStoreCounter + 1)}>
    Change redux store ({reduxStoreCounter})
  </Button>
);

const mapStateToProps = ({ home: { reduxStoreCounter } }) => ({ reduxStoreCounter });

const mapDispatchToProps = {
  changeReduxStoreCounter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
