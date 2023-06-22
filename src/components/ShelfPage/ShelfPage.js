import React from 'react';
import { useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem'


//mapping through items in the shelf page
function ShelfPage() {
  const itemList = useSelector(store => store.itemReducer)
  return (
    <div className="container">

      <h2>Shelf</h2>

      <p>All of the available items can be seen here.</p>
      <ul>
        {itemList.map(item => (
          <li key={item.id}>
            <ShelfItem item = {item}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
