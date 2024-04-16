import { StyleSheet } from "react-native";
import { fp, hp, hzp, wp } from "../../../assets/fontsize";
import { colors } from "../../../assets/colors";
import { Font } from "../../../assets/fontfamily";



export const styles = StyleSheet.create({
    mainTag: {
        flexGrow: 1,
        minHeight: hp(140),
        marginTop :hp(2),
        marginBottom: hp(12),
        marginHorizontal: hp(4),
        borderRadius: hp(5),
        backgroundColor: colors.white,
        overflow: 'hidden',
        shadowColor: colors.textColor,
        shadowOpacity: 0.9,
        elevation: 5,
    },
    firstRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        height: hp(66),
        width: hp(66),
        borderRadius: hp(10),
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    codeMina: {
        flexDirection: 'row',
    },
    code: {
        justifyContent: 'center',
        paddingHorizontal: hp(6),
        paddingVertical: hp(3),
        backgroundColor: '#fde9df',
        fontFamily: Font.bold,
        fontSize: fp(10),
        color: colors.primary,
    },
    name1: {
        marginTop: hp(3),
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
        letterSpacing: 0.3
    },
    name2: {
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
        letterSpacing: 0.3
    },
    rateWraper: {
        alignItems: 'center',
    },
    rate: {
        marginRight: wp(12),
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    quentity: {
        marginRight: wp(12),
        fontFamily: Font.light,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    sliderMian: {
        marginVertical: hp(10),
        height: hp(5)
    },
    trackStyle: {
        height: 0.8,
        backgroundColor: colors.primary
    },
    sliderThumbStyle: {
        height: hp(8),
        width: hp(8),
        backgroundColor: colors.primary
    },
    roewTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(16),
    },
    iconMain: {
        height: hp(22),
        width: hp(22),
        borderRadius: hp(11),
        backgroundColor: colors.white,
        borderWidth: 0.3,
        borderColor: colors.primary,
        elevation: 5,
        shadowOpacity: 0.9,
        shadowColor: colors.textColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconMain2: {
        height: hp(24),
        width: hp(24),
        borderRadius: hp(12),
        backgroundColor: colors.white,
        elevation: 5,
        shadowOpacity: 0.9,
        shadowColor: colors.textColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        fontFamily: Font.medium,
        fontSize: fp(15),
        color: colors.secondPrimary,
    },
    iconText2: {
        fontFamily: Font.regular,
        fontSize: fp(10),
        color: colors.secondPrimary,
    },
    iconText3: {
        fontFamily: Font.regular,
        fontSize: fp(15),
        color: colors.secondPrimary,
    },
    bottomRow1st: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal: hzp(-4),
    },
    bottomRow2nd: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomRow3rd: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexStartAlign: {
        alignItems: 'flex-start'
    },
    flexEndAlign: {
        alignItems: 'flex-end'
    }
})