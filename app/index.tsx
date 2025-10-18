import { Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  const showAlert = () => {
    Alert.alert("Alert", "Alert button pressed!");
  }
  
  return (
    <View style={styles.main}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Dashboard</Text>
          </View>
    
          {/* Scrollable Content */}
          <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w1.png')}></Image>
                <Text style = {styles.text}>Members</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w2.png')}></Image>
                <Text style = {styles.text}>Front History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w3.png')}></Image>
                <Text style = {styles.text}>Analytics</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w4.png')}></Image>
                <Text style = {styles.text}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w5.png')}></Image>
                <Text style = {styles.text}>Polls</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w6.png')}></Image>
                <Text style = {styles.text}>Friends</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w7.png')}></Image>
                <Text style = {styles.text}>Useful Links</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w8.png')}></Image>
                <Text style = {styles.text}>App Reminders</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w9.png')}></Image>
                <Text style = {styles.text}>Privacy Buckets</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w10.png')}></Image>
                <Text style = {styles.text}>Tokens</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w11.png')}></Image>
                <Text style = {styles.text}>User Report</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w12.png')}></Image>
                <Text style = {styles.text}>Notification History</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w13.png')}></Image>
                <Text style = {styles.text}>How-tos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w14.png')}></Image>
                <Text style = {styles.text}>Custom Fields</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w15.png')}></Image>
                <Text style = {styles.text}>Account Settings</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w16.png')}></Image>
                <Text style = {styles.text}>Accessibility</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons}>
                <Image source={require('../assets/images/w17.png')}></Image>
                <Text style = {styles.text}>Options</Text>
              </TouchableOpacity>
              
            </View>
          </ScrollView>
    
          {/* Alert Button */}
          <View style={styles.alertContainer}>
            <Button title="Show Alert" onPress={showAlert} color="#ff5252" />
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#1f2128",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "#242731",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  scroll: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  alertContainer: {
    padding: 20,
    backgroundColor: "#1f2128",
  },
  buttons: {
          flex: 1,
          backgroundColor: "#242731",
          padding: 30,
          margin: 1,
          borderRadius: 10,
          color: "#cacacaff",
          fontFamily: 'sans',
          aspectRatio: 1/1,
  },
    text: {
    color: "#cacacaff",
  }
}
);
