
import { Image } from '@rneui/themed';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, Linking, Platform, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Text } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Font } from '../../assets/fontfamily';
import { fp, hp } from '../../assets/fontsize';
import { Images } from '../../assets/images';
import Geolocation from 'react-native-geolocation-service';



const TrackingOrder = () => {
    let markers = [{
        title: 'hello',
        image: 'https://content.jdmagicbox.com/comp/ludhiana/c5/0161px161.x161.211006154440.j5c5/catalogue/aykai-hospital-chandigarh-road-ludhiana-hospitals-ay0vjrhajz.jpg?clr=',
        coordinates: {
            latitude: 30.917004,
            longitude: 75.894699
        },
    },
    {
        title: 'hello',
        image: 'https://thumbs.dreamstime.com/z/beautiful-image-vishwakarma-chowk-ludhiana-punjab-india-204085403.jpg',
        coordinates: {
            latitude: 30.932747,
            longitude: 75.837418
        },
    },
    {
        title: 'Bus stand',
        image: 'https://live.staticflickr.com/4402/36370159814_eda5fbb716_b.jpg',
        coordinates: {
            latitude: 30.908058,
            longitude: 75.854263
        },
    }
    ]

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [fullAddress, setFulladdress] = useState(null);


    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        let lat = position && position.coords && position.coords.latitude
                        let lng = position && position.coords && position.coords.longitude
                        getFullLocationDetails(lat, lng)
                        setSelectedLocation(position)
                    },
                    error => {
                        // See error code charts below.
                        console.log("code : -", error.code, '----ERROR-----------> ', error.message);
                        setSelectedLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
    };


    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };


    const handleMapPress = (event) => {
        let selctedLocationlatlng = null
        const { latitude, longitude } = event.nativeEvent.coordinate;
        const data = event.nativeEvent.coordinate;
        selctedLocationlatlng = {
            coords: {
                latitude: data && data.latitude ? data.latitude : null,
                longitude: data && data.longitude ? data.longitude : null
            }
        }
        setSelectedLocation(selctedLocationlatlng)
        getFullLocationDetails(latitude, longitude);
    };



    const getFullLocationDetails = async (latitude, longitude) => {
        // const apiKey = 'AIzaSyBmvyVhGnhUSZjg28QxdTkioXSbgqqapY4';
        // const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (response.ok) {
                setFulladdress({
                    address: data.address,
                    addressName: data.display_name,
                    addresstype: data.addresstype,
                    type: data.type
                });
            } else {
                console.error('Error:', data.status);
                setFulladdress(null)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    console.log(fullAddress, '------------------------ fullAddress');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => getLocation()}
                    style={{ paddingTop: 40, backgroundColor: 'lightgray' }}
                >
                    <Text>{fullAddress ? "Save Address" : "Select Location"}</Text>
                </TouchableOpacity>

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
                    null
                }
                {/* <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: selectedLocation ? selectedLocation.latitude : '',
                            longitude: selectedLocation ? selectedLocation.longitude : '',
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        onPress={handleMapPress}
                    // customMapStyle={mapStyle}
                    > */}
                {/* <Marker coordinate={selectedLocation} /> */}
                {/* {
                            markers.map((item, i) => {
                                return (

                                    <Marker
                                        key={i}
                                        draggable
                                        coordinate={item.coordinates}
                                        // onDragEnd={
                                        // //   (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                                        // }
                                        title={item.title}
                                        description={'Ludhiana'}
                                    >
                                        <View style={styles.imageMian}>
                                            <View style={styles.imageContainer}>
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={styles.image}
                                                />
                                            </View>
                                        </View>
                                    </Marker>
                                )
                            })
                        } */}
                {/* <MapViewDirections
                        origin={markers[0].coordinates}
                        destination={markers[1].coordinates}
                        apikey={'AIzaSyB6vCiOeUs5M1ofzj--A21ad6lnbKQdOzY'} // insert your API Key here
                        strokeWidth={4}
                        strokeColor="#111111"
                    /> */}
                {/* </MapView> */}
                {/* <View style={styles.locationdetail}>
                        <View style={styles.locationMain}>
                            <View style={base.col3}>
                                <View style={styles.locationImageMian}>
                                    <Image
                                        source={{ uri: 'https://plus.unsplash.com/premium_photo-1675864662211-b60c700a0123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                        style={styles.image}
                                    />
                                </View>
                            </View>
                            <View style={[base.col9, {alignItems : 'flex-start'}]}>
                                <Text style={styles.text3} numberOfLines={1}>Estimasi</Text>
                                <Text style={styles.text4} numberOfLines={1}>24 jun - 28 jun</Text>
                            </View>
                        </View>
                    </View> */}
            </View>
            <View style={styles.body}>
                <View style={styles.rowOne}>
                    <View style={base.col5}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('TrackingOrder')}>
                            <View style={styles.maiImage}>
                                <View style={styles.imageContainer2}>
                                    <Image
                                        source={{ uri: 'https://plus.unsplash.com/premium_photo-1675864662211-b60c700a0123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                        style={styles.image}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[base.col7, { marginLeft: hp(8) }, { marginTop: hp(-180) }]}>
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
        </SafeAreaView>
    );
};


export default TrackingOrder;
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    mapContainer: {
        flex: 1
    },
    mapStyle: {
        height: hp(650),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 18,
    },
    imageMian: {
        height: hp(46),
        width: hp(46),
        borderRadius: hp(23),
        justifyContent: 'center',
        alignItems: 'center',
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
    imageContainer: {
        height: hp(40),
        width: hp(40),
        borderRadius: hp(20),
        backgroundColor: colors.white,
        overflow: 'hidden',
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
    maiImage: {
        position: 'absolute',
        zIndex: 1,
        marginTop: hp(-260),
        marginHorizontal: hp(30)
    },
    codeMina: {
        // paddingHorizontal: hp(0),
        // width : hp(100),
        // paddingVertical: hp(5),
        // backgroundColor: '#fde9df',
    },
    code: {
        marginTop: hp(6),
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
    deatilConatiner: {
        marginTop: hp(-70)
    },
    detailRow: {
        // marginVertical: hp(30),
        marginHorizontal: hp(25),
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
    locationdetail: {
        position: 'absolute',
        top: 300,
        left: 95,
        right: 95
    },
    locationMain: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(5),
        paddingHorizontal: hp(5),
        borderRadius: hp(30)
    },
    locationImageMian: {
        height: hp(40),
        width: hp(40),
        borderRadius: hp(20),
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    text4: {
        marginHorizontal: hp(5),
        fontFamily: Font.light,
        fontSize: fp(16),
        color: colors.white,
    },
    text3: {
        marginHorizontal: hp(5),
        fontFamily: Font.medium,
        fontSize: fp(16),
        color: colors.white,
    },
});