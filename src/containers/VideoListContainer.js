import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapDispatchToProps = (dispatch) => ({
  // set handleSearch method
  handleVideoListEntryTitleClick: (videos) => dispatch(changeVideo(videos))
});

const mapStateToProps = (state) => {
  return {
    videos: state.videoList,
    curentVideo: state.currentVideo
  };
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
