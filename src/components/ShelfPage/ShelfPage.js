import React from 'react'



import ItemForm from '../ItemForm/ItemForm';

function ShelfPage() {
  return (
    <div className="container">
      <ItemForm />
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
