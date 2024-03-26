import axios from "axios";
import { BASEURL } from "../utils/constants";

const ProductsServices = {
  getAllProducts: async () => {
    const response = await axios.get(BASEURL)
    return response.data;
  }
}

export default ProductsServices;