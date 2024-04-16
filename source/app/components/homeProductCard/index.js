import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { base } from '../../../assets/base'
import { hp, wp } from '../../../assets/fontsize'
import { Text } from 'react-native'
import { Icon, Slider } from '@rneui/themed'
import { colors } from '../../../assets/colors'
import { Icons, IconsType } from '../../../assets/icons'


function HomeProductComponent(props) {
    const { item } = props
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.navigate('product_detail')}
        >
            <View style={styles.mainTag}>
                <View style={styles.firstRow}>
                    <View style={base.col2}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <View style={[base.col5, { marginLeft: hp(15) }]}>
                        <View style={styles.codeMina}>
                            <Text style={styles.code} numberOfLines={1}>PS1990YZX</Text>
                        </View>
                        <Text style={styles.name1}  >Katcus Slukent</Text>
                        <Text style={styles.name2} numberOfLines={1}>Familiea Cordata</Text>
                    </View>
                    <View style={[base.col5, styles.rateWraper]}>
                        <Text style={styles.rate}>Rp 120,123</Text>
                        <Text style={styles.quentity}>Qty : 2 Pack</Text>
                    </View>
                </View>
                <Slider
                    value={item.sliderValue}
                    onValueChange={() => ''}
                    maximumValue={50}
                    minimumValue={20}
                    step={1}
                    style={styles.sliderMian}
                    trackStyle={styles.trackStyle}
                    thumbStyle={styles.sliderThumbStyle}
                    maximumTrackTintColor={'transparent'}
                    minimumTrackTintColor={colors.primary}
                />
                <View style={styles.roewTwo}>
                    <View style={base.col4}>
                        <View style={styles.bottomRow1st}>
                            <View style={base.col3}>
                                <View style={styles.iconMain}>
                                    <Icon
                                        type={IconsType.materialCommunity}
                                        name={Icons.busSchool}
                                        color={colors.primary}
                                        size={hp(16)}
                                    />
                                </View>
                            </View>
                            <View style={base.col7}>
                                <Text style={styles.iconText} numberOfLines={1}>Bandung</Text>
                                <Text style={styles.iconText2} numberOfLines={1}>JABAR</Text>
                            </View>
                            <View style={base.col2}>
                                <View style={styles.iconMain2}>
                                    <Icon
                                        type={IconsType.fontAwesome}
                                        name={Icons.caretRight}
                                        color={colors.secondPrimary}
                                        size={hp(18)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={base.col4}>
                        <View style={styles.bottomRow2nd}>
                            <View style={[base.col5, styles.flexEndAlign]}>
                                <View style={styles.iconMain}>
                                    <Icon
                                        type={IconsType.ionIcon}
                                        name={Icons.iosLocation}
                                        color={colors.primary}
                                        size={hp(14)}
                                    />
                                </View>
                            </View>
                            <View style={base.col7}>
                                <Text style={styles.iconText} numberOfLines={1}>Kletan</Text>
                                <Text style={styles.iconText2} numberOfLines={1}>NAHAR</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[base.col4]}>
                        <View style={styles.bottomRow3rd}>
                            <View style={[base.col8, styles.flexEndAlign]}>
                                <Text style={styles.iconText3} numberOfLines={1}>Bandung</Text>
                            </View>
                            <View style={[base.col4, styles.flexEndAlign]}>
                                <View style={[styles.iconMain, { backgroundColor: colors.primary }]}>
                                    <Icon
                                        type={IconsType.fontAwesome5}
                                        name={Icons.check2}
                                        color={colors.white}
                                        size={hp(14)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default HomeProductComponent
