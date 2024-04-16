import { colors } from "../../../assets/colors";
import { Font } from "../../../assets/fontfamily";
import { fp, hp } from "../../../assets/fontsize";
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    mapContainer: {
        flex: 4.3,
        backgroundColor: colors.white
    },
    body: {
        flex: 1.3,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 18,
    },
    mapStyle: {
        height: "100%",
        width: '100%',
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
    imageContainer2: {
        height: hp(165),
        width: hp(142),
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
    titileMain: {
        marginLeft: hp(8),
        marginTop: hp(20)
    },
    maiImage: {
        zIndex: 1,
        marginTop: hp(-60),
        marginHorizontal: hp(30)
    },
    codeMina: {
        flexDirection: 'row'
    },
    code: {
        marginTop: hp(6),
        justifyContent: 'center',
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
    deatilConatiner: {
        marginTop: hp(15)
    },
    detailRow: {
        marginHorizontal: hp(30),
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
    emptyLoaction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyLocationText: {
        fontFamily: Font.medium,
        fontSize: fp(22),
        color: colors.black,
    }
});