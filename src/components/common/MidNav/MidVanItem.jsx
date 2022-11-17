import AtIcon from "../../../images/AtIcon/AtIcon";
import CalendarIcon from "../../../images/CalendarIcon";
import FileIcon from "../../../images/FileIcon";
import UnionIcon from "../../../images/UnionIcon";
import classes from "./style.module.scss";

const MidNavItem = ({ item }) => {
  let color = "";
  let icon = "";
  switch (item.name) {
    case "repudiandae":
      color = "#7A00DA";
      icon = <AtIcon />;
      break;
    case "sit-at-enim":
      color = "#00CDDA";
      icon = <UnionIcon />;
      break;
    case "dolore-ipsum":
      color = "#0098DA";
      icon = <CalendarIcon />;
      break;
    case "praesentium-aspernatur":
      color = "#DA0069";
      icon = <FileIcon />;
      break;
    default:
      break;
  }

  return (
    <button className={classes.item} style={{ color: color }}>
      <div className={classes.itemIcon}>{icon}</div>
      <div>{item.name}</div>
    </button>
  );
};

export default MidNavItem;
