import React from 'react'
import MainContainer from './src/screens/MainContainer';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <MainContainer />
    </>
  )
}
