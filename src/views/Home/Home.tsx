import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

import TodayImage from "../../components/TodayImage";
import { PostImage } from "../../types";
import fetchApi from "../../utils/fetch";
import { format, sub } from "date-fns";
import LastFiveDays from "../../components/LastFiveDays";

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error(error);
        setTodayImage({});
      }
    };

    loadTodayImage().catch(null);
  }, []);


  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      <LastFiveDays />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7, 26, 93, 255)"
  },
});

export default Home;
