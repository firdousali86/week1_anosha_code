import React from 'react';
import {Button, Text, View} from 'react-native';

class AddressContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgColor: 'LightGray'};
  }

  render() {
    const {street, city, country, postCode} = this.props;
    const {bgColor} = this.state;

    return (
      <View style={{backgroundColor: bgColor, flex: 1}}>
        <Text style={{fontWeight: 'bold'}}> Your Address:</Text>
        <Text>Street: {street}</Text>
        <Text>City: {city}</Text>
        <Text>Country: {country}</Text>
        <Text>Post Code: {postCode}</Text>
        <Button
          title="Change BG"
          onPress={() => {
            this.setState({bgColor: 'orange'});
          }}
        />
      </View>
    );
  }
}
export default AddressContainer;
