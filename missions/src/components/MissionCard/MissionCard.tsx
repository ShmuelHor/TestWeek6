import React, { useEffect, useState } from "react";
import { Mission } from "../../types";
import "./MissionCard.css";

interface MissionCardProps {
  mission: Mission;
  deleteMission: (id: string) => void;
  UpdateStatusMission: (id: string) => void;
}

const MissionCard: React.FC<MissionCardProps> = ({
  mission,
  deleteMission,
  UpdateStatusMission,
}) => {
  const [backgroundColor, setBackgroundColor] = useState(``);
  useEffect(() => {
    a();
  });
  const a = () => {
    if (mission.status === "Pending") {
      setBackgroundColor("red");
    } else if (mission.status === "In Progress") {
      setBackgroundColor("orange");
    } else if (mission.status === "Completed") {
      setBackgroundColor("green");
    }
  };
  return (
    <div style={{ backgroundColor }} className="MissionCard">
      <div className="Card">
        <h4>Name: {mission.name}</h4>
        <p>Status: {mission.status}</p>
        <p>Priority: {mission.priority}</p>
        <p>Description: {mission.description}</p>
      </div>
      <div className="buttons">
        <button id="delete" onClick={() => deleteMission(mission._id!)}>
          Delete
        </button>
        <button
          id="Progress"
          onClick={() => {
            UpdateStatusMission(mission._id!);
            a();
          }}
        >
          Progress
        </button>
      </div>
    </div>
  );
};

export default MissionCard;
