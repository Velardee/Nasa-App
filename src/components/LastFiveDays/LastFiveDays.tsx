import { format, sub } from "date-fns";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageType } from "../../types";
import fetchApi from "../../utils/fetch";
import PostImage from "../PostImage";

const LastFiveDays = () => {
  const [lastFiveDays, setlastFiveDays] = useState<PostImageType[]>([]);

  useEffect(() => {
    loadLast5Images().catch(null);
  }, []);

  const loadLast5Images = async () => {
    try {
      const date = new Date();
      const todayDate = format(date, "yyyy-MM-dd");
      const fiveDaysAgo = format(sub(date, { days: 4 }), "yyyy-MM-dd");

      const last5DaysResponse = await fetchApi(
        `&start_date=${fiveDaysAgo}&end_date=${todayDate}`
      );

      setlastFiveDays(last5DaysResponse);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {lastFiveDays?.map((image) => (
          <PostImage key={`post-image-${image.title}`} {...image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 18,
  },
  content: {},
});

export default LastFiveDays;
