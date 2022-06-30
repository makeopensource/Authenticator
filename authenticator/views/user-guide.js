import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";
import step1 from "../assets/guide/step1.png"
import step2 from "../assets/guide/step2.png"
import step3 from "../assets/guide/step3.png"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    paddingBottom: 64,
  },
  instruction: {
    fontSize: 24,
    textAlign: "center",
  },
  image: {
    height: 256,
    width: 256,
    margin: 24,
  }
});

export default function UserGuide() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.instruction}>Step 1. Tap the add application button.</Text>
      <Image source={step1} style={styles.image} />
      <Text style={styles.instruction}>Step 2. Scan the QR code with your camera.</Text>
      <Image source={step2} style={styles.image} />
      <Text style={styles.instruction}>Step 3. Press the save button.</Text>
      <Image source={step3} style={styles.image} />
      <Text style={styles.instruction}>Step 4. View your codes on the home screen.</Text>
    </ScrollView>
  );
}
