import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading === false ? (
        <ImageBackground
        imageStyle={{ opacity: 0.7}}
          source={WelcomeImage}
          style={[containerStyle.container, {width : "100%" ,height : "100%"}]}>
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
                borderColor: "black",
                backgroundColor: "yellow",
                borderWidth: 4,
                
                paddingHorizontal: 10,
                
                
              }}>
              EVENT
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#12f7ff",
                borderColor: "#12f7ff",
              backgroundColor: "black",
                borderWidth: 4,
                padding: 12,
                width: 233,
                marginTop:   5,
              }}>
              SCHEDULER APP
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "center" }}>
            <CustomButton title={"Get Started"}></CustomButton>
          </View>
        </ImageBackground>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
