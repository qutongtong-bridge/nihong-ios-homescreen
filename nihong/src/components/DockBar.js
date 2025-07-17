import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { BlurView } from '@react-native-community/blur';
import AppIcon from './AppIcon';

const DockBar = ({ apps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.blurView}>
        <View style={styles.dockContent}>
          {apps.map((app) => (
            <AppIcon
              key={app.id}
              app={app}
              onPress={() => console.log(`Pressed ${app.name}`)}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  blurView: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(20px)',
  },
  dockContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default DockBar;