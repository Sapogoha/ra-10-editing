// import PropTypes from 'prop-types'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addService } from '../../redux/actionsWithServices';

function AddForm() {
  const services = useSelector((state) => state.listServiceReducer);
  console.log(services);

  const EMPTY_STATE = { service: '', price: '' };
  const [form, setForm] = useState(EMPTY_STATE);

  const aaa = services?.find((item) => item.edit);
  if (aaa) {
    setForm({ service: aaa.service, price: aaa.price });
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setForm(EMPTY_STATE);
    dispatch(addService(form));
  };
  const handleReset = () => {
    setForm(EMPTY_STATE);
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
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

          <button className="btn btn-primary col" type="submit">
            Save
          </button>
          <button
            className="btn btn-primary col"
            type="reset"
            onClick={() => handleReset()}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

// AddForm.propTypes = {}

export default AddForm;
