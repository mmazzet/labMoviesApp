import React from "react";
import { Typography } from "@mui/material";
import { Actor } from "../../types/interfaces"; 

interface PersonalInfoProps {
  actor: Actor;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ actor }) => {
  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {actor.name}
      </Typography>
      <Typography variant="h5" paddingTop={"20px"} sx={{ fontWeight: "bold" }}>
        Personal Info
      </Typography>
      <Typography variant="body1" paddingTop="10px">
        <span style={{ fontWeight: "bold" }}>Profession: </span>
        {actor.known_for_department}
      </Typography>
      <Typography variant="body1" paddingTop="10px">
        <span style={{ fontWeight: "bold" }}>Birth Date: </span>
        {actor.birthday}
      </Typography>
      <Typography variant="body1" paddingTop="10px">
        <span style={{ fontWeight: "bold" }}>Place of Birth: </span>
        {actor.place_of_birth}
      </Typography>
      {actor.deathday && (
        <>
          <Typography variant="body1" paddingTop="10px">
            <span style={{ fontWeight: "bold" }}>Death Date: </span> 
            {actor.deathday}
          </Typography>
        </>
      )}
    </>
  );
}


export default PersonalInfo;