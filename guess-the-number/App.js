import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import PlayGame from "./screens/PlayGame";
import { colors } from "./constants/colors";
import GameOver from "./screens/GameOver";
import { StatusBar } from "expo-status-bar";
// import * as Font from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  // const [isFontLoaded, setIsFontLoaded] = useState(false);
 

  // useEffect(() => {
  //   async function loadFonts() {
  //      await Font.loadAsync({
  //        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  //      });
  //   }
  //   loadFonts();
  //   setIsFontLoaded(true)
  // },[])



  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false);
  }

  function GameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() { 
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />
  
  if (userNumber) {
    screen = <PlayGame userNumber={userNumber} onGameOver={GameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <>
      <StatusBar style="dark"/>
      <LinearGradient
        colors={["white", colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/dices.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  }
});
