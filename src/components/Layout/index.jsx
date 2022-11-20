import { useEffect, useState } from "react";
import HomeAPI from "../../services/home.service";
import MidNav from "../common/MidNav";
import Footer from "./Footer";
import Hero from "./Hero";
import Item from "./Item/index";
import classes from "./style.module.scss";

const Layout = () => {
  const [itemsData, setItemsData] = useState([]);
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const getHomeData = async () => {
      const data = await HomeAPI.getHomeData();
      if (data) {
        setItemsData(data.content);
      }
    };
    getHomeData();
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 600) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div>
      <Hero hero={itemsData.hero} />
      <MidNav
        className={colorChange ? classes.colorChange : classes.midnav}
        items={itemsData.items}
      />
      {itemsData.items?.map((item, index) => {
        return <Item key={item.name} homeItem={item} items={itemsData.items} />;
      })}
      <Footer />
    </div>
  );
};

export default Layout;
