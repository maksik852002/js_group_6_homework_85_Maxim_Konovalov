import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai";
import moment from "moment";
import "moment/locale/ru";
import Button from '../UI/Button/Button';
import "./Track.css";


 const Track = props => {

  const user =  useSelector(state =>  state.users.user);
  const checkUserTracks = () => {
    let label = <AiOutlineHeart size="22px"/>
      if (user) {
        user.tracks.forEach(el => el.id === props.id && (label = <AiTwotoneHeart size="22px"/>))
      }
    return label
  };

  moment.locale("ru");
  let date = props.date;
  date = moment(date).calendar();

  return (
    <div className="row p-2 track-row align-items-center">
      <div
        className="col-1 d-flex justify-content-center justify-content-sm-start"
        style={{ color: "#777" }}
      >
        {props.sn}
      </div>
      <div className="col-5 d-flex align-items-center" style={{ cursor: "pointer" }}>
        {user && <div className='track-fav' data-toggle="tooltip" title={'Add to favorite'}>
          <Button click={props.toFavorite} label={checkUserTracks()}/>
        </div>}
        <span data-toggle="tooltip" title={user ? ` Add " ${props.name} " to track history` : props.name} onClick={user ? props.toHistory : null} className={user ? "track-overflow track-overflow-hover":  "track-overflow"}>{props.name}</span>
      </div>
      {props.album && (
        <div className="col-4">
          <NavLink
            className="Nav-link-track track-overflow"
            to={`/albums/${props.album._id}`}
            data-toggle="tooltip"
            title={props.album.name}
          >
            {props.album.name}
          </NavLink>
        </div>
      )}
      {props.artist && (
        <div className="col-4">
          <NavLink
            className="Nav-link-track track-overflow"
            to={`/artists/${props.artist._id}/info`}
            data-toggle="tooltip"
            title={props.artist.name}
          >
            {props.artist.name}
          </NavLink>
        </div>
      )}
      {props.date && (
        <div className="col-2">
          <span className="track-overflow">{date}</span>
        </div>
      )}
      {props.duration&& (<div
        className="col-2 col-md-1 d-flex justify-content-end"
        style={{ color: "#777" }}
      >
        {props.duration}
      </div>
      )}
    </div>
  );
};

export default Track;
