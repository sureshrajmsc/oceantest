import { View, Text } from 'react-native'
import React from 'react'
import StepIndicator from "react-native-step-indicator";
import { useSelector } from "react-redux";
import { useEffect } from 'react';

const labels = [
  "Request",
  "Service",
  "Payment"
];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#018ab8",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#018ab8",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#018ab8",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#018ab8",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#018ab8",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#018ab8",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#018ab8"
};

const StepProgress = () => {
  const cnav = useSelector((state) => state.stepval.cnav);

  return (
    <View style={{padding:5}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={cnav}
        labels={labels}
        stepCount={3}
      />
    </View>
  )
}

export default StepProgress