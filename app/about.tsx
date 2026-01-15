import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const AboutScreen = () => {
  return (
    <View>
      <Text>Ini halaman about</Text>
      <Link href={'/'} style={{fontSize: 20, color: 'blue'}} >Home</Link>
    </View>
  );
};

export default AboutScreen;