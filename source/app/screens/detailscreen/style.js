import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";
import { Font } from "../../../assets/fontfamily";
import { fp, hp, hzp, vp, wp } from "../../../assets/fontsize";


export const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    topContainer: {
        flex: 1,
    },
    containerHeader: {
        flexDirection: 'row',
        marginHorizontal: hp(20),
        marginTop: hp(44)
    },
    MainTittle: {
        flexDirection: 'row',
        marginTop: hp(36),
        marginBottom: hp(5),
        marginHorizontal: hp(40)
    },
    header: {
        textAlign: 'center',
        fontFamily: Font.medium,
        fontSize: fp(22),
        color: colors.white,
    },
    rate: {
        fontFamily: Font.bold,
        fontSize: fp(20),
        color: colors.white,
    },
    quentity: {
        marginTop: hp(3),
        fontFamily: Font.light,
        fontSize: fp(14),
        color: colors.white,
    },
    mainBody: {
        flex: 4,
        backgroundColor: colors.white,
        borderTopLeftRadius: hp(35),
        borderTopRightRadius: hp(35),
        paddingVertical: hp(10),
    },
    maiImage: {
        zIndex: 1,
        marginTop: hp(-78),
        marginHorizontal: hp(28)
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
    rowOne: {
        flexDirection: 'row',
    },
    code: {
        marginTop: hp(3),
        paddingHorizontal: hp(6),
        paddingVertical: hp(3),
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
    link: {
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: '#347deb'
    },
    deatilContainer: {
        marginHorizontal: hp(20)
    },
    detailRow: {
        marginVertical: hp(24),
        flexDirection: 'row',
    },
    text1: {
        fontFamily: Font.light,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    text2: {
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.secondPrimary,
    },
    resCodeMian: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.textColor3,
        borderStyle: "dashed",
        paddingVertical: hp(14)
    },
    code2: {
        textAlign: 'center',
        borderRadius: hp(20),
        justifyContent: 'center',
        paddingHorizontal: hp(14),
        paddingVertical: hp(3),
        backgroundColor: '#fde9df',
        fontFamily: Font.regular,
        fontSize: fp(12),
        color: colors.primary,
    },
    rowThree: {
        marginVertical: hp(24),
        flexDirection: 'row',
        alignItems: 'center',
    },
    text3: {
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
    flatList: {
        flexGrow: 1,
    },
    flatListConentContainer: {
        flexGrow: 1,
        paddingBottom: hp(340)
    },
    flexAlignEnd: {
        alignItems: 'flex-end'
    }
})
