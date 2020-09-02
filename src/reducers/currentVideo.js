import Redux from 'redux';

const initialState = null;

var currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // check actions type prop
  switch (action.type) {
  // if action.type is CHANGE_VIDEO
  case 'CHANGE_VIDEO':
    // change current video to action.video

    return action.video;
    // else
  default:
    // return state
    return state;
  }
};

export default currentVideoReducer;
