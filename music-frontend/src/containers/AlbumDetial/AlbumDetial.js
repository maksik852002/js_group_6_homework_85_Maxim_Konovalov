import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbum, fetchAlbumTracks } from "../../store/actions/albumsActions";
import { apiURL, noImage } from "../../constants";
import Track from "../../components/Track/Track";
import Spinner from "../../components/UI/Spinner/Spinner";
import './AlbumDetial.css';

class ArtistDetial extends Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
    this.props.fetchAlbumTracks(this.props.match.params.id);
  }

  render() {
    const { album, tracks, loading } = this.props;
    const path = apiURL + "/uploads/" + album.image;
    return (
      <div className="d-flex flex-wrap mt-3">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="container">
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between'>
                  <div className="col-6 col-md-4">
                    <div className="d-flex rounded-circle m-auto" style={{width: '200px', height: "200px", background: "#e5e5e5"}}>
                      <img
                        src={album.image ? path : noImage}
                        alt={"text"}
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-8">
                    <small className="text-muted d-block mt-1">АЛЬБОМ</small>
                    <h1 style={{letterSpacing: "2px", fontWeight: "900"}}>{album.name}</h1>
                  </div>
                </div>
                <div className="mt-4">
                  <hr className='mt-0'/>
                  <div className="d-flex flex-wrap">
                    <div className="w-100">
                      <div className="row p-2" style={{color: '#777', fontSize: '13px'}}>
                        <div className='col-1 d-flex justify-content-center justify-content-sm-start'>#</div>
                        <div className='col-6 col-lg-7'>Название трека</div>
                        <div className='col-3'>Исполнитель</div>
                      </div>
                        {album&&tracks.map(el => (
                          <Track
                            key={el._id}
                            id={this.props.match.params.id}
                            sn={el.sn}
                            name={el.name}
                            artist={album.artist}
                            duration={el.duration}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.albums.album,
    tracks: state.albums.tracks,
    loading: state.albums.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchAlbumTracks: id => dispatch(fetchAlbumTracks(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetial);
