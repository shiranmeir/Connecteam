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
        item.title.toLowerCase().split(" ").join("-"),
        "small"
      );
      setItemImg(itemImg);
    };
    getItemImg();
    console.log(item);
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
        className={`${classes.conteiner} ${
          item.title === "Sit et enim" ? classes.rev : null
        }`}
        style={
          dolore
            ? {
                backgroundColor: `hsla(${item.colorHue},100%, 21%, 1)`,
                display: "block",
                position: "relative",
                textAlign: "-webkit-center",
                padding: "unset",
              }
            : null
        }
      >
        <section
          style={
            dolore
              ? {
                  maxWidth: "unset",
                }
              : null
          }
          className={classes.section}
        >
          <div
            style={
              dolore
                ? {
                    flexDirection: "column",
                    alignItems: "center",
                  }
                : null
            }
            className={classes.topSec}
          >
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
                <a href={link.href}>
                  <button className={classes.doloreBtn}>
                    <span>
                      <img
                        alt={link.label}
                        src={`${API_URL_ICON}${link.icon}.svg`}
                      />
                    </span>
                    {link.label}
                  </button>
                </a>
              );
            })}
          </div>
        </section>
        {dolore ? (
          <div
            className={classes.itemImgDolore}
            style={{
              backgroundImage: `url(${itemImg})`,
            }}
          ></div>
        ) : (
          <SectionImg item={item} itemImg={itemImg} />
        )}
      </div>
    </>
  );
};

export default Section;
