import types from './actionTypes';

const INITIAL_STATE = [
  { id: 1, service: 'Some service', price: 1000 },
  { id: 2, service: 'Some other service', price: 2000 },
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

    case types.edit: {
      const { id, service, price } = action.payload;
      return state.map((item) =>
        item.id === id ? { ...item, service, price: price } : item
      );
    }

    case types.prepare: {
      const { id, service, price, edit } = action.payload;
      // console.log(id);
      // console.log(service);
      // console.log(price);
      // console.log(edit);
      return state.map((item) =>
        item.id === id ? { ...item, service, price: Number(price), edit } : item
      );
      // return [...state, { id, service, price: Number(price), edit }];
    }

    default:
      return state;
  }
};

export default listServiceReducer;
