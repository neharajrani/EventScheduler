import * as ImagePicker from "expo-image-picker";

import { Button, TextInput as PaperTextInput } from "react-native-paper";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

const Details = ({ navigation }) => {
  const [heading, setHeading] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState();
  const [showTimePicker, setShowTimePicker] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveEvent = async () => {
    try {
      const id = new Date().getTime().toString();
      const newEvent = {
        id,
        heading,
        title,
        date: date.toDateString(),
        time: time.toTimeString(),
        image,
      };
      const existingEvents = await AsyncStorage.getItem("events");
      const events = existingEvents ? JSON.parse(existingEvents) : [];
      events.push(newEvent);
      await AsyncStorage.setItem("events", JSON.stringify(events));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const clearFields = () => {
    setHeading("");
    setTitle("");
    setDate(new Date());
    setTime(new Date());
    setImage(null);
  };

  return (
    <ScrollView style={styles.container}>
      <PaperTextInput
        label="Heading"
        value={heading}
        onChangeText={setHeading}
        style={styles.input}
      />
      <PaperTextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <View style={styles.picker}>
        <Button mode="outlined" onPress={() => setShowDatePicker(true)}>
          Pick Date
        </Button>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || date;
              setShowDatePicker(false);
              setDate(currentDate);
            }}
          />
        )}
      </View>
      <View style={styles.picker}>
        <Button mode="outlined" onPress={() => setShowTimePicker(true)}>
          + Pick Time
        </Button>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => {
              const currentTime = selectedTime || time;
              setShowTimePicker(false);
              setTime(currentTime);
            }}
          />
        )}
      </View>
      <Button
        textColor="black"
        buttonColor="white"
        mode="contained"
        onPress={pickImage}
        style={[styles.button, { borderWidth: 2 }]}>
        + Pick an Image
      </Button>
      {image && (
        <TextInput
          placeholder="Image selected"
          value={image}
          editable={false}
        />
      )}
      <Button mode="contained" onPress={saveEvent} style={styles.button}>
        Save Event
      </Button>
      <Button mode="outlined" onPress={clearFields} style={styles.button}>
        Clear Fields
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
  picker: {
    marginBottom: 16,
  },
});

export default Details;
