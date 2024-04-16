import { StyleSheet } from "react-native";
import { Font } from "../../../assets/fontfamily";
import { fp, hp, vp } from "../../../assets/fontsize";
import { colors } from "../../../assets/colors";


export const styles = StyleSheet.create({
    mainRow: {
        justifyContent: 'center',
    },
    circulMain: {
        alignItems: 'center',
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
    },
    flexAlignEnd : {
        alignItems : 'flex-end'
    }
})
