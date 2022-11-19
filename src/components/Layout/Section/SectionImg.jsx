import classes from "./style.module.scss";
export const API_URL_ICON = process.env.REACT_APP_ICON;

const SectionImg = ({ item, itemImg }) => {
  return (
    <>
      <div
        className={classes.itemImg}
        style={{
          backgroundImage: `url(${itemImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></div>
      {(item.title === "Repudiandae" ||
        item.title === "Praesentium aspernatur") && (
        <div
          className={
            item.title === "Repudiandae" ? classes.atIcon : classes.fileIcon
          }
        >
          <div className={classes.icon}>
            <img
              className={
                item.title === "Repudiandae"
                  ? classes.repudiandae
                  : classes.praesentiumaspernatur
              }
              alt={item.title}
              src={`${API_URL_ICON}${item.icon}.svg`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionImg;
