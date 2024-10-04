import LanguageIcon from "@mui/icons-material/Language";
import * as React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import i18next from "i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "it", name: "Italiano" },
];

const LanguageDropdown: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    i18next.language
  );

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLanguage = event.target.value as string;
    setSelectedLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };
  return (
    <FormControl>
      <Select
        value={selectedLanguage}
        onChange={handleChange}
        IconComponent={() => <LanguageIcon sx={{ color: "white" }} />}
        renderValue={() => null}
        style={{ minWidth: "40px" }}
      >
        {languages.map(({ code, name }) => (
          <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
