// import { FontAwesome } from "@expo/vector-icons";
// import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import BookComponent from '../BookComponent';

// const ReadLetter = () => {
//     const Tab = createBottomTabNavigator();
//     return (
     
//         <ScrollView contentContainerStyle={styles.bookContainer}>
//             <View style={styles.bookPageHeader}>
//                 <Text style={styles.appTitle}>Narrative Nova</Text>

//                 <TouchableOpacity>
//                     <View><FontAwesome name="search" size={32} color="white" style={{ marginLeft: 15 }} /></View>
//                 </TouchableOpacity>
//             </View>

//             <Text style={styles.bookCategory}>Science Fiction</Text>
//             <ScrollView contentContainerStyle={styles.theBooks}>
//                 <BookComponent></BookComponent>
//             </ScrollView>


//             <Text style={styles.bookCategory}>Dama Book</Text>
//             <ScrollView contentContainerStyle={styles.theBooks}>
//                 <BookComponent></BookComponent>
//             </ScrollView>


//             <Text style={styles.bookCategory}>Horro Book</Text>
//             <ScrollView contentContainerStyle={styles.theBooks}>
//                 <BookComponent></BookComponent>
//             </ScrollView>

//         </ScrollView>
//     )
// }

// export default ReadLetter;



// const styles = StyleSheet.create({
//     bookContainer: {
//         flex: 1,
//         paddingTop: 30,
//         paddingHorizontal: 20,
//         backgroundColor: '#000',
//     },
//     bookPageHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     appTitle: {
//         color: 'white',
//         fontSize: 32,
//         fontWeight: 'bold',
//     },
//     bookCategory: {
//         color: 'white',
//         fontSize: 26,
//         fontWeight: 'bold',
//         marginVertical: 2
//     },
//     bookImage: {
//         width: 100,
//         height: 160,
//         resizeMode: 'cover',
//     },
//     aBook: {
//         flexDirection: 'column',
//         // backgroundColor: '#000',
//         // borderRadius: 10
//     },
//     bookInformationText: {
//         color: 'white',
//         marginVertical: 2
//     },
//     categoryWisedBook:{
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent:'space-between',
//         alignItems: 'center',
//         marginHorizontal: 10   
//     },
//     theBooks:{
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: 10,
//         borderRadius: 10
//     }
// });
