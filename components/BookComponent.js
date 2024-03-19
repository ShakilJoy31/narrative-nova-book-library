// import { FontAwesome } from "@expo/vector-icons";
// import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Books = () => {
    const navigation = useNavigation();
    // const width = Dimensions.get("window").width;
    // const list = [
    //     {
    //         id: 1,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 2,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 3,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 4,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 5,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 6,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 7,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 8,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 9,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     },
    //     {
    //         id: 10,
    //         bookType: "Novel",
    //         bookName: 'First Book',
    //         view: '5.6k',
    //         photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
    //     }
    // ]
    const books = [
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://www.gutenberg.org/cache/epub/1259/pg1259.cover.medium.jpg'
        },
        {
            id: 2,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 3,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 4,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 5,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 6,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
        {
            id: 1,
            bookType: "Novel",
            bookName: 'First Book',
            view: '5.6k',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/F._Scott_Fitzgerald%2C_The_Great_Gatsby%2C_1925%2C_title_page.jpg'
        },
    ]

    return (
        <View style={styles.theBooks}>

            {
                books.map((book, index) =>(
                    <TouchableOpacity onPress={()=>  navigation.navigate('bookDetail', { book })} key={index} style={styles.aBook}>
                    <Image style={styles.bookImage} source={{ uri: book.photo }} />
                    <Text style={styles.bookInformationText}>{book.bookType}</Text>
                    <Text style={styles.bookInformationText}>{book.bookName}</Text>
                    <Text style={styles.bookInformationText}>{book.view}</Text>
                </TouchableOpacity>        
                ))
            }

        </View>
    )
}

export default Books;

// onPress={()=> router.push(`/(tabs)/books/${book.id}`)}

const styles = StyleSheet.create({
    bookImage: {
        width: 100,
        height: 160,
        resizeMode: 'cover',
    },
    aBook: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    bookInformationText: {
        color: 'white',
        marginVertical: 24
    },




    theBooks:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10
    }
});
