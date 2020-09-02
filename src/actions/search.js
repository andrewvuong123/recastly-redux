import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // TODO:  Write an asynchronous action to handle a video search!
  // return function with dispatch passed in
  return (dispatch) => {
    var options = {
      query: q,
      key: YOUTUBE_API_KEY,
      maxResults: 5
    };

    // return searchYoutube with options and CB passed in
    return searchYouTube(options, (data) => {
      // CB will dispatch currentVideo adn changeVideoList actions
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };

};

export default handleVideoSearch;
