import { useEffect, useState } from "react";
import Section from "../Section";
import ItemAPI from "../../../services/item.service";
import classes from "./style.module.scss";
import MidNav from "../../common/MidNav";
export const API_URL_ICON = process.env.REACT_APP_ICON;

const Item = ({ key, homeItem, index, items }) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    const getItemData = async () => {
      const itemData = await ItemAPI.getItemData(homeItem.name);
      setItemData(itemData);
    };
    getItemData();
  }, [homeItem]);

  return (
    <div key={key}>
      <Section item={itemData} homeItem={homeItem} index={index} />
      <div className={classes.abs}>
        <div className={classes.logoAbs}>
          <img
            className={classes.logo}
            alt="logo"
            src={`${API_URL_ICON}logo.svg`}
          />
        </div>
        <MidNav className={classes.midnavAbs} items={items} />
      </div>
    </div>
  );
};
export default Item;
