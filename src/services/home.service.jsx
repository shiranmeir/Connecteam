import axios from "axios";
export const API_URL = process.env.REACT_APP_DATA;
export const API_URL_IMG = process.env.REACT_APP_IMG;

const HomeAPI = {
  getHomeData: async () => {
    try {
      const { data } = await axios.get(`${API_URL}home.json`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  },
  getHomeImg: async () => {
    return await axios
      .get(`${API_URL_IMG}home-large.jpg`, { responseType: "arraybuffer" })
      .then((response) => {
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let image = URL.createObjectURL(blob);
        return image;
      });
  },
};

export default HomeAPI;
