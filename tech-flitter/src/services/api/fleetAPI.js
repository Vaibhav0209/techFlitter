import axiosInstance from "../axios.config";

export const fleetServices = {
  AddFleets: async (data) => {
    return await axiosInstance.post("/add-fleet", data);
  },
  getAllFleets: async (data) => {
    return await axiosInstance.post("/get-fleets", { page: data, limit: 2 });
  },
  getFleet: async (id) => {
    return await axiosInstance.get(`/get-fleet/${id}`);
  },
  changeFleet: async (data) => {
    return await axiosInstance.patch(`/update-fleet`, data);
  },
  deleteFleet: async (data) => {
    return await axiosInstance.delete(`/delete-fleet/${data}`);
  },
};
