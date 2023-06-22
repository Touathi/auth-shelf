import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//this saga function is sending a request to
//the server to get items from the 
//database
function* fetchItem() {
   
    try {
        const itemResponse = axios.get('/api/shelf')
        yield put ({type: 'SET_ITEM', payload: itemResponse.data});
        console.log('item response data is', itemResponse.data)
    }
    catch (error) {
        console.log('error getting items in saga', error)
    }
} 
function* itemSaga () {
    yield takeLatest( 'FETCH_ITEM', fetchItem)

}
export default itemSaga;
