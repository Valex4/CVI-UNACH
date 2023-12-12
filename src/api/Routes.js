import axios from "axios";

export const loginUser = async(valores) => {
    await axios.post( "https://url-api", valores, {withCredentials: true})
}