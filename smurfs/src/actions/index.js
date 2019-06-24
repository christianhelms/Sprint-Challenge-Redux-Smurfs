import axios from "axios";


export const FETCH = 'FETCH'
export const GET_SMURFS = 'GET_SMURFS'
export const ERROR = 'ERROR'
export const ADD_SMURF = 'ADD_SMURF'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH })
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch({ type: GET_SMURFS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorResponse})
  })
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: FETCH })
  axios
  .post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
    dispatch({ type: ADD_SMURF, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorResponse})
  })
}
