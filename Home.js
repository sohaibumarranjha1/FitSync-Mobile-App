import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏋️‍♂️ FitSync Dashboard</Text>
      <Text style={styles.subtitle}>Choose an activity to get started</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Track')}
      >
        <Text style={styles.buttonText}>Start Tracking</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('RecentActivity')}
      >
        <Text style={styles.buttonText}>Recent Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10B981',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#10B981',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonSecondary: {
    backgroundColor: '#3B82F6',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
