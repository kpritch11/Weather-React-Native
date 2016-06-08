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
        var pins = [{
            latitude: 37,
            longitude: -95
        }];

        return <MapView
            annotations={pins}
            onRegionChangeComplete={this.onRegionChangeComplete}
            style={styles.map}>
        </MapView>
    },
    onRegionChangeComplete: function(region) {
        
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
