import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Home = ({navigation}) =>{
    return (
        <ImageBackground source={require('../assets/reading-books-home.png')} 
        style={styles.homeBackgroundImage}
        >
        <View style={styles.theApp}>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.homePageText}>Once you learn to read, you will be forever free.</Text>
            <Text style={styles.quoteWritter}>-Frederick Douglass</Text>
            </View>

            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('books')} style={styles.gettingStartedButton}>
                    <Text style={{color: '#000'}}>Let me Read Books</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    )
}

export default Home; 


const styles = StyleSheet.create({
    homeBackgroundImage:{
        flex: 1,
        resizeMode: 'cover',
    },
    theApp:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 90

    },
    homePageText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    quoteWritter:{
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    gettingStartedButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        color: '#fff',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        width: 300
    }
  });
  