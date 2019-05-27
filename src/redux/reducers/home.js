const INITIAL_STATE = {
  appName: 'PWA Boilerplate',
  reduxStoreCounter: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_REDUX_STORE_COUNTER':
      return {
        ...state,
        reduxStoreCounter: action.reduxStoreCounter,
      };

    default:
      return state;
  }
};
