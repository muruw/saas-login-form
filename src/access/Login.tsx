import React from 'react';
import {
  Card, CardContent, Divider, Grid, TextField,
} from '@mui/material';
import LoginButton from './LoginButton';

export default function Login() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              style={{ width: '100%' }}
              id="username"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: '100%' }}
              id="password"
              label="Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <LoginButton />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <LoginButton />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
