import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeService,
  editServiceStart,
  editServiceFinish,
} from '../../redux/actionsWithServices';

function ListOfServices() {
  const services = useSelector((state) => state.listServiceReducer);
  const edit = services.find((service) => service.edit);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (edit) {
      dispatch(editServiceFinish(edit.id, edit.service, edit.price));
    }
    dispatch(removeService(id));
  };

  const handleEdit = (id) => {
    if (edit) {
      dispatch(editServiceFinish(edit.id, edit.service, edit.price));
    }
    const service = services.find((item) => item.id === id);
    dispatch(editServiceStart(service.id, true));
  };

  return (
    <ul className="services">
      {services.map((item) => (
        <li key={item.id} className="service-item mb-2">
          {`${item.service} ${item.price}`}

          <button
            type="button"
            className="btn btn-outline-warning mx-2"
            onClick={() => handleEdit(item.id)}
          >
            ✎
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => handleRemove(item.id)}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListOfServices;
