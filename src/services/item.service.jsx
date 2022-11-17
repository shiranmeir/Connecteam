import axios from "axios";
export const API_URL = process.env.REACT_APP_DATA;
export const API_URL_IMG = process.env.REACT_APP_IMG;

const ItemAPI = {
  getItemData: async (name) => {
    try {
      const { data } = await axios.get(`${API_URL}${name}.json`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return [];
    }
  },
  getItemImg: async (name, size) => {
    return await axios
      .get(`${API_URL_IMG}${name}-${size}.jpg`, { responseType: "arraybuffer" })
      .then((response) => {
        let blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        let image = URL.createObjectURL(blob);
        return image;
      });
  },
};

export default ItemAPI;
