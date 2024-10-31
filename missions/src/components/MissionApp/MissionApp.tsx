import React, { useEffect, useState } from "react";
import {
  RequestGetMissions,
  RequestCreateMission,
  RequestDeleteMission,
  RequestUpdateStatusMission,
} from "../../APIrequests";
import { Mission } from "../../types";
import MissionList from "../MissionList/MissionList";
import MissionForm from "../MissionForm/MissionForm";

const MissionApp: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [get, setGet] = useState<string>("");

  useEffect(() => {
    const GetAllMissions = async () => {
        try {
          const data: Mission[] = await RequestGetMissions();
          console.log(data);
          setMissions(data);
        } catch {
          setError("Failed to load missions");
        }
      };
    GetAllMissions();
  }, [get]);
  
  const CreateNewMission = async (mission: Mission) => {
    try {
      const data: Mission = await RequestCreateMission(mission);
      setGet(`${data._id!}1`);
    } catch {
      setError("Failed to create mission");
    }
  };
  const deleteMission = async (id: string) => {
    try {
      const data: Mission = await RequestDeleteMission(id);
      console.log(data);
      setGet(`${data._id!}2`);
    } catch {
      setError("Failed to delete mission");
    }
  };
  const UpdateStatusMission = async (id: string) => {
    try {
      const data = await RequestUpdateStatusMission(id);
      setGet(`${data._id!}3`);
    } catch {
      setError("Failed to update mission");
    }
  };
  return (
    <div className="MissionApp">
      <MissionForm CreateNewMission={CreateNewMission} />
      <MissionList
        missions={missions}
        deleteMission={deleteMission}
        UpdateStatusMission={UpdateStatusMission}
      />

      {error}
    </div>
  );
};

export default MissionApp;
