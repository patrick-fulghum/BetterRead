import React from 'react';
import { Link } from 'react-router-dom';

const ShelfItem = (item) => {
  return (
    <div>
      <Link to={`/books/${item.item.id}`}>
        <img className="discovery-image" src={item.item.cover}/>
      </Link>
    </div>
  );
};

export default ShelfItem;
