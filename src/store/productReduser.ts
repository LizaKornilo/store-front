import { Product } from '../common/models/product.dto';

interface ReducerState {
  products: Product[],
}

const defaultState: ReducerState = {
  products: [
    {
      id: 1,
      image: 'some image path',
      name: 'Закладки "Спящая красавица"',
      shortDescription: '5 закладок',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever since
the 1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but also
the leap into electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets containing Lorem
Ipsum passages, and more recently with desktop publishing software like Aldus
PageMaker including versions of Lorem Ipsum.`,
      price: 250,
    },
    {
      id: 2,
      image: 'some image path',
      name: 'Название',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
    {
      id: 3,
      image: 'some image path',
      name: 'Название',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
    {
      id: 4,
      image: 'some image path',
      name: 'Название',
      shortDescription: 'Краткое описание',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
      price: 100,
    },
  ],
};

const generateNextId = (prevId: number) => prevId + 1;

function productReducer(state = defaultState, action: any): ReducerState {
  switch (action.type) {
    case 'DELETE_PRODUCT_BY_ID':
      return { products: state.products.filter((product) => product.id !== action.payload) };
    case 'UPDATE_PRODUCT': {
      const newProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
      return { products: newProducts };
    }
    case 'ADD_PRODUCT': {
      const newProduct: Product = {
        ...action.payload,
        id: generateNextId(state.products[state.products.length - 1].id), // заглушка
      };
      state.products.push(newProduct);
      return state;
    }
    default:
      return state;
  }
}

export default productReducer;
