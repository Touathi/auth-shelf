import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postItem (action) {
    try {
        console.log(action.payload);
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'FETCH_ITEMS'})
        console.log(action.payload);


    } catch (error) {
        console.log('error POSTing', error);
    }
 }

function* postSaga() {
    yield takeLatest ( 'POST_ITEM', postItem)
}

 export default postSaga;