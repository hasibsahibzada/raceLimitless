import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import { styles } from '../../stylesheets/home';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    my Homes
                </Text>
            </View>
        );
    }
}

export default Home;