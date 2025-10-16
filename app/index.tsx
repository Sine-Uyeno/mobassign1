import { StyleSheet, View } from "react-native";
import { SPButton } from "./SPButton";
import { itemPresets } from "./buttonLayouts";

export default function Index() {

  
  return (
    <View
      style={{
        backgroundColor: "#1f2128",
        justifyContent: "center",
      }}
    >
      <View style={page.container}>
        {itemPresets.map((value) => (
            <SPButton {...value} key={value.image}></SPButton>
        ))};
      </View>
    </View>
  );
}

const page = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
  },
  buttons: {
          backgroundColor: "#242731",
          margin: 5,
          padding: 50,
          borderRadius: 10,
          color: "#FFFFFF",
          fontFamily: 'sans',
          flexGrow: 1
  },
  text: {
    color: "#FFFFFF",
  }
});