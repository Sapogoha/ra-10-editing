import types from './actionTypes';

export function addService({ service, price }) {
  return { type: types.add, payload: { service, price } };
}

export function removeService(id) {
  return { type: types.remove, payload: { id } };
}

export function editServiceStart(id, edit) {
  return { type: types.editStart, payload: { id, edit } };
}

export function editServiceFinish(id, service, price) {
  return { type: types.editFinish, payload: { id, service, price } };
}
