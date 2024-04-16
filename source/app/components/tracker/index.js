import React from 'react'
import { Text, View } from 'react-native'
import { base } from '../../../assets/base'
import { Icon } from '@rneui/themed'
import { Icons, IconsType } from '../../../assets/icons'
import { colors } from '../../../assets/colors'
import { Dimension } from '../../../assets/dimension'
import { hp } from '../../../assets/fontsize'
import { styles } from './styles'


export default function TrakerComponent() {
    return (
        <View style={[base.row, styles.mainRow]}>
            <View style={[base.col2, styles.circulMain]}>
                <View style={[styles.circle, styles.statusColor]}>
                    <Icon
                        type={IconsType.material}
                        name={Icons.check2}
                        color={colors.white}
                        size={Dimension.medium}
                    />
                </View>
                <View style={[styles.line]} /><View />
            </View>
            <View style={[base.col10]}>
                <View style={base.row}>
                    <View style={base.col8}>
                        <Text style={styles.titte}>Dispetpo Ola pento</Text>
                    </View>
                    <View style={[base.col4, { alignItems: 'flex-end' }]}>
                        <Text style={styles.time}>08.56</Text>
                    </View>
                </View>
                <View style={styles.iconsContainer}>
                    <View style={[styles.timeRow]}>
                        <View style={[base.col1, { alignItems: 'flex-start' }]}>
                            <Icon
                                type={IconsType.antDesign}
                                name={Icons.calendar}
                                color={colors.primary}
                                size={Dimension.medium}
                            />
                        </View>
                        <View style={[base.col11]}>
                            <Text style={styles.date}>19 Augest 2023</Text>
                        </View>
                    </View>
                    <View style={[styles.timeRow]}>
                        <View style={[base.col1]}>
                            <Icon
                                type={IconsType.octIcon}
                                name={Icons.location2}
                                color={colors.primary}
                                size={hp(18)}
                            />
                        </View>
                        <View style={[base.col11]}>
                            <Text style={styles.date}> Los Angles, USA</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
