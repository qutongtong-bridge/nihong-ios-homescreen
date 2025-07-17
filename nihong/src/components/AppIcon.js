import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const AppIcon = ({ app, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: app.backgroundColor }]}>
        {app.icon && typeof app.icon === 'string' ? (
          <Image source={{ uri: app.icon }} style={styles.icon} />
        ) : (
          <View style={[styles.icon, styles.placeholderIcon]} />
        )}
        {app.subtitle && (
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{app.subtitle}</Text>
          </View>
        )}
      </View>
      <Text style={styles.appName} numberOfLines={1}>
        {app.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 74,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  placeholderIcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
  },
  appName: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '400',
  },
  subtitleContainer: {
    position: 'absolute',
    bottom: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 3,
  },
  subtitle: {
    fontSize: 8,
    color: '#000000',
    fontWeight: '600',
  },
});

export default AppIcon;