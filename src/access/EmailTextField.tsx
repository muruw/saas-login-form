import React, { ChangeEventHandler } from 'react';
import { TextField } from '@mui/material';

interface ComponentProps {
  label: string;
  value: string;
  setValue: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  autoFocus: boolean;
}

function EmailTextField({
  label, value, setValue, autoFocus,
} : ComponentProps) {
  return (
    <TextField
      type="email"
      autoFocus={autoFocus}
      style={{ width: '100%' }}
      id={label}
      label={label}
      value={value}
      onChange={setValue}
      variant="outlined"
    />
  );
}

export default EmailTextField;
