import { useEffect, useRef, useState } from "react";
import ItemAPI from "../../../services/item.service";
import classes from "./style.module.scss";
export const API_URL_ICON = process.env.REACT_APP_ICON;

const MidNavItem = ({ item }) => {
  const [itemData, setItemData] = useState({});
  const el = useRef(null);

  useEffect(() => {
    const getItemData = async () => {
      const itemData = await ItemAPI.getItemData(item.name);
      setItemData(itemData);
    };
    getItemData();
  }, [item]);

  useEffect(() => {
    el.current.style.setProperty("--item-color", itemData.colorHue);
  }, [itemData]);

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
    <button ref={el} className={classes.item}>
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
