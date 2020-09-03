import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

// component VideoPlayer only expects {video} so pass into map fcn below, don't need a dispatch
const mapStateToProps = (state) => {
  return {
    // videos: state.videoList,
    video: state.currentVideo
  };
};

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

export default VideoPlayerContainer;
