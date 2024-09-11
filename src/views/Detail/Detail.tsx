import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";

const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)",
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: "rgb(38 57 127)",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Detail;
