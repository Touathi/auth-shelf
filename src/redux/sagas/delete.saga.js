import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this function will enable us to delete items from our data base
// we did action.payload in the route since payload is carrying data for id 
//we did fetch_item so we can render what we need to delete

//
function* deleteItem(action) {
   
    try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put ({type: 'FETCH_ITEM'});
        console.log('action.payload is', action.payload)
    }
    catch (error) {
        console.log('error DELETING items in saga', error)
    }
} 
function* deleteSaga () {
    yield takeLatest( 'DELETE_ITEM', deleteItem)

}
export default deleteSaga;

