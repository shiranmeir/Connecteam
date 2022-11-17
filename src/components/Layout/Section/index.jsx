import { useEffect, useState } from "react";
import BigAtIcon from "../../../images/AtIcon/BigAtIcon";
import BigCalendarIcon from "../../../images/CalendarIcon/BigCalendarIcon";
import BigFileIcon from "../../../images/FileIcon/BigFileIcon";
import BigUnionIcon from "../../../images/UnionIcon/BigUnionIcon";
import ItemAPI from "../../../services/item.service";
import SectionImg from "./SectionImg";
import classes from "./style.module.scss";

const Section = ({ item, homeItem, index }) => {
  const [itemImg, setItemImg] = useState("");

  useEffect(() => {
    const getItemImg = async () => {
      const itemImg = await ItemAPI.getItemImg(
        item.title.toLowerCase().split(" ").join("-"),
        "small"
      );
      setItemImg(itemImg);
    };
    getItemImg();
  }, [item]);

  let icon = "";
  switch (item.title) {
    case "Repudiandae":
      icon = <BigAtIcon />;
      break;
    case "Sit et enim":
      icon = <BigUnionIcon />;
      break;
    case "Dolore ipsum":
      icon = <BigCalendarIcon />;
      break;
    case "Praesentium aspernatur":
      icon = <BigFileIcon />;
      break;
    default:
      break;
  }
  return (
    <div className={`${classes.conteiner} ${index % 2 ? classes.rev : null}`}>
      <section className={classes.section}>
        <div className={classes.topSec}>
          <div
            style={{
              backgroundColor: `hsla(${item.colorHue},100%, 97%, 1)`,
              borderRadius: "50%",
              width: "60px",
              height: "60px",
            }}
          >
            <div className={classes.icon}>{icon}</div>
          </div>
          <div className={classes.topTitle}>
            <div className={classes.label}>{item.label}</div>
            <h3 style={{ color: `hsla(${item.colorHue},100%, 50%, 1)` }}>
              {item.title}
            </h3>
          </div>
        </div>
        <p className={classes.description}>
          {item.description?.replace(/(<([^>]+)>)/gi, "")}
        </p>
        <button
          style={{
            color: `hsla(${item.colorHue},100%, 50%, 1)`,
            cursor: "pointer",
          }}
        >
          {homeItem.linkLabel} →
        </button>
      </section>
      <SectionImg item={item} itemImg={itemImg} />
    </div>
  );
};

export default Section;
