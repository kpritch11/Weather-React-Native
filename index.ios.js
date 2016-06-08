// Import the code we need
import React from 'react';
import Api from './src/api';

import {
    AppRegistry,
    MapView,
    StyleSheet,
    View
} from 'react-native';

// Create a react component
var Weather = React.createClass({
    getInitialState: function() {
        return {
            pin: {
                latitude: 0,
                longitude: 0
            },
            city: '',
            temperature: '',
            description: ''
        };
    },
    render: function() {
        return <MapView
            annotations={[this.state.pin]}
            onRegionChangeComplete={this.onRegionChangeComplete}
            style={styles.map}>
        </MapView>
    },
    onRegionChangeComplete: function(region) {
        this.setState({
            pin: {
                longitude: region.longitude,
                latitude: region.latitude
            }
        });

        Api(region.latitude, region.longitude)
            .then((data) => {
                console.log(data);
                this.setState(data);
            });
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
