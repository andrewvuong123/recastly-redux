import Redux from 'redux';

const sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  // check actions type prop
  switch (action.type) {
  // if action.type is CHANGE_VIDEO_LIST
  case 'CHANGE_VIDEO_LIST':
    // change current video to action.videos
    return action.videos;
    // else
  default:
    // return state
    return state;
  }
};

export default videoListReducer;
