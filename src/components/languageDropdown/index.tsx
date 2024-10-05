import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "it", name: "Italiano" },
];

const LanguageDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18next.language);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
    i18next.changeLanguage(code);
    handleClose();
  };
  return (
    <div>
    <IconButton
      onClick={handleClick}
      sx={{ color: "white" }} 
    >
      <LanguageIcon />
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      keepMounted
    >
      {languages.map(({ code, name }) => (
        <MenuItem
          key={code}
          selected={code === selectedLanguage}
          onClick={() => handleLanguageChange(code)}
        >
          {name}
        </MenuItem>
      ))}
    </Menu>
  </div>
  );
};

export default LanguageDropdown;
