import { Text, View, StyleSheet, Image, Button } from "react-native";

import { PostImage, PostNavigationImageProps, RootStackParams } from "../../types";
import { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TodayImage: FunctionComponent<PostImage> = ({ date, title, url, explanation }) => {

  const {navigate} = useNavigation<PostNavigationImageProps>()

  const handlePressView = () => {
    navigate('Detail', {title, date, url, explanation})
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handlePressView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(38 57 127)",
    marginVertical: 16,
    borderRadius: 30,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default TodayImage;
