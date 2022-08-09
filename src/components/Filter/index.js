import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterServices } from '../../redux/actionsWithServices';

function Filter() {
  const filter = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(filterServices(value));
  };

  return (
    <div className="filter mb-5 px-5">
      <h5>Filter:</h5>
      <input
        className="form-control"
        name="filter"
        onChange={handleChange}
        value={filter}
        placeholder={'what are you looking for?'}
      />
    </div>
  );
}

export default Filter;
