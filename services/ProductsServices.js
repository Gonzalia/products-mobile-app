import axios from "axios";
import { BASEURL } from "../utils/constants";

const ProductsServices = {
  getAllProducts: async () => {
    const response = await axios.get(BASEURL)
    return response.data;
  },
  getByCategorie: async (categorie) => {
    const response = await axios.get(`${BASEURL}/category/${categorie}`)
    return response.data;
  }
}

export default ProductsServices;