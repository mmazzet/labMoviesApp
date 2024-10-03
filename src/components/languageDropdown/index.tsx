import LanguageIcon from '@mui/icons-material/Language';
import * as React from 'react';
import { MenuItem, Select, FormControl } from '@mui/material';
import i18next from 'i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'it', name: 'Italiano'},
];

const LanguageDropdown: React.FC = () => {
  return (
    <FormControl>
      <Select
        displayEmpty
        IconComponent={() => <LanguageIcon sx={{ color: 'white' }} />}
        inputProps={{ 'aria-label': 'language' }}
        style={{ minWidth: '40px' }} 
      >
        {languages.map(({ code, name }) => (
          <MenuItem key={code} value={code} onClick={() => i18next.changeLanguage(code)}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;