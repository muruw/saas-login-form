import React from 'react';
import { Grid } from '@mui/material';
import { GitHub, Google } from '@mui/icons-material';
import ThirdPartyLogin from './ThirdPartyLogin';

function ThirdPartyLoginFields() {
  return (
    <Grid paddingTop={2} container spacing={2}>
      <Grid item xs={12}>
        <ThirdPartyLogin
          label="Sign in with Google"
          icon={<Google />}
          onClick={() => console.log('Google')}
        />
      </Grid>
      <Grid item xs={12}>
        <ThirdPartyLogin
          label="Sign in with Github"
          icon={<GitHub />}
          onClick={() => console.log('Github')}
        />
      </Grid>
    </Grid>
  );
}

export default ThirdPartyLoginFields;
