import LanguageIcon from '@mui/icons-material/Language';
/* import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem'; */


const languages = [
  { code: "en", name: "English", country_code: "ie" },
  { code: "it", name: "Italiano", country_code: "it" },

];

const LanguageDropdown: React.FC = () => {
  return (
    <div>
      <LanguageIcon />
{/*       <Dropdown>
  <MenuButton>My account</MenuButton>
  <Menu slots={{ listbox: Listbox }}>
    <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
    <MenuItem onClick={createHandleMenuClick('Language settings')}>
      Language settings
    </MenuItem>
    <MenuItem onClick={createHandleMenuClick('Log out')}>Log out</MenuItem>
  </Menu>
</Dropdown> */}
    </div>
  );
};

export default LanguageDropdown;

