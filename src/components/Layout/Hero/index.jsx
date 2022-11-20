import Button from "../../common/Button";
import ScrollArrow from "../../../images/ScrollArrow/ScrollArrow";
import ScrollArrowHover from "../../../images/ScrollArrow/ScrollArrowHover";
import { useEffect, useState } from "react";
import HomeAPI from "../../../services/home.service";
import classes from "./style.module.scss";
import { API_URL_ICON } from "../../common/MidNav/MidNavItem";

const Hero = ({ hero }) => {
  const [homeImg, setHomeImg] = useState("");
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const getHomeImg = async () => {
      const data = await HomeAPI.getHomeImg();
      if (data) {
        setHomeImg(data);
      }
    };
    getHomeImg();
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${homeImg})`,
      }}
    >
      <div className={colorChange ? classes.colorChange : classes.logo}>
        <img
          className={classes.logoImg}
          alt="logo"
          src={`${API_URL_ICON}logo.svg`}
        />
      </div>
      <div className={classes.heroIn}>
        <h1 className={classes.title}>{hero?.title}</h1>
        <p className={classes.subtitle}>{hero?.subtitle}</p>
        <div className={classes.buttons}>
          {hero?.links.map((link) => {
            return <Button key={link.label} link={link} />;
          })}
        </div>
        <div className={classes.scrollConteiner}>
          <div className={classes.scroll}>
            <div className={classes.bigArrow}>
              <ScrollArrow />
            </div>
            <div className={classes.smallArrow}>
              <ScrollArrowHover />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
