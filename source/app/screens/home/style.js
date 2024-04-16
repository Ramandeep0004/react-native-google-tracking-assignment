import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";
import { Font } from "../../../assets/fontfamily";
import { fp, hp, hzp, wp } from "../../../assets/fontsize";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondPrimary,
    },
    containerHeader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: hp(30),
    },
    header: {
        fontFamily: Font.medium,
        fontSize: fp(34),
        color: colors.white,
        letterSpacing: 0.3
    },
    mainBody: {
        flex: 4,
        backgroundColor: colors.white,
        borderTopLeftRadius: hp(35),
        borderTopRightRadius: hp(35),
    },
    searchConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: hp(20),
        marginVertical: hp(20)
    },
    inputContainerStyle: {
        height: hp(45),
        borderRadius: hp(40),
        backgroundColor: colors.white,
        paddingHorizontal: wp(10),
        elevation: 8,
        borderWidth: 0,
        borderBottomWidth: 0,
        shadowOpacity: 0.9,
        shadowColor: colors.textColor2,
    },
    inputStyle: {
        height: hp(44),
        fontSize: fp(16),
        fontFamily: Font.regular,
        color: colors.secondPrimary,
    },
    filter: {
        marginLeft: hp(6),
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    flatlist: {
        flex: 1,
    },
    flatContentContainer: {
        flexGrow: 1,
        marginHorizontal: hp(20),
        paddingBottom:hp(26)
    },
    mainTag: {
        height: hp(140),
        marginTop: hp(10),
        marginBottom: hp(10),
        marginHorizontal: hp(8),
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
        // paddingHorizontal: hp(0),
        // width : hp(100),
        // paddingVertical: hp(5),
        // backgroundColor: '#fde9df',
    },
    code: {
        width: hp(70),
        justifyContent: 'center',
        paddingHorizontal: hp(5),
        paddingVertical: hp(2),
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
    rate: {
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    quentity: {
        fontFamily: Font.light,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    sliderMian: {
        marginVertical: hp(10),
        height: hp(5)
    },
    roewTwo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(15),
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
    }
})