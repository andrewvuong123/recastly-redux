import Redux from 'redux';

const initialState = null;

//TODO: define a reducer for the currentVideo field of our state.
var currentVideoReducer = (state = initialState, action) => {
  // check actions type prop
  switch (action.type) {
  // if action.type is CHANGE_VIDEO
  case 'CHANGE_VIDEO':
    // change current video to action.video or null if undefined (safeguard)
    return action.video || null;
    // else
  default:
    // return state
    return state;
  }
};

export default currentVideoReducer;
