import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import { Font } from "../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../assets/fontsize";


export const styles = StyleSheet.create({
    conatainer: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    body: {
        marginTop: hp(50)
    },
    NoMore: {
        fontFamily: Font.bold,
        fontSize: fp(28),
        color: '#1c2931',
        letterSpacing: 0.3
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        marginHorizontal: hp(20),
    },
    MainTittle: {
        flexDirection: 'row',
        marginTop: hp(50),
        marginBottom: hp(5),
        marginHorizontal: hp(40)
    },
    header: {
        textAlign: 'center',
        fontFamily: Font.medium,
        fontSize: fp(20),
        color: colors.white,
    },
    rate: {
        fontFamily: Font.bold,
        fontSize: fp(20),
        color: colors.white,
    },
    quentity: {
        marginTop : hp(3),
        fontFamily: Font.light,
        fontSize: fp(14),
        color: colors.white,
    },
    mainBody: {
        marginTop: hp(10),
        backgroundColor: colors.white,
        borderTopLeftRadius: hp(35),
        borderTopRightRadius: hp(35),
        paddingVertical: hp(20),
    },
    maiImage: {
        position: 'absolute',
        zIndex: 1,
        marginTop: hp(-90),
        marginHorizontal: hp(30)
    },
    imageContainer: {
        height: hp(155),
        width: hp(145),
        borderRadius: hp(18),
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
    // rowContainer : {
    //     borderWidth: 0,
    //     borderLeftWidth: 1,
    //     borderColor: colors.textColor3,
    //     paddingLeft : hp(30)
    // },
    rowOne: {
        flexDirection: 'row',
    },
    codeMina: {
        // paddingHorizontal: hp(0),
        // width : hp(100),
        // paddingVertical: hp(5),
        // backgroundColor: '#fde9df',
    },
    code: {
        marginTop: hp(3),
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
        fontFamily: Font.bold,
        fontSize: fp(20),
        color: colors.secondPrimary,
    },
    name2: {
        fontFamily: Font.bold,
        fontSize: fp(20),
        color: colors.secondPrimary,
    },
    link:{
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: '#347deb'
    },
    deatilContainer: {
        marginHorizontal: hzp(18)
    },
    detailRow: {
        marginVertical: hp(30),
        flexDirection: 'row',
    },
    text1: {
        marginHorizontal: hp(5),
        fontFamily: Font.light,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    text2: {
        marginHorizontal: hp(5),
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    resCodeContainer: {
        // marginVertical: hp(10)
    },
    resCodeMian: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.textColor3,
        borderStyle: "dashed",
        paddingVertical: hp(15)
    },
    code2: {
        marginTop: hp(3),
        width: hp(70),
        textAlign: 'center',
        borderRadius: hp(20),
        justifyContent: 'center',
        paddingHorizontal: hp(5),
        paddingVertical: hp(2),
        backgroundColor: '#fde9df',
        fontFamily: Font.regular,
        fontSize: fp(12),
        color: colors.primary,
    },
    rowThree: {
        marginVertical: hp(30),
        flexDirection: 'row',
        alignItems: 'center',
    },
    text3: {
        marginHorizontal: hp(5),
        fontFamily: Font.regular,
        fontSize: fp(18),
        color: colors.secondPrimary,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        marginLeft: hp(8),
        fontFamily: Font.regular,
        fontSize: fp(16),
        color: colors.primary,
    },
    mainRow: {
        // alignItems: 'center',
        justifyContent: 'center',
    },
    circulMain: {
        alignItems: 'center',
        //justifyContent: 'center',
    },
    circle: {
        height: hp(26),
        width: hp(26),
        borderRadius: hp(13),
        backgroundColor: colors.secondPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: vp(1.5),
    },
    statusColor: {
        backgroundColor: colors.primary
    },
    linestatusColor: {
        borderRightColor: colors.primary
    },
    line: {
        flexGrow: 1,
        width: 0.5,
        borderStyle: "dashed",
        backgroundColor: colors.primary,
        marginHorizontal: hp(2),
    },
    titte: {
        fontFamily: Font.medium,
        fontSize: fp(18),
        color: colors.secondPrimary,
    },
    time: {
        fontFamily: Font.medium,
        fontSize: fp(17),
        color: colors.secondPrimary,
    },
    iconsContainer: {
        marginTop: hp(8),
        paddingBottom: hp(30)
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(3)
    },
    date: {
        fontFamily: Font.light,
        fontSize: fp(15),
        color: colors.secondPrimary,
    }
})
