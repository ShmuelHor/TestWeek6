import axios from "axios";
import { Mission } from "./types";

const URL_BASE: string =
  "https://reactexambackend.onrender.com/missions/9060580";

export const RequestGetMissions = async (): Promise<Mission[]> => {
  try {
    const response = await axios.get(URL_BASE);
    return response.data;
  } catch {
    throw new Error("fatch failed");
  }
};

export const RequestCreateMission = async (
  mission: Mission
): Promise<Mission> => {
  try {
    const response = await axios.post(URL_BASE, mission);
    return response.data;
  } catch {
    console.log("first");
    throw new Error("fatch failed");
  }
};

export const RequestDeleteMission = async (id: string): Promise<Mission> => {
  try {
    const response = await axios.delete(`${URL_BASE}/${id}`);
    return response.data;
  } catch {
    throw new Error("fatch failed");
  }
};

export const RequestUpdateStatusMission = async (
  id: string
): Promise<Mission> => {
  try {
    const response = await axios.post(`${URL_BASE}/progress/${id}`);
    return response.data;
  } catch {
    throw new Error("fatch failed");
  }
};
