import { Button, Card, Paragraph, Title } from "react-native-paper";
import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadEvents();
    });
    return unsubscribe;
  }, [navigation]);

  const loadEvents = async () => {
    try {
      const events = await AsyncStorage.getItem("events");
      if (events !== null) {
        setEvents(JSON.parse(events));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.heading}</Title>
        <Paragraph>{item.title}</Paragraph>
        <Paragraph>
          {item.date} - {item.time}
        </Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button mode="contained" onPress={() => navigation.navigate("Details")}>
        Create Event
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default Home;
