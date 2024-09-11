import { FunctionComponent } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { PostImage as PostImageType, PostNavigationImageProps, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

 
const PostImage: FunctionComponent<PostImageType> = ({ date, title, url, explanation }) => {
    const {navigate} = useNavigation<PostNavigationImageProps>()

    const handlePressView = () => {
        navigate('Detail', { date, title, url, explanation });
    }

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="View"
                    onPress={handlePressView}
                />
           </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(18, 39,113, 255)",
        marginVertical: 12,
        borderRadius: 30,
        padding: 16,
        marginHorizontal: 24,
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
    }
})
 
export default PostImage;