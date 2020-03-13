import React from "react";
import { apiURL, noImage } from "../../constants";

import "./Artist.css";

const Artist = props => {
  const path = apiURL + "/uploads/" + props.image;
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 m-auto p-3">
      <div onClick={props.click} className="Card">
        <div className="d-flex justify-content-center">
          <img
            src={props.image ? path : noImage}
            className="card-img-top rounded-circle"
            alt={props.title}
            style={{ width: "200px" }}
          />
        </div>
        <div className="card-body p-3">
          <h6
            className="card-title text-center m-0 Title"
            onClick={props.fullNews}
            style={{ cursor: "pointer", color: "#222" }}
          >
            {props.name}
            <small className="text-muted d-block mt-1">стиль</small>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Artist;
