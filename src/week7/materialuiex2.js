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

import Autosuggest from 'react-autosuggest';
import theme from '../theme';
import '../App.css';

const fruits = [
  'Apple',
  'Apricot',
  'Avocado',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Blood Orange',
  'Cantaloupe',
  'Currant',
  'Cherry',
  'Cherimoya',
  'Cloudberry',
  'Coconut',
  'Cranberry',
  'Clementine',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Goji berry',
  'Gooseberry',
  'Grape',
  'Grapefruit',
  'Guava',
  'Honeydew',
  'Huckleberry',
  'Jabouticaba',
  'Jackfruit',
  'Jambul',
  'Jujube',
  'Juniper berry',
  'Kiwi fruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Lychee',
  'Nectarine',
  'Mango',
  'Marion berry',
  'Melon',
  'Miracle fruit',
  'Mulberry',
  'Mandarine',
  'Olive',
  'Orange',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Physalis',
  'Plum',
  'Pineapple',
  'Pumpkin',
  'Pomegranate',
  'Pomelo',
  'Purple Mangosteen',
  'Quince',
  'Raspberry',
  'Raisin',
  'Rambutan',
  'Redcurrant',
  'Salal berry',
  'Satsuma',
  'Star fruit',
  'Strawberry',
  'Squash',
  'Salmonberry',
  'Tamarillo',
  'Tamarind',
  'Tomato',
  'Tangerine',
  'Ugli fruit',
  'Watermelon'
];
// non optional method - not used
const getSuggestionValue = suggestion => suggestion;
// renders filtered results
const renderFilteredList = selection => (
  <Typography variant="h6" color="inherit">
    {selection}
  </Typography>
);
// filtering code
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? ''
    : fruits.filter(
        fruit => fruit.toLowerCase().slice(0, inputLength) === inputValue
      );
};
class MaterialUIEx2Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredfruits: [], // what we're searching through
      value: '', // what the user enters
      funFacts: '' // what we'll display when a selection is made};
    };
  }

  // this stores the filtered list into state
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      filteredfruits: getSuggestions(value)
    });
  };

  // user has made a choice
  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      funFacts: `Some interesting stuff for ${suggestion} would go here`
    });
  };

  // user has typed something in the input
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
      funFacts: ''
    });
  };

  // non optional method called at startup
  onSuggestionsClearRequested = () => {};

  render() {
    // use the state variables locally

    const { value, filteredfruits, funFacts } = this.state;

    // seed the autosuggest

    const inputProps = {
      placeholder: 'Type the name of a fruit',
      value,
      onChange: this.onChange
    };

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
          <CardHeader
            title="Exercise #2"
            color="primary"
            style={{ textAlign: 'center' }}
          />
          <CardContent>
            <Autosuggest
              suggestions={filteredfruits}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionSelected={this.onSuggestionSelected}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderFilteredList}
              inputProps={inputProps}
            />
            {funFacts.length > 0 && (
              <Typography color="default">{funFacts}</Typography>
            )}
          </CardContent>
        </Card>
      </MuiThemeProvider>
    );
  }
}
export default MaterialUIEx2Component;
