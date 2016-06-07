// Import the code we need
import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

// Create a react component
var Weather = React.createClass({
    render: function() {
        return <View ></View>
    }
});

// Style the react component
var styles = StyleSheet.create({

});

// Show the react component on the screen
AppRegistry.registerComponent('weather', () => Weather);
