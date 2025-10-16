import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ButtLayout {
  image: number,
  text: string
}

export const SPButton = (layout: ButtLayout) => {
    const iconImages = [require('../assets/images/w1.png'), 
        require('../assets/images/w2.png'),
        require('../assets/images/w3.png'),
        require('../assets/images/w4.png'),
        require('../assets/images/w5.png'),
        require('../assets/images/w6.png'),
        require('../assets/images/w7.png'),
        require('../assets/images/w8.png'),
        require('../assets/images/w9.png'),
        require('../assets/images/w10.png'),
        require('../assets/images/w11.png'),
        require('../assets/images/w12.png'),
        require('../assets/images/w13.png'),
        require('../assets/images/w14.png'),
        require('../assets/images/w15.png'),
        require('../assets/images/w16.png'),
        require('../assets/images/w17.png'),
    ];
        //<Image source={iconImages[image]}></Image>
        //      
    
    return (
        <div style={{flex: 1}}>
          <TouchableOpacity style={page.buttons}>
              <Image source={iconImages[layout.image]}></Image>
              <Text style = {page.text}>{layout.text}</Text>
          </TouchableOpacity>
        </div>
    );
}

const page = StyleSheet.create({
  buttons: {
          backgroundColor: "#242731",
          margin: 5,
          padding: 50,
          borderRadius: 10,
          color: "#FFFFFF",
          fontFamily: 'sans',
          aspectRatio: 1/1,
  },
  text: {
    color: "#FFFFFF",
  }
});