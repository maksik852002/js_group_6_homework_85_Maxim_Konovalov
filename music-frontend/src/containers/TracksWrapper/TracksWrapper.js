// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchArtistTracks } from "../../store/actions/artistsActions";
// import { addTrackToHistory } from "../../store/actions/trackHistoryActions";
// import Track from "../../components/Track/Track";
// // import Spinner from "../../components/UI/Spinner/Spinner";


// class TracksWrapper extends Component {

//   componentDidMount() {

//     console.log(this.props.artistId)
//     this.props.fetchArtistTracks(this.props.artistId);
//   }


//   // albumDetailOpenHandler = id => {
//   //   this.props.history.push(`/albums/${id}`);
//   // };

//   // addTrackToHistoryHandler = id => {
//   //   const track = {track: id}
//   //   this.props.addTrackToHistory(track)
//   // }

//   render() {

//     const { tracks, loading } = this.props;
//     return (
//       <div className="container">
//         <div className="w-100">
//           <div className="row p-2" style={{color: '#777', fontSize: '13px'}}>
//             <div className='col-1 d-flex justify-content-center justify-content-sm-start'>#</div>
//             <div className='col-6 col-lg-7'>Название трека</div>
//             <div className='col-3'>Альбом</div>
//           </div>
//           {tracks && tracks.map((el, i) => (
//             <Track
//               key={el._id}
//               // sn={i+1}
//               name={el.name}
//               // album={el.album}
//               // duration={el.duration}
//               // addTrack = {() => this.addTrackToHistoryHandler(el._id)}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     tracks: state.artists.tracks,
//     loading: state.artists.loading,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchArtistTracks: id => dispatch(fetchArtistTracks(id)),
//     addTrackToHistory: track => dispatch(addTrackToHistory(track))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TracksWrapper);