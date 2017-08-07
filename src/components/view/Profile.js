import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../stylesheets/profile';

class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile
                </Text>
            </View>
        );
    }
}

export default Profile;