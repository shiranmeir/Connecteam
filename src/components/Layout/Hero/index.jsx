import Button from "../../common/Button";
import Logo from "../../common/Logo";
import ScrollArrow from "../../../images/ScrollArrow/ScrollArrow";
import ScrollArrowHover from "../../../images/ScrollArrow/ScrollArrowHover";
import { useEffect, useState } from "react";
import HomeAPI from "../../../services/home.service";
import classes from "./style.module.scss";

const Hero = ({ hero }) => {
  const [homeImg, setHomeImg] = useState("");

  useEffect(() => {
    const getHomeImg = async () => {
      const data = await HomeAPI.getHomeImg();
      if (data) {
        setHomeImg(data);
      }
    };
    getHomeImg();
  }, []);

  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={classes.heroIn}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <h1 className={classes.title}>{hero?.title}</h1>
        <p className={classes.subtitle}>{hero?.subtitle}</p>
        <div className={classes.buttons}>
          {hero?.links.map((link) => {
            return <Button key={link.label} link={link} />;
          })}
        </div>
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
  );
};

export default Hero;
