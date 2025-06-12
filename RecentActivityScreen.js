import { FlatList, StyleSheet, Text, View } from 'react-native';

const mockData = [
  { id: '1', type: 'Walking', duration: '25 mins', distance: '2.3 km' },
  { id: '2', type: 'Jogging', duration: '18 mins', distance: '3.1 km' },
  { id: '3', type: 'Running', duration: '12 mins', distance: '2.0 km' },
];

const RecentActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📈 Recent Activity</Text>

      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.activityCard}>
            <Text style={styles.activityType}>{item.type}</Text>
            <Text style={styles.details}>
              ⏱ {item.duration} | 📏 {item.distance}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecentActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#10B981',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  activityCard: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  activityType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  details: {
    marginTop: 6,
    fontSize: 14,
    color: '#9CA3AF',
  },
});
