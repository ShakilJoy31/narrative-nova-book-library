import { FontAwesome } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BookDetails = ({navigation, route}) => {
    // const {book} = route.params;
    // console.log(book);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.singleBookHeader}>
                <TouchableOpacity onPress={()=> navigation.navigate('books')}>
                    <FontAwesome name="arrow-left" size={24} color="white" />
                </TouchableOpacity>

                <View style={styles.rightButtons}>
                    <TouchableOpacity>
                        <FontAwesome name="heart" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome name="ellipsis-h" size={26} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.bookImage} source={{ uri: 'https://www.gutenberg.org/cache/epub/1259/pg1259.cover.medium.jpg' }} />
                    </View>

                    <View style={styles.bookInformation}>
                        <Text style={{ fontSize: 24, color: '#fff', fontWeight: '700' }}>Twenty years after</Text>

                        <Text style={{ fontSize: 16, color: '#fff' }}>Alexandre Dumas and Auguste Maquet</Text>

                        <TouchableOpacity onPress={()=> navigation.navigate('bookPage')} style={styles.readingButton}>
                            <Text style={{ fontSize: 24, color: '#000' }}>Start Reading</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 16, color: '#fff' }}>Alexandre Dumas and Auguste Maquet</Text>
                    </View>

                    {/* Book summaries */}
                    <View style={styles.bookSummarige}>
                        <Text style={{ fontSize: 24, color: '#fff' }}>Summary</Text>
                        <Text style={{ fontSize: 16, color: '#rgba(151, 151, 151, 0.712)' }}>Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary. Alexandre Dumas and Auguste Maquet. This is book summary Alexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summaryAlexandre Dumas and Auguste Maquet. This is book summary</Text>

                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: 'red' }}>Read More</Text>
                        </TouchableOpacity>
                    </View>



                    <TouchableOpacity>
                        <View style={styles.bookChapterContainer}>
                            <View><Text style={{ fontSize: 16, color: '#rgba(151, 151, 151, 0.712)' }}>1</Text></View>

                            <View>
                                <Text style={{ fontSize: 24, color: '#fff' }}>Chapter 1</Text>
                                <Text style={{ fontSize: 16, color: '#rgba(151, 151, 151, 0.712)' }}>Page 1</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    )
}

export default BookDetails;

const styles = StyleSheet.create({
    singleBookHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    rightButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    bookImage: {
        width: 250,
        height: 350,
    },
    bookInformation: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    readingButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: 300,
        marginVertical: 10,
    },
    bookSummarige: {
        flexDirection: 'column',
        gap: 10,
        marginVertical: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#000',
    },
    bookChapterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 30,
        marginVertical: 10,
    }
});
