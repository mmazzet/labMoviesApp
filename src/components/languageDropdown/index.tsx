import React, { useEffect } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";
import cookie from "js-cookie";

const languages = [
  { code: "en", name: "English" },
  { code: "it", name: "Italiano" },
  { code: "ar", name: "العربية", dir: "rtl" },
];

const defaultLanguage = { code: "en", name: "English", dir: "ltr" };


const LanguageDropdown: React.FC = () => {
  const currentLanguageCode = cookie.get("i18next") || "en";
  const currentLanguage = languages.find(l => l.code === currentLanguageCode) || defaultLanguage;  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18next.language);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

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
