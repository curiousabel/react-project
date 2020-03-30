import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
Toolbar,
Card,
AppBar,
CardHeader,
CardContent,
Typography
} from '@material-ui/core';

import theme from '../theme';

const MaterialUIEx1 = () => {
return (
<MuiThemeProvider theme={theme}>
<AppBar color="primary">
<Toolbar>
<Typography variant="h6" color="inherit">
INFO3069 - MaterialUI
</Typography>
</Toolbar>
</AppBar>
<Card style={{ marginTop: '20%' }}>
<CardHeader title="Exercise #1" style={{ textAlign: 'center' }} />
<CardContent>Cool stuff goes here</CardContent>
</Card>
</MuiThemeProvider>
);
};
export default MaterialUIEx1;