import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, View, Image, Text } from 'react-native';
import { styles } from '../stylesheets/menu';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

export default function Menu({ onItemSelected }) {
    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri }}
                />
                <Text style={styles.name}>Your name</Text>
            </View>
            <Text
                onPress={() => onItemSelected('Home')}
                style={styles.item}
            >
                Home
            </Text>
            <Text
                onPress={() => onItemSelected('Profile')}
                style={styles.item}
            >
                Profile
            </Text>
        </ScrollView>
    );
}

Menu.propTypes = {
    onItemSelected: PropTypes.func.isRequired,
};