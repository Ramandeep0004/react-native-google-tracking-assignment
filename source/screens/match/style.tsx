import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";
import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    conatainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    body: {
        marginHorizontal: hzp(18)
    },
    congratuContainer: {
        marginVertical: hp(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    congratulations: {
        fontFamily: Font.bold,
        fontSize: fp(46),
        color: colors.black
    },
    congratulations2: {
        marginTop: hp(10),
        fontFamily: Font.bold,
        fontSize: fp(44),
        color: colors.black
    },
    matchMian: {
        marginTop: hp(10),
        width: hp(150),
        transform: [{ rotate: '-3deg' }],
        height: hp(58),
        backgroundColor: colors.primary,
    },
    matchConatiner: {
        position: 'absolute',
        top: hp(10),
        left : hp(100)
    },
    match: {
        fontFamily: Font.bold,
        fontSize: fp(40),
        color: colors.white,
        width: hp(150),
        textAlign: 'center',
    },
    imagesRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: hp(30)
    },
    imageMain2: {
        height: hp(154),
        width: hp(154),
        borderRadius: hp(77),
        overflow: 'hidden',
        backgroundColor: colors.white,
        shadowColor: colors.primary,
        shadowOpacity: 0.9,
        elevation: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageMain: {
        height: hp(136),
        width: hp(136),
        borderRadius: hp(68),
        overflow: 'hidden'
    },
    nameConatiner: {
        marginVertical: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: hp(30)
    },
    name: {
        fontFamily: Font.bold,
        fontSize: fp(28),
        color: colors.black,
        letterSpacing: 0.4,
    },
    age: {
        marginTop: hp(3),
        fontFamily: Font.medium,
        fontSize: fp(24),
        color: colors.black,
    },
    detailContainer: {
        marginVertical: hp(30),
        marginHorizontal: hp(30)
    },
    detail: {
        fontFamily: Font.medium,
        fontSize: fp(20),
        textAlign: 'center',
        color: colors.textColor3,
    },
    buttonContainer: {
        marginTop: hp(120)
    },
    containerStyle: {
        borderRadius: wp(10),
        marginHorizontal: hp(15),
        elevation: 12,
        shadowOpacity: 0.9,
        shadowColor: colors.primary,
        justifyContent: 'center',
    },
    buttonStyle: {
        borderRadius: hp(24),
        paddingVertical: vp(26),
        paddingHorizontal: hzp(18),
        backgroundColor: colors.primary,
    },
    titleStyle: {
        color: colors.white,
        fontSize: fp(22),
        fontFamily: Font.bold,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
    },
    imageContainer: {
        height: hp(15),
        width: hp(15),
        borderRadius: hp(5),
        backgroundColor: colors.white,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 18,
    },
    image: {
        height: '100%',
        width: '100%'
    },
})