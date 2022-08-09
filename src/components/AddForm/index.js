import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addService, editServiceFinish } from '../../redux/actionsWithServices';

function AddForm() {
  const services = useSelector((state) => state.listService);
  const edit = services.find((service) => service.edit);

  const EMPTY_STATE = { service: '', price: '' };
  const [form, setForm] = useState(EMPTY_STATE);

  useEffect(() => {
    if (edit) {
      setForm({
        service: edit?.service,
        price: edit?.price,
      });
    } else {
      setForm(EMPTY_STATE);
    }
  }, [edit?.service, edit?.price]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setForm(EMPTY_STATE);
    if (edit) {
      dispatch(editServiceFinish(edit.id, form.service, form.price));
    } else {
      dispatch(addService(form));
    }
  };
  const handleReset = () => {
    setForm(EMPTY_STATE);
    if (edit) {
      dispatch(editServiceFinish(edit.id, edit.service, edit.price));
    }
  };

  return (
    <form className="my-3 service-form" onSubmit={handleSubmit}>
      <div className="container text-center ">
        <div className=" row">
          <div className="service col">
            <input
              type="text"
              className="form-control"
              id="service"
              name="service"
              aria-describedby="service"
              placeholder="service"
              value={form.service}
              onChange={handleChange}
              required
            />
          </div>
          <div className="price col">
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              aria-describedby="price"
              placeholder="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-success col btn-save" type="submit">
            Save
          </button>

          <button
            className="btn btn-danger col"
            type="button"
            onClick={() => handleReset()}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddForm;
