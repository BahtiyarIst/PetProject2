import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isSigned: true,
      };

    default:
      return state;
  }
};
