import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [isStressed, setIsStressed] = useState(false);

  const handleToggle = () => {
    setIsStressed(!isStressed);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 1. Header Section */}
        <View style={styles.header}>
          <Text style={styles.appName}>ManasSakhi</Text>
          <Text style={styles.subtitle}>Your mind's quiet companion</Text>
          <Text style={styles.malayalamSubtitle}>മനസ്സാഖി</Text>
        </View>

        {/* 2. Status Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>CURRENT STATE</Text>
          <Text style={styles.cardValue}>
            {isStressed ? '🟠 Stressed' : '🟢 Calm'}
          </Text>
          <Text style={styles.cardMessage}>
            {isStressed ? 'Noticing some tension.' : 'Everything looks steady.'}
          </Text>
        </View>

        {/* 3. Demo Toggle Button */}
        <TouchableOpacity 
          style={styles.button}
          onPress={handleToggle}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {isStressed ? 'Reset to Calm' : 'Simulate Stress'}
          </Text>
        </TouchableOpacity>

        {/* 4. Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>🔒 On-device processing • Privacy first</Text>
        </View>

        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  appName: {
    color: '#4DB5B5',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888888',
    fontSize: 14,
    marginTop: 4,
  },
  malayalamSubtitle: {
    color: '#888888',
    fontSize: 10,
    marginTop: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    width: '90%',
    alignItems: 'center',
    marginBottom: 40,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 5,
      },
      web: {
        // @ts-ignore
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }
    }),
  },
  cardLabel: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  cardValue: {
    color: '#333333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardMessage: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF8B78',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginBottom: 60,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 40 : 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#AAAAAA',
    fontSize: 12,
  },
});
