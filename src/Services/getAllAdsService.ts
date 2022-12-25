// Models
import { I_Advertise } from "../Models/advertiseInterface";
import { axiosInstance } from "../util/axiosInstance";
// Models
export const getAllAdsService = async (
  vehicleType: number | string,
  adType: number | string
): Promise<I_Advertise[] | string> => {
  return axiosInstance
    .get(`/get-advertises/${vehicleType}/type/${adType}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
};