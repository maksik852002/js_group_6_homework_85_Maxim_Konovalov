import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtists } from "../../store/actions/artistsActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import Artist from "../../components/Artist/Artist";

class Artists extends Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  artistDetailOpenHandler = id => {
    this.props.history.push(`/artists/${id}/info`);
  };

  render() {
    const {loading, artists} = this.props;
    return (
      <>
        <h2 className='pt-4'>Исполнители</h2>
        <div className="d-flex flex-wrap">
          {loading ? (
            <Spinner />
          ) : (
            artists && artists
              .map(el => (
                <Artist
                  key={el._id}
                  name={el.name}
                  image={el.image}
                  click={() => this.artistDetailOpenHandler(el._id)}
                />
              ))
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists.artists,
    loading: state.artists.loading,
    show: state.artists.show,
    error: state.artists.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
