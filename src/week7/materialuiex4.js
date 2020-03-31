import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  Toolbar,
  Card,
  AppBar,
  CardHeader,
  CardContent,
  Menu,
  MenuItem,
  IconButton,
  Snackbar,
  Typography,
} from '@material-ui/core';
import Reorder from '@material-ui/icons/Reorder';

import theme from '../theme';

import '../App.css';

class MaterialUIEx4Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedMsg: '',
      gotData: false,
      snackbarMsg: '',
      usernames: [],
      users: [],
      userInfo: '',
    };
  }

  onMenuItemClicked = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onClose = () => {
    this.setState({ anchorEl: null });
  };

  onUsersItemClicked = async () => {
    this.setState({ selectedMsg: '', userInfo: '' });
    try {
      let response = await fetch('http://127.0.0.1:5000/users');
      let json = await response.json();
      await this.setState({ users: json });
      let usernames = this.state.users.map((user) => user.name);
      this.setState({
        usernames: usernames,
        snackbarMsg: 'Server data loaded',
        gotData: true,
        anchorEl: null,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        selectedMsg: `Problem loading server data - ${error.message}`,
        gotData: false,
        anchorEl: null,
      });
    }
  };

  snackbarClose = () => {
    this.setState({
      gotData: false,
      selectedMsg: `${this.state.usernames.length} users loaded`,
    });
  };

  render() {
    const { anchorEl, selectedMsg, gotData, snackbarMsg } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.onMenuItemClicked} color="inherit">
              <Reorder />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.onClose}
            >
              <MenuItem onClick={this.onUsersItemClicked}>Grab Users</MenuItem>
            </Menu>
            <Typography variant="h6" color="inherit">
              INFO3069 - MaterialUI
            </Typography>
          </Toolbar>
        </AppBar>
        <Card style={{ marginTop: '10%' }}>
          <CardHeader
            title="Exercise #4"
            color="inherit"
            style={{ textAlign: 'center' }}
          />
          <CardContent>
            {this.state.usernames.length > 0 && (
              <div>
                <Typography color="error">{selectedMsg}</Typography>
              </div>
            )}
          </CardContent>
        </Card>
        <Snackbar
          open={gotData}
          message={snackbarMsg}
          autoHideDuration={4000}
          onClose={this.snackbarClose}
        />
      </MuiThemeProvider>
    );
  }
}
export default MaterialUIEx4Component;
