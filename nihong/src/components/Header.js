import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.carrier}>Carrier</Text>
        <Icon name="wifi" size={16} color="#FFFFFF" style={styles.icon} />
      </View>
      
      <Text style={styles.time}>7:16 PM</Text>
      
      <View style={styles.rightSection}>
        <View style={styles.battery}>
          <View style={styles.batteryLevel} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  carrier: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 5,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    padding: 1,
  },
  batteryLevel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
});

export default Header;