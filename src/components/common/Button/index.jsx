import classes from "./style.module.scss";
import IconOne from "../../../images/IconOne/IconOne";
// import cc from "classcat";

const Button = ({ link }) => {
  return (
    <a href={link.href}>
      <button
        className={`${classes.btn} ${
          link.primary ? classes.primary : classes.secondary
        }`}
      >
        <div>
          <div>
            {link.icon && (
              <span className={classes.icon}>
                <IconOne />
              </span>
            )}
            {link.label}
            <span className={classes.arrow}> →</span>
          </div>
        </div>
      </button>
    </a>
  );
};

export default Button;
