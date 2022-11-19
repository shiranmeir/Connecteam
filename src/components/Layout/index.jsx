import { useEffect, useState } from "react";
import HomeAPI from "../../services/home.service";
import MidNav from "../common/MidNav";
import Hero from "./Hero";
import Item from "./Item/index";
import classes from "./style.module.scss";

const Layout = () => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const data = await HomeAPI.getHomeData();
      if (data) {
        setItemsData(data.content);
      }
    };
    getHomeData();
  }, []);

  return (
    <div>
      <Hero hero={itemsData.hero} />
      <MidNav className={classes.midnav} items={itemsData.items} />
      {itemsData.items?.map((item, index) => {
        return <Item key={item.name} homeItem={item} items={itemsData.items} />;
      })}
    </div>
  );
};

export default Layout;
