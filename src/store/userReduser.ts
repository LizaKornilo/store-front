import { ADMIN, GUEST, USER } from '../utils/consts';

interface reducerState {
  role: string,
}

const defaultState: reducerState = {
  role: GUEST,
};

function userReduser(state = defaultState, action: any): reducerState {
  switch (action.type) {
    case 'SET_GUEST_ROLE':
      return { role: GUEST };
    case 'SET_USER_ROLE':
      return { role: USER };
    case 'SET_ADMIN_ROLE':
      return { role: ADMIN };
    default:
      return state;
  }
}

export default userReduser;
