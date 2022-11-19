import { useEffect, useState } from "react";
import AtIcon from "../../../images/AtIcon/AtIcon";
import CalendarIcon from "../../../images/CalendarIcon";
import FileIcon from "../../../images/FileIcon";
import UnionIcon from "../../../images/UnionIcon";
import ItemAPI from "../../../services/item.service";
import classes from "./style.module.scss";
export const API_URL_ICON = process.env.REACT_APP_ICON;

const MidNavItem = ({ item }) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    const getItemData = async () => {
      const itemData = await ItemAPI.getItemData(item.name);
      setItemData(itemData);
    };
    getItemData();
  }, [item]);

  let className = "";
  switch (item.name) {
    case "repudiandae":
      className = classes.repudiandae;
      break;
    case "sit-at-enim":
      className = classes.sitatenim;
      break;
    case "dolore-ipsum":
      className = classes.doloreipsum;
      break;
    case "praesentium-aspernatur":
      className = classes.praesentiumaspernatur;
      break;
    default:
      break;
  }

  return (
    <button
      className={classes.item}
      style={{
        color: `hsla(${itemData.colorHue},100%, 50%, 1)`,
        "&:hover": {
          backgroundColor: `hsla(${itemData.colorHue},100%, 50%, 0.07)`,
        },
      }}
    >
      <div className={classes.itemIcon}>
        <img
          className={className}
          alt={item.name}
          src={`${API_URL_ICON}${itemData.icon}.svg`}
        />
      </div>
      <div>{item.name}</div>
    </button>
  );
};

export default MidNavItem;
