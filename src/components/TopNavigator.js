import React from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, Text, View, Button } from 'react-native';

const TopNavigator = (props) => {
    const { navigate } = props.navigation;

    return (
        <View>
            <Button
                title="Profiles"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
                />
            <Button
                title="Home"
                onPress={() =>
                    navigate('Home')
                }
            />
        </View>
    )
};

export default TopNavigator;
