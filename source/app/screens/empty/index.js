import { StatusBar, StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { colors } from '../../../assets/colors';
import { useIsFocused } from '@react-navigation/native';
import { Font } from '../../../assets/fontfamily';
import { fp } from '../../../assets/fontsize';


export const NoScreen = () => {
    return (
        <View style={styles.conatainer}>
            {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.transparent}
                        barStyle={"dark-content"}
                    />
                    :
                    null
            }
            <Text style={styles.noScreenText}>No Screen</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    noScreenText: {
        fontFamily: Font.medium,
        fontSize: fp(22),
        color: colors.black
    }
})