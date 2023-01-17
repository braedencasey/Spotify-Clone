import React from "react";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SOngRow from "./SongRow";
import "./Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDatalayer();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="Weekly Poster" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontsize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.track.items.map(item =>(
          <SongRow track = {item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
