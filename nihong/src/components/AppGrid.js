import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import AppIcon from './AppIcon';

const { width } = Dimensions.get('window');
const ICON_SIZE = 60;
const ICON_MARGIN = 20;
const COLUMNS = 4;

const AppGrid = ({ apps }) => {
  const renderApp = ({ item }) => (
    <AppIcon
      app={item}
      onPress={() => console.log(`Pressed ${item.name}`)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={apps}
        renderItem={renderApp}
        keyExtractor={(item) => item.id}
        numColumns={COLUMNS}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});

export default AppGrid;