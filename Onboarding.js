// screens/Onboarding.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/onboarding.png')} // Make sure this image exists
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to FitSync</Text>

      <Text style={styles.subtitle}>
        Track your fitness activity and stay motivated with real-time data and achievements.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>@ made by Sohaib</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: '#888',
  },
});
