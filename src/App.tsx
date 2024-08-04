import { StyleSheet, Text, View, Image, ImageSourcePropType, Pressable } from 'react-native'

import React, { PropsWithChildren, useState } from 'react'
import { trigger } from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}
export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne) //You can now just not provide any string, it needs to be an image 

  // Optional configuration
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };




  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    switch (randomNumber) {
      case 1: setDiceImage(DiceOne); break
      case 2: setDiceImage(DiceTwo); break
      case 3: setDiceImage(DiceThree); break
      case 4: setDiceImage(DiceFour); break
      case 5: setDiceImage(DiceFive); break
      case 6: setDiceImage(DiceSix); break
      default: setDiceImage(DiceOne); break

    }
    trigger("rigid", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});