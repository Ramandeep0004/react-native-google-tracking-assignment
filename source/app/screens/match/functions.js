const { useEffect, useState } = require("react");
import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export const MatchScreenFunctions = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [fullAddress, setFulladdress] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getLocation();
    }, []);


    const getLocation = () => {
        const result = requestLocationPermission();
        if (result) {
            result.then(res => {
                console.log('res is:', res);
                if (res) {
                    Geolocation.getCurrentPosition(
                        position => {
                            let lat = position && position.coords && position.coords.latitude
                            let lng = position && position.coords && position.coords.longitude
                            getFullLocationDetails(lat, lng)
                            setSelectedLocation(position)
                            setLoader(false);
                        },
                        error => {
                            // See error code charts below.
                            console.log("code : -", error.code, '----ERROR-----------> ', error.message);
                            setSelectedLocation(false);
                            setLoader(false);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                    );
                }
            });
        }
        else {
            setLoader(false);
        }
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
                setLoader(true);
                return true;
            } else {
                console.log('You cannot use Geolocation');
                setLoader(true);
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


    return{
        loader,
        selectedLocation,
        fullAddress,
        handleMapPress
    }
}