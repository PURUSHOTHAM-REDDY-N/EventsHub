import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { React, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import RoundButton from "../../components/atoms/RoundButton";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import CustomButton from "../../components/atoms/CustomButton";
import { router } from 'expo-router';




export default function onboarding() {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet consectetur. Feugiat urna ultrices sodales ut malesuada hendrerit sit. Quam pretium Feugiat urna ultrices",
      animation: (
        <LottieView
        style={{ width: "100%", height: "60%", justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/slide1.json")}
          autoPlay
          loop
        />
      ),
    },
    {
      id: "2",
      text: "Lorem ipsum dolor sit amet consectetur. Feugiat urna ultrices sodales ut malesuada hendrerit sit. Quam pretium Feugiat urna ultrices",
      animation: (
        <LottieView
        style={{ width: "100%", height: "60%", justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/slide1.json")}
          autoPlay
          loop
        />
      ),
    },
    {
      id: "3",
      text: "Lorem ipsum dolor sit amet consectetur. Feugiat urna ultrices sodales ut malesuada hendrerit sit. Quam pretium Feugiat urna ultrices",
      animation: (
        <LottieView
        style={{ width: "100%", height: "60%", justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/slide1.json")}
          autoPlay
          loop
        />
      ),
    },
    {
      id: "4",
      text: "Lorem ipsum dolor sit amet consectetur. Feugiat urna ultrices sodales ut malesuada hendrerit sit. Quam pretium Feugiat urna ultrices",
      animation: (
        <LottieView
        style={{ width: "100%", height: "60%", justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/slide1.json")}
          autoPlay
          loop
        />
      ),
    },
    {
      id: "5",
      text: "Lorem ipsum dolor sit amet consectetur. Feugiat urna ultrices sodales ut malesuada hendrerit sit. Quam pretium Feugiat urna ultrices",
      animation: (
        <LottieView
        style={{ width: "100%", height: "60%", justifyContent: 'center', alignItems: 'center', }}
          source={require("../../../assets/animations/slide1.json")}
          autoPlay
          loop
        />
      ),
    },
  ];

  // Render each item in the flat list
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {item.animation}
      <Text  style={{ fontWeight: "500", fontSize: 18, textAlign: "center" }}>
        {item.text}
      </Text>
    </View>
  );

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const handleNext = () => {
    console.log(currentIndex);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* top buttons */}

      {currentIndex == data.length - 1 ? (
        <View 
        style={{
          alignItems: "flex-start",
          paddingHorizontal: 24,
        }}
      >
        <RoundButton
          onPress={handlePrevious}
          iconRight={
            <Ionicons
              name={"arrow-back-outline"}
              size={18}
              color={COLORS.white}
            />
          }
        />
      </View>
        
      ) : (
        <View
          style={{
            alignItems: "flex-end",
            paddingHorizontal: 24,
          }}
        >
          <Text
          onPress={ ()=>router.replace('screens/auth/login')}
            style={{ fontSize: 18, fontWeight: "500", color: COLORS.black }}
          >
            Skip
          </Text>
        </View>
      )}

      {/* Main Slider */}

      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          scrollEnabled={false}
          onMomentumScrollEnd={(event) => {
            const index = Math.floor(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            setCurrentIndex(index);
          }}
        />

        {/* bottom buttons */}

        {currentIndex == data.length - 1 ? (
          <View style={styles.buttonsContainer}>
            <CustomButton
            onPress={ ()=>router.replace('screens/auth/login')}
              style={{ borderRadius: 62 }}
              title={"Get started"}
            />
          </View>
        ) : (
          <View style={styles.buttonsContainer}>
            <RoundButton
              onPress={handlePrevious}
              iconRight={
                <Ionicons
                  name={"arrow-back-outline"}
                  size={18}
                  color={COLORS.white}
                />
              }
            />
            <RoundButton
              onPress={handleNext}
              iconRight={
                <Ionicons
                  name={"arrow-forward-outline"}
                  size={18}
                  color={COLORS.white}
                />
              }
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
let deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
    width: deviceWidth, // Adjust the width as per your design
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
  },
  paginationText: {
    fontWeight: "bold",
  },
});
