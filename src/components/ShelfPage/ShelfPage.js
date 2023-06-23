import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem'


function ShelfPage() {
  
  const dispatch = useDispatch()
  //useeffect will ensure we have items to render on page load in the store
  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM'})
  }, [])
  const itemList = useSelector(store => store.itemReducer)
  //we are going through item rows in the data base 
  return (
    <div className="container">

      <h2>Shelf</h2>

      <p>All of the available items can be seen here.</p>
      <ul>
        {itemList.map((item) => (
           
            <ShelfItem key={item.id} item = {item}/>
          
        ))}
      </ul>
    </div>
  );
}

export default ShelfPage;
