import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world</Text>
      <Link href={'./about.tsx'} style={{fontSize: 20, color: 'blue'}} >About</Link>
      <Link href={'./recipe.tsx'} style={{fontSize: 20, color: 'blue'}} >Recipe</Link>
      <Text style={{fontSize: 30, fontWeight: "bold"}}>List Recipe</Text>
      <Link href={'/recipe/1'} style={{fontSize: 20, color: 'blue'}} >Recipe 1</Link>
      <Link href={'/recipe/2'} style={{fontSize: 20, color: 'blue'}} >Recipe 2</Link>
      <Link href={'/recipe/3'} style={{fontSize: 20, color: 'blue'}} >Recipe 3</Link>
    </View>
  );
}
