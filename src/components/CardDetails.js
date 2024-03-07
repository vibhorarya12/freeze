import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CardDetails = ({ fakeData, expiry, cvvNumber, setShowCvv, showCvv }) => {
  return (
    <>
      <View style={{ marginLeft: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {fakeData.map(num => (
          <Text key={num} style={styles.text}>
            {num}
          </Text>
        ))}
      </View>
      <View style={styles.otherDetails}>
        <Text style={{ color: '#818181' }}>expiry</Text>
        <Text style={[styles.text, { borderWidth: 0, paddingHorizontal: 0 }]}>
          {expiry}
        </Text>
        <Text style={{ color: '#818181' }}>CVV</Text>
        <View style={styles.cvv}>
          <Text style={{ color: '#818181' }}>{cvvNumber}</Text>
          <TouchableOpacity onPress={() => setShowCvv(!showCvv)}>
            <MaterialIcons
              name={showCvv ? 'visibility' : 'visibility-off'}
              size={20}
              color={'#a50809'}
            />
          </TouchableOpacity>
        </View>
      </View></>
   
  );
};

const styles = StyleSheet.create({
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

export default CardDetails;
