// Import the code we need
import React from 'react';
import Api from './src/api';

import {
    AppRegistry,
    MapView,
    StyleSheet,
    Text,
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
        return <View style={styles.container}>
            <MapView
                annotations={[this.state.pin]}
                onRegionChangeComplete={this.onRegionChangeComplete}
                style={styles.map}>
            </MapView>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{this.state.city}</Text>
                <Text style={styles.text}>{this.state.temperature}</Text>
                <Text style={styles.text}>{this.state.description}</Text>
            </View>
        </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#f5fcff'
    },
    map: {
        flex: 2,
        marginTop: 30
    },
    textWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
});

// Show the react component on the screen
AppRegistry.registerComponent('weather', () => Weather);
