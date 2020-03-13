import React from "react";
import { NavLink } from "react-router-dom";
import "./Track.css";

const Track = props => {
  return (
    <div className="row p-2 track-row align-items-center">
      <div
        className="col-1 d-flex justify-content-center justify-content-sm-start"
        style={{ color: "#777" }}
      >
        {props.sn}
      </div>
      <div
        className="col-6 col-lg-7 track-overflow"
        data-toggle="tooltip"
        style={{ cursor: "pointer" }}
        title={props.name}
      >
        {props.name}
      </div>
      {props.album && (
        <div className="col-3">
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
        <div className="col-3">
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
      <div
        className="col-2 col-md-1 d-flex justify-content-end"
        style={{ color: "#777" }}
      >
        {props.duration}
      </div>
    </div>
  );
};

export default Track;
