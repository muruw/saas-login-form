import React, { ReactElement } from 'react';
import { Button, InputAdornment } from '@mui/material';

interface ComponentProps {
  label: string;
  icon: ReactElement<unknown, 'svg'>;
  onClick: () => void;
}

function ThirdPartyLogin({ label, icon, onClick }: ComponentProps) {
  return (
    <Button
      style={{ width: '100%' }}
      variant="outlined"
      onClick={onClick}
    >
      <InputAdornment position="start">
        {icon}
      </InputAdornment>
      {label}
    </Button>
  );
}

export default ThirdPartyLogin;
