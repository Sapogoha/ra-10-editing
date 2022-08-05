import types from './actionTypes';

export function addService({ service, price }) {
  return { type: types.add, payload: { service, price } };
}

export function removeService(id) {
  return { type: types.remove, payload: { id } };
}

export function editService(id, service, price) {
  return { type: types.edit, payload: { id, service, price } };
}

// export function changeServiceField(service, value) {
//   return { type: types.change, payload: { service, value } };
// }

export function prepareToEdit(id, service, price) {
  return { type: types.prepare, payload: { id, service, price, edit: 'yep' } };
}
