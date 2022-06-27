// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// const getUserName = async ()=>{
//     const res = await fetch("https://jsonplaceholder.typecode.com/users")
//     const result = await res.json()
//     return result[0].name
// }
// function* fetchUser(action) {
//    try {
//     const userName = yield getUserName()
//     yield put({type:'USER_FETCH_REQUESTED',playload:userName})
//     //   const user = yield call(Api.fetchUser, action.payload.userId);
//     //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
// }


// function* userSaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }


// function* userSaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

// export default userSaga;