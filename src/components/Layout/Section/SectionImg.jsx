import classes from "./style.module.scss";
export const API_URL_ICON = process.env.REACT_APP_ICON;

const SectionImg = ({ item, itemImg }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        className={classes.itemImg}
        style={{
          backgroundImage: `url(${itemImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>
      {item.title !== "Dolore ipsum" && (
        <div
          className={
            item.title === "Repudiandae"
              ? classes.atIcon
              : item.title === "Praesentium aspernatur"
              ? classes.fileIcon
              : classes.unionIcon
          }
        >
          <div className={classes.icon}>
            <img
              className={
                item.title === "Repudiandae"
                  ? classes.repudiandae
                  : item.title === "Praesentium aspernatur"
                  ? classes.praesentiumaspernatur
                  : classes.sitatenim
              }
              alt={item.title}
              src={`${API_URL_ICON}${item.icon}.svg`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionImg;
