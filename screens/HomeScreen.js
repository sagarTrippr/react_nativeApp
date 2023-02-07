
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Location from "expo-location"



const HomeScreen = ({ route, navigation }) => {
  const { user } = route.params;
  useEffect(() => {

    const getPermission = async () => {
      const { granted } = await Location.getForegroundPermissionsAsync()
      if (!granted) {
        console.log("location tracking denied")
        return
      }
      else {
        foregroundSubscrition = Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 15000
          },
          async (location) => {
           await fetch("https://native-backend.onrender.com/update", {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: user,
                coordinate:JSON.stringify(location.coords)
              })
            })
          }
        )
      }
    }
    getPermission()
  }, [])





  return (
    <View>
      <Text>hello and welcome to the APP</Text>
    </View>
  )
}

export default HomeScreen