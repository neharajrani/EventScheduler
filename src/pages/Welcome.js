import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={WelcomeImage}
        style={[containerStyle.container, {}]}>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "yellow",
              paddingHorizontal: 10,
            }}>
            EVENT
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#fff",
              borderColor: "yellow",
              borderWidth: 2,
              padding: 12,
              width: 233,
            }}>
            SCHEDULER APP
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            navigation={navigation}
            title={"Get Started"}></CustomButton>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
