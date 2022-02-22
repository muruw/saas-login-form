import React from 'react';
import { Button } from '@mui/material';

interface ComponentProps {
  label: string;
  onClick: () => void;
}

function FormButton({ label, onClick } : ComponentProps) {
  return (
    <Button
      style={{ width: '100%' }}
      variant="contained"
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default FormButton;
