import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeService, prepareToEdit } from '../../redux/actionsWithServices';

function ListOfServices() {
  const services = useSelector((state) => state.listServiceReducer);
  console.log(services);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (id) => {
    const service = services.find((item) => item.id === id);
    if (service.edit) {
      console.log(service.edit);
    }

    dispatch(prepareToEdit(service.id, service.service, Number(service.price)));
    console.log(services);
  };

  return (
    <ul className="services">
      {services.map((item) => (
        // item.edit? alert(item.id)

        <li key={item.id} className="service-item">
          {`${item.service} ${item.price}`}
          {item.edit && <button>AAA</button>}

          <button type="button" onClick={() => handleEdit(item.id)}>
            ✎
          </button>
          <button type="button" onClick={() => handleRemove(item.id)}>
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListOfServices;
