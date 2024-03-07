import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
import {generateFourDigitNumbers, generateMonthYearString, generateThreeDigitNumber} from '../Faker/Fakenumbers';
import CardDetails from './CardDetails';
const cardimage = require('../assets/card.png');
const freezeImage = require('../assets/freeze.png');
function Creditcard({freeze}) {
  const [showCvv, setShowCvv] = useState(false);
  const fakeData = generateFourDigitNumbers(4);
  const expiry = generateMonthYearString();
  const cvvNumber = generateThreeDigitNumber();
  const blurValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const blurAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(blurValue, {
          toValue: 10,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(blurValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    );

    blurAnimation.start();

    return () => blurAnimation.stop();
  }, [freeze]);

  return (
    <Animated.View
      style={[
        styles.background,
        {
          opacity: freeze?blurValue.interpolate({
            inputRange: [0, 10],
            outputRange: [1, 0.5],
          }):1,
        },
      ]}>
      <Image source={freeze ? freezeImage : cardimage} style={styles.image} />
      <View style={styles.cardDetails}>
   {!freeze&&<CardDetails
        fakeData={fakeData}
        expiry={expiry}
        cvvNumber={cvvNumber}
        setShowCvv={setShowCvv}
        showCvv={showCvv}
      />}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'row',
    height: '50%', // Adjust as needed
    width: '70%', // Adjust as needed
    left: 0,
    gap: 10,
    position: 'relative',
  },
  text: {
    color: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 2,
    borderWidth: 0.2,
    borderColor: 'white',
  },
  otherDetails: {
    flex: 1,
    borderColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  cvv: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});

export default Creditcard;
