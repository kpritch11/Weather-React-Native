// Import the code we need
import React from 'react';

import {
    AppRegistry,
    MapView,
    StyleSheet,
    View
} from 'react-native';

// Create a react component
var Weather = React.createClass({
    render: function() {
        return <MapView
            onRegionChangeComplete={this.onRegionChangeComplete}
            style={styles.map}>
        </MapView>
    },
    onRegionChangeComplete: function(region) {
        console.log(region)
    }
});

// Style the react component
var styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

// Show the react component on the screen
AppRegistry.registerComponent('weather', () => Weather);
