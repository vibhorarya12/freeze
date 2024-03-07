import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Creditcard from '../components/Credit';

export default function YoloPay() {
  const [freeze, setFreeze] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0c0c',
      padding: 20,
    },
    text: {
      color: 'white',
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 20,
    },
    textPayment: {
      color: '#818181',
      fontSize: 16,
      marginTop: 10,
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'row',
      gap: 15,
    },
    button: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0.1,
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: '30%', // Adjust width as needed
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    actionConatiner: {
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
    },
    IconContainer: {
      borderWidth: 0.5,
      borderColor: freeze ? '#a50809' : 'white',
      borderRadius: 30,
    },
    iconText: {
      color: freeze ? '#a50809' : 'white',
      marginTop: 8,
      left: 5,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>select payment mode</Text>
      <Text style={styles.textPayment}>
        choose your preferred payment method to make payment
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {borderColor: 'white'}]}>
          <Text style={[styles.buttonText, {color: 'white'}]}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {borderColor: '#a50809'}]}>
          <Text style={[styles.buttonText, {color: '#a50809'}]}>Card</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.textPayment, {marginTop: 35}]}>
        Your Digital Debit Card
      </Text>
      <View style={styles.actionConatiner}>
        <Creditcard freeze={freeze} />
        <View style={{top: 60}}>
          <View style={styles.IconContainer}>
            <TouchableOpacity onPress={() => setFreeze(!freeze)}>
              <View style={{padding: 10}}>
                <MaterialCommunityIcons
                  name={'leaf-maple'}
                  size={40}
                  color={freeze ? '#a50809' : 'white'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.iconText}>{freeze ? 'unfreeze' : 'freeze'} </Text>
        </View>
      </View>
    </View>
  );
}
