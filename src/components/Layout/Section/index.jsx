import { useEffect, useState } from "react";
import ItemAPI from "../../../services/item.service";
import SectionImg from "./SectionImg";
import classes from "./style.module.scss";
export const API_URL_ICON = process.env.REACT_APP_ICON;

const Section = ({ item, homeItem }) => {
  const [itemImg, setItemImg] = useState("");
  const dolore = homeItem.layout === "fullColor";

  useEffect(() => {
    const getItemImg = async () => {
      const itemImg = await ItemAPI.getItemImg(
        item?.title?.toLowerCase().split(" ").join("-"),
        "small"
      );
      setItemImg(itemImg);
    };
    getItemImg();
  }, [item]);

  let className = "";
  switch (homeItem.name) {
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
    <>
      <div
        className={`${item.title === "Sit et enim" ? classes.rev : null} ${
          dolore ? classes.doloreConteiner : classes.conteiner
        }`}
        style={
          dolore
            ? {
                backgroundImage: `url(${itemImg})`,
                backgroundColor: `hsla(${item.colorHue},100%, 21%, 1)`,
              }
            : null
        }
      >
        <section
          className={`${dolore ? classes.doloreSection : classes.section}`}
        >
          <div className={`${dolore ? classes.doloreTopSec : classes.topSec}`}>
            <div
              className={dolore ? classes.doloreIcon : classes.icon}
              style={
                dolore
                  ? {
                      backgroundColor: `hsla(${item.colorHue},100%, 43%, 1)`,
                    }
                  : {
                      backgroundColor: `hsla(${item.colorHue},100%, 97%, 1)`,
                    }
              }
            >
              <img
                className={className}
                alt={item.name}
                src={`${API_URL_ICON}${item.icon}.svg`}
              />
            </div>

            <div className={classes.topTitle}>
              <div
                style={
                  dolore
                    ? {
                        color: `hsla(${item.colorHue},25%, 69%, 1)`,
                      }
                    : null
                }
                className={classes.label}
              >
                {item.label}
              </div>
              <h3 style={{ color: `hsla(${item.colorHue},100%, 50%, 1)` }}>
                {item.title}
              </h3>
            </div>
          </div>
          <p
            style={
              dolore
                ? {
                    color: "#FFFFFF",
                  }
                : null
            }
            className={classes.description}
          >
            {item.description?.replace(/(<([^>]+)>)/gi, "")}
          </p>
          {dolore && <div className={classes.line}></div>}
          <div className={dolore ? classes.btnConteiner : null}>
            <button
              className={dolore ? classes.linkBtn : null}
              style={
                dolore
                  ? {
                      backgroundColor: `hsla(${item.colorHue},100%, 50%, 1)`,
                    }
                  : {
                      color: `hsla(${item.colorHue},100%, 43%, 1)`,
                      cursor: "pointer",
                    }
              }
            >
              {homeItem.linkLabel} →
            </button>
            {homeItem.additionalLinks?.map((link) => {
              return (
                <>
                  <button className={classes.doloreBtn}>
                    <a
                      href={link.href}
                      style={{ color: `hsla(${item.colorHue},100%, 43%, 1)` }}
                    >
                      <span>
                        <img
                          alt={link.label}
                          src={`${API_URL_ICON}${link.icon}.svg`}
                        />
                      </span>
                      {link.label}
                    </a>
                  </button>
                </>
              );
            })}
          </div>
        </section>
        {dolore ? null : ( // ></div> //   }} //     backgroundImage: `url(${itemImg})`, //   style={{ //   className={classes.itemImgDolore} // <div
          <SectionImg item={item} itemImg={itemImg} />
        )}
      </div>
    </>
  );
};

export default Section;
