const { StyleSheet } = require("react-native");
const { colors } = require("../../assets/colors");
const { hp, fp } = require("../../assets/fontsize");
const { Font } = require("../../assets/fontfamily");


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    tabMain: {
        backgroundColor: colors.white,
        borderTopLeftRadius: hp(24),
        borderTopRightRadius: hp(24),
        borderBottomStartRadius: 0,
        borderBottomRightRadius: 0,
        height: hp(80),
        paddingHorizontal: hp(5),
        borderTopWidth: 0,
        marginBottom: 0,
        marginHorizontal: 0,
        borderRadius: hp(15),
        paddingTop: hp(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    },
    tabBarLabel: {
        fontFamily: Font.regular,
        fontSize: fp(14),
        marginBottom: hp(15),
    },
    iconMain: {
        height: hp(32),
        width: hp(32),
        backgroundColor: colors.secondPrimary
    },
    iconMian: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(60),
        width: hp(60),
        marginBottom: hp(5),
        backgroundColor: '#f9731f',
        borderRadius: hp(16),
        shadowColor: colors.primary,
        shadowOpacity: 0.9,
        elevation: 5,
    },
    centreIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(95),
        width: hp(90),
        marginBottom: hp(5),
        backgroundColor: colors.white,
        borderRadius: hp(12),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    iconMian2: {
        height: hp(50),
        width: hp(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(10)
    }
});