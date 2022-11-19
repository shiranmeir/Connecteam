import { useEffect, useState } from "react";
import classes from "./style.module.scss";

const Intro = ({ intro }) => {
  const [firstP, setFirstP] = useState("");
  const [lastP, setLastP] = useState("");

  useEffect(() => {
    let firstP = intro?.text
      ?.substr(0, intro?.text.indexOf("<b>"))
      .replace(/(<([^>]+)>)/gi, "");

    setFirstP(firstP);

    let lastPar = intro?.text?.match(/<b>.*?<\/b>/g);
    for (var i = 0, l = lastPar?.length; i < l; i++) {
      lastPar[i] = lastPar[i].replace(/<b>(.*?)<\/b>/, "$1");
    }

    setLastP(lastPar);
  }, [intro]);

  return (
    <div className={classes.intro}>
      <h3>{intro?.title}</h3>
      <p>{firstP}</p>
      <p style={{ color: "black", fontWeight: "700" }}>{lastP}</p>
      <a href={intro?.link?.href}>{intro?.link?.label}→</a>
    </div>
  );
};

export default Intro;
