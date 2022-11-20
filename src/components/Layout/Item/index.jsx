import { useEffect, useState } from "react";
import Section from "../Section";
import ItemAPI from "../../../services/item.service";
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
    </div>
  );
};
export default Item;
