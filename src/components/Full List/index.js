import React from 'react';
import { useSelector } from 'react-redux';

function FullList() {
  const services = useSelector((state) => state.listService);

  return (
    <ul className="services mb-5 px-5">
      <h5>Full List:</h5>

      {services.map((item) => (
        <li key={item.id} className="service-item mb-3">
          {`${item.service} ${item.price}`}
        </li>
      ))}
    </ul>
  );
}

export default FullList;
