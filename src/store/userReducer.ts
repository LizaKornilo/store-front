import { BasketItemDto } from '../common/models/basketItem.dto';
import { Roles } from '../utils/consts';

interface ReducerState {
  role: string,
  email: string,
  basket: BasketItemDto[]
}

const defaultState: ReducerState = {
  role: Roles.ADMIN,
  email: 'admin.email@gmail.com',
  basket: [{
    product: {
      id: 2,
      image: 'some image path',
      name: 'Название 2',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
    count: 1,
  },
  {
    product: {
      id: 3,
      image: 'some image path',
      name: 'Название 3',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
    count: 2,
  },
  ],
};

function userReducer(state = defaultState, action: any): ReducerState {
  switch (action.type) {
    case 'SET_GUEST_ROLE':
      return { ...state, role: Roles.GUEST };
    case 'INCREASE_PRODUCT_IN_BASKET': {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.basket.find((item: BasketItemDto) => item.product.id === action.payload).count += 1;
      return stateCopy;
    }
    case 'DECREASE_PRODUCT_IN_BASKET': {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.basket.find((item: BasketItemDto) => item.product.id === action.payload).count -= 1;
      return stateCopy;
    }
    case 'REMOVE_PRODUCT_FROM_BASKET': {
      return { ...state, basket: state.basket.filter((item) => item.product.id !== action.payload) };
    }
    // case 'SET_USER_ROLE':
    //   return { ...state, role: USER };
    // case 'SET_ADMIN_ROLE':
    //   return { ...state, role: ADMIN };
    default:
      return state;
  }
}

export default userReducer;
