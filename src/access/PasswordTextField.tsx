import React, { ChangeEventHandler, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface ComponentProps {
  password: string;
  setPassword: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

function PasswordTextField({ password, setPassword }: ComponentProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <TextField
      style={{ width: '100%' }}
      id="password"
      label="Password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={setPassword}
      variant="outlined"
      helperText="Your password must be at least 6 characters."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordTextField;
