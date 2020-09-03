import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

// const mapDispatchToProps = (dispatch) => ({
//   // set handleSearch method
//   videoConnector: (video) => dispatch(changeVideo(video))
// });

const mapStateToProps = (state) => {
  return {
    // videos: state.videoList,
    video: state.currentVideo
  };
};

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

export default VideoPlayerContainer;
