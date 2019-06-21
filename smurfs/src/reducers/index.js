import { 
  FETCH,
  GET_SMURFS,
  ERROR,
  ADD_SMURF } from '../actions'

 const defaultState ={
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 export const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH: 
    return { ...state, fetchingSmurfs: true }
    case GET_SMURFS:
    return { ...state, fetchingSmurfs: false, smurfs: action.payload }
    case ERROR:
    return { ...state, fetchingSmurfs: false, error: action.payload }
    case ADD_SMURF:
    return { ...state, smurfs: action.payload, addingSmurf: true }
    default:
    return state
  }
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
