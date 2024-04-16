import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { colors } from '../assets/colors';


const Loader = ({ loader }) => {
    const renderLoader = () => {
        if (loader) {
            return (
                <View style={styles.background}>
                    <SkypeIndicator size={60} color={colors.secondary} />
                    {/* <ActivityIndicator size={40} color={colors.secondary} animating={true}/> */}
                </View>
            );
        } else {
            return null;
        }
    };

    return renderLoader();
};

const styles = StyleSheet.create({
    background: {
        top: 0,
        left: 0,
        flex: 1,
        right: 0,
        bottom: 0,
        opacity: 0.7,
        zIndex: 9999,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: colors.offwhite,
        justifyContent: 'center',
        overflow: 'hidden',
    },
});

export default Loader;
