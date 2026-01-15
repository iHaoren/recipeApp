import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RecipeScreen = () => {
  return (
    <View>
      <Text>This is screen page</Text>
      <Link href={'/'} style={{fontSize: 20, color: 'blue'}} >Home</Link>
    </View>
  )
}

export default RecipeScreen;