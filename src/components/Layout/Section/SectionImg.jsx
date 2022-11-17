import BigAtIcon from "../../../images/AtIcon/BigAtIcon";
import BigCalendarIcon from "../../../images/CalendarIcon/BigCalendarIcon";
import BigFileIcon from "../../../images/FileIcon/BigFileIcon";
import BigUnionIcon from "../../../images/UnionIcon/BigUnionIcon";
import classes from "./style.module.scss";

const SectionImg = ({ item, itemImg }) => {
  let icon = "";
  let className = "";
  switch (item.title) {
    case "Repudiandae":
      icon = <BigAtIcon />;
      className = classes.atIcon;
      break;
    case "Praesentium aspernatur":
      icon = <BigFileIcon />;
      className = classes.fileIcon;
      break;
    default:
      break;
  }
  return (
    <>
      <div
        className={classes.itemImg}
        style={{
          backgroundImage: `url(${itemImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>
      {(item.title === "Repudiandae" ||
        item.title === "Praesentium aspernatur") && (
        <div className={className}>
          <div className={classes.icon}>{icon}</div>
        </div>
      )}
    </>
  );
};

export default SectionImg;
