import { Image } from '@rneui/themed';
import { View, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Text } from 'react-native-ui-lib';
import { base } from '../../../assets/base';
import { useIsFocused } from '@react-navigation/native';
import { colors } from '../../../assets/colors';
import { styles } from './style';
import { MatchScreenFunctions } from './functions';
import Loader from '../../../helpers/loader';


const TrackingOrder = () => {
    const {
        loader,
        selectedLocation,
        fullAddress,
        handleMapPress
    } = MatchScreenFunctions();


    // console.log(fullAddress, '------------------------ fullAddress');
    return (
        <View style={styles.main}>
            {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.transparent}
                        barStyle={"dark-content"}
                    />
                    :
                    null
            }
            <View style={styles.mapContainer}>
                {selectedLocation ?
                    <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: selectedLocation.coords.latitude,
                            longitude: selectedLocation.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onPress={handleMapPress}
                    >
                        <Marker coordinate={selectedLocation.coords} />
                    </MapView>
                    :
                    !loader ?
                        <View style={styles.emptyLoaction}>
                            <Text style={styles.emptyLocationText}>No Location Found</Text>
                        </View>
                        :
                        null
                }
            </View>
            <View style={styles.body}>
                <View style={styles.rowOne}>
                    <View style={base.col5}>
                        <View style={styles.maiImage}>
                            <View style={styles.imageContainer2}>
                                <Image
                                    source={{ uri: 'https://plus.unsplash.com/premium_photo-1675864662211-b60c700a0123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[base.col7, styles.titileMain]}>
                        <Text style={styles.name1} numberOfLines={1}>Suelent Rare -</Text>
                        <Text style={styles.name2} numberOfLines={1}>New Familiea Cord</Text>
                        <View style={styles.codeMina}>
                            <Text style={styles.code}>PS1990YZX</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.deatilConatiner}>
                    <View style={styles.detailRow}>
                        <View style={base.col3}>
                            <Text style={styles.text1} numberOfLines={1}>Berat Kotor</Text>
                            <Text style={styles.text2} numberOfLines={1}>2.56 Kg</Text>
                        </View>
                        <View style={base.col3}>
                            <Text style={styles.text1} numberOfLines={1}>Jenis</Text>
                            <Text style={styles.text2} numberOfLines={1}>Tamamam</Text>
                        </View>
                        <View style={base.col6}>
                            <Text style={styles.text1} numberOfLines={1}>Estimasi</Text>
                            <Text style={styles.text2} numberOfLines={1}>24 jun - 28 jun</Text>
                        </View>
                    </View>
                </View>
            </View>
            {loader ? <Loader loader={loader} /> : null}
        </View>
    );
};


export default TrackingOrder;
