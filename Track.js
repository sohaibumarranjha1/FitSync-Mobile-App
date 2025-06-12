import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Track = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(null);
  const [stepCount, setStepCount] = useState(0);
  const [subscription, setSubscription] = useState(null);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const threshold = 1.2;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        setLoading(false);
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTracking = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        const totalForce = Math.sqrt(
          accelerometerData.x ** 2 +
          accelerometerData.y ** 2 +
          accelerometerData.z ** 2
        );
        if (totalForce > threshold) {
          setStepCount(prev => prev + 1);
        }
      })
    );
    Accelerometer.setUpdateInterval(300);
    setTimerRunning(true);
  };

  const stopTracking = () => {
    subscription?.remove();
    setSubscription(null);
    setTimerRunning(false);
  };

  const selectMode = (selectedMode) => {
    setMode(selectedMode);
    startTracking();
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!mode) {
    return (
      <View style={styles.modeContainer}>
        <Text style={styles.title}>Choose Your Mode</Text>
        <TouchableOpacity style={styles.modeButton} onPress={() => selectMode('Walking')}>
          <Text style={styles.modeText}>🚶‍♂️ Walking</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modeButton} onPress={() => selectMode('Jogging')}>
          <Text style={styles.modeText}>🏃‍♂️ Jogging</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.modeTitle}>{mode} Tracker</Text>
      <Text style={styles.info}>Steps: {stepCount}</Text>
      <Text style={styles.info}>Time: {Math.floor(time / 60)}m {time % 60}s</Text>

      {location && (
        <MapView
          style={styles.map}
          showsUserLocation={true}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="You're here"
          />
        </MapView>
      )}

      <TouchableOpacity style={styles.pauseButton} onPress={stopTracking}>
        <Text style={styles.buttonText}>⏸ Pause</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Track;

const styles = StyleSheet.create({
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modeContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  modeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
  },
  modeText: { color: '#fff', fontSize: 18 },
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#f9f9f9' },
  modeTitle: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18, marginVertical: 5 },
  map: {
    width: Dimensions.get('window').width * 0.9,
    height: 200,
    marginTop: 20,
    borderRadius: 15,
  },
  pauseButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
