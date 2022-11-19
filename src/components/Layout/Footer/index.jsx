import { useEffect, useState } from "react";
import FooterAPI from "../../../services/footer.service";
import Form from "./Form";
import Intro from "./Intro";
import classes from "./style.module.scss";

const Footer = () => {
  const [footerIntroData, setFooterIntroData] = useState({});
  const [footerFormData, setFooterFormData] = useState({});

  useEffect(() => {
    const getFooterData = async () => {
      const data = await FooterAPI.getFooterData();
      console.log(data);
      if (data) {
        setFooterIntroData(data.intro);
        setFooterFormData(data.form);
      }
    };
    getFooterData();
  }, []);
  return (
    <div className={classes.footer}>
      <Intro intro={footerIntroData} />
      <Form form={footerFormData} />
    </div>
  );
};
export default Footer;
