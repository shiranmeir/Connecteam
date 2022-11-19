import axios from "axios";
export const API_URL = process.env.REACT_APP_DATA;

const FooterAPI = {
  getFooterData: async () => {
    try {
      const { data } = await axios.get(`${API_URL}footer.json`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  },
};

export default FooterAPI;
