
//this reducer will store the items we get from data base
// by fetchItems function
const itemReducer = ( state = [], action) => {
   switch(action.type) {
    case 'SET_ITEM':
        return action.payload;
        default:
            return state ;
   } 
}
export default itemReducer