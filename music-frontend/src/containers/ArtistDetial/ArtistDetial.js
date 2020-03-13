import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchArtist, fetchArtistAlbums, fetchArtistTracks } from "../../store/actions/artistsActions";
import { apiURL, noImage } from "../../constants";
import ArtistInfo from "../../components/ArtistInfo/ArtistInfo";
import Album from "../../components/Album/Album";
import Track from "../../components/Track/Track";
import Spinner from "../../components/UI/Spinner/Spinner";
import './ArtistDetial.css';

class ArtistDetial extends Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.id);
    this.props.fetchArtistAlbums(this.props.match.params.id);
    this.props.fetchArtistTracks(this.props.match.params.id);
  }

  albumDetailOpenHandler = id => {
    this.props.history.push(`/albums/${id}`);
  };

  render() {
    const { artist, albums, tracks, loading } = this.props;
    const path = apiURL + "/uploads/" + artist.image;
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
                        src={artist.image ? path : noImage}
                        alt={"text"}
                        className="rounded-circle w-100"
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-8">
                    <small className="text-muted d-block mt-1">ИСПОЛНИТЕЛЬ</small>
                    <h1 style={{letterSpacing: "2px", fontWeight: "900"}}>{artist.name}</h1>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <ul style={{listStyle: "none"}} className='List d-flex m-0'>
                      <li className="nav-item"> 
                        <NavLink className="Nav-link" to={`/artists/${artist._id}/info`}>Информация</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="Nav-link" to={`/artists/${artist._id}/albums`}>Альбомы</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="Nav-link" to={`/artists/${artist._id}/tracks`}>Треки</NavLink>
                      </li>
                    </ul>
                  </div>
                  <hr className='mt-0'/>
                  <div className="d-flex flex-wrap">
                    <Route
                      path={this.props.match.path + "/info"}
                      render={() => (
                          <ArtistInfo
                            info={artist.info}
                          />
                      )}
                    />
                    <Route
                      path={this.props.match.path + "/albums"}
                      render={() => albums.map(el => (
                        <Album
                          key={el._id}
                          name={el.name}
                          image={el.image}
                          year={el.year}
                          artistName={el.artist.name}
                          click={() => this.albumDetailOpenHandler(el._id)}
                        />
                      ))}
                    />
                    <Route
                      path={this.props.match.path + "/tracks"}
                      render={() => (
                        <div className="w-100">
                          <div className="row p-2" style={{color: '#777', fontSize: '13px'}}>
                            <div className='col-1 d-flex justify-content-center justify-content-sm-start'>#</div>
                            <div className='col-6 col-lg-7'>Название трека</div>
                            <div className='col-3'>Альбом</div>
                          </div>
                            {tracks.map((el, i) => (
                              <Track
                                key={el._id}
                                sn={i+1}
                                name={el.name}
                                album={el.album}
                                duration={el.duration}
                              />
                            ))}
                        </div>
                      )}
                    />
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
    artist: state.artists.artist,
    albums: state.artists.albums,
    tracks: state.artists.tracks,
    loading: state.artists.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchArtistAlbums: id => dispatch(fetchArtistAlbums(id)),
    fetchArtistTracks: id => dispatch(fetchArtistTracks(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetial);
