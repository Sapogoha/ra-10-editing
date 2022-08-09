import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeService,
  editServiceStart,
  editServiceFinish,
} from '../../redux/actionsWithServices';

function FilteredList() {
  const services = useSelector((state) => state.listService);
  const filter = useSelector((state) => state.filter);

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

  const ccc = services.filter((item) =>
    item.service.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(ccc.length);

  return (
    <ul className="services mb-5 px-5">
      <h5>Filtered List:</h5>

      {ccc.length > 0
        ? ccc.map((item) => (
            <li key={item.id} className="service-item mb-3">
              {`${item.service} ${item.price}`}

              <button
                type="button"
                className="btn btn-outline-warning mx-3"
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
          ))
        : `Your search - ${filter} - did not match any services`}
    </ul>
  );
}

export default FilteredList;
