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
  Typography
} from '@material-ui/core';

import Reorder from '@material-ui/icons/Reorder';
import theme from '../theme';

import '../App.css';

class MaterialUIEx3Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      btn: ''
    };
  }

  onMenuItemClicked = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onClose = () => {
    this.setState({ anchorEl: null });
  };

  onItem1Clicked = () => {
    this.setState({ btn: 'item 1 was clicked', anchorEl: null });
  };

  onItem2Clicked = () => {
    this.setState({ btn: 'item 2 was clicked', anchorEl: null });
  };

  onItem3Clicked = () => {
    this.setState({ btn: 'item 3 was clicked', anchorEl: null });
  };

  render() {
    const { anchorEl, btn } = this.state;
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
              <MenuItem onClick={this.onItem1Clicked}>
                Menu Item 1 goes here
              </MenuItem>
              <MenuItem onClick={this.onItem2Clicked}>
                Menu Item 2 goes here
              </MenuItem>
              <MenuItem onClick={this.onItem3Clicked}>
                Menu Item 3 goes here
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Card style={{ marginTop: '10%' }}>
          <CardHeader
            title="Exercise #3"
            color="inherit"
            style={{ textAlign: 'center' }}
          />
          <CardContent>
            {btn.length > 0 && <Typography color="error">{btn}</Typography>}
          </CardContent>
        </Card>
      </MuiThemeProvider>
    );
  }
}
export default MaterialUIEx3Component;
