import React from 'react'
import { Mission } from '../../types'
import MissionCard from '../MissionCard/MissionCard';

interface MissionListProps {
    missions: Mission[];
    deleteMission: (id: string) => void;
    UpdateStatusMission: (id: string) => void
}

const MissionList: React.FC<MissionListProps> = ({missions, deleteMission, UpdateStatusMission}) => {

  return (
    <div>
        {missions.map((mission) => (
            
            <MissionCard key={mission._id} mission={mission} deleteMission={deleteMission} UpdateStatusMission={UpdateStatusMission}/>
        ))}
        
    </div>
  )
}

export default MissionList