import React, { useState } from "react";
import { Mission } from "../../types";
import "./MissionForm.css";

interface MissionFormProps {
  CreateNewMission: (mission: Mission) => void;
}

const MissionForm: React.FC<MissionFormProps> = ({ CreateNewMission }) => {
  const [formData, setFormData] = useState<Mission>({
    name: "",
    status: "Pending",
    priority: "Low",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
        !formData.name ||
        !formData.description ||
        !formData.status ||
        !formData.priority
    ) {
      return;
    }
    CreateNewMission(formData);
    setFormData({
      name: "",
      status: "",
      priority: "",
      description: "",
    });
  };
  
  return (
    <div className="MissionForm">
      <div>
        <form onSubmit={handleSubmit}>
          <label >
            <input
            className="a"
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="">
            <select
            className="a"
              name="status"
              value={formData.status}
              onChange={(e) => handleChange(e)}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <br />

          </label>
          <label htmlFor="">
            <select
            className="a"
              name="priority"
              value={formData.priority}
              onChange={(e) => handleChange(e)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <br />

          <label>
            <input
            className="a"
              type="text"
              name="description"
              placeholder="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <br />

          <button className="b" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default MissionForm;
