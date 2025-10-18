import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SPButton } from "./SPButton";
import { itemPresets } from "./buttonLayouts";


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
              {itemPresets.map((value) => (
                <SPButton {...value} key={value.image} />
              ))}
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
}
);
