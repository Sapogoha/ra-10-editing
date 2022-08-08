import types from './actionTypes';

const INITIAL_STATE = [
  { id: 1, service: 'Some service', price: 1000, edit: false },
  { id: 2, service: 'Some other service', price: 2000, edit: false },
];

let serviceId = 2;

const listServiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.add: {
      const { service, price } = action.payload;
      serviceId += 1;
      return [...state, { id: serviceId, service, price: Number(price) }];
    }
    case types.showAll: {
      return [...state];
    }

    case types.remove: {
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    }

    case types.editStart: {
      const { id, edit } = action.payload;
      return state.map((item) => (item.id === id ? { ...item, edit } : item));
    }

    case types.editFinish: {
      const { id, service, price } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, service, price, edit: false } : item
      );
    }

    default:
      return state;
  }
};

export default listServiceReducer;
