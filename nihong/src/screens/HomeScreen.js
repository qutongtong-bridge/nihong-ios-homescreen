import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import AppGrid from '../components/AppGrid';
import DockBar from '../components/DockBar';
import PageIndicator from '../components/PageIndicator';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const apps = [
    {
      id: 'watch',
      name: 'Watch',
      icon: null,
      backgroundColor: '#1C1C1E',
    },
    {
      id: 'contacts',
      name: 'Contacts',
      icon: null,
      backgroundColor: '#E5E5EA',
    },
    {
      id: 'files',
      name: 'Files',
      icon: null,
      backgroundColor: '#007AFF',
    },
    {
      id: 'shortcuts',
      name: 'Shortcuts',
      icon: null,
      backgroundColor: '#2C2C2E',
    },
    {
      id: 'freeform',
      name: 'Freeform',
      icon: null,
      backgroundColor: '#FFFFFF',
    },
    {
      id: 'myburago',
      name: 'Myブラゴ',
      icon: null,
      backgroundColor: '#00C853',
      subtitle: 'STAGING',
    },
    {
      id: 'evcharge',
      name: 'evcharge',
      icon: null,
      backgroundColor: '#FF6D00',
      subtitle: 'STAGING',
    },
  ];

  const dockApps = [
    {
      id: 'safari',
      name: 'Safari',
      icon: null,
      backgroundColor: '#007AFF',
    },
    {
      id: 'messages',
      name: 'Messages',
      icon: null,
      backgroundColor: '#00C853',
    },
  ];

  return (
    <View style={[styles.container, styles.gradientBackground]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Header />
        
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <AppGrid apps={apps} />
        </ScrollView>

        <View style={styles.bottomSection}>
          <PageIndicator currentPage={0} totalPages={2} />
          <DockBar apps={dockApps} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    background: 'linear-gradient(135deg, #2196F3 0%, #00BCD4 25%, #4CAF50 50%, #FF9800 75%, #2196F3 100%)',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
});

export default HomeScreen;