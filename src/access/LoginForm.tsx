import React, { useState } from 'react';
import {
  Card, CardContent, Divider, Grid,
} from '@mui/material';
import FormButton from './FormButton';
import PasswordTextField from './PasswordTextField';
import EmailTextField from './EmailTextField';
import ThirdPartyLoginFields from './third-party/ThirdPartyLoginFields';

export default function LoginForm() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleStateFieldChange = (field: string) => (event: any) => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  const handleLogin = () => {
    console.log(state);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <EmailTextField
              label="Email"
              value={state.email}
              setValue={handleStateFieldChange('email')}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordTextField
              password={state.password}
              setPassword={handleStateFieldChange('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormButton
              label="Log in"
              onClick={handleLogin}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>

        <ThirdPartyLoginFields />
      </CardContent>
    </Card>
  );
}
