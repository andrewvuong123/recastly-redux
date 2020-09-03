import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
const mapDispatchToProps = (dispatch) => ({
  // set handleSearch method
  handleSearchInputChange: (videos) => dispatch(handleSearchChange(videos))
});

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    currentVideo: state.currentVideo
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
