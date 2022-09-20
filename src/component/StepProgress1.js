import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Stepper from 'react-native-stepper-ui';

const MyComponent = (props) => {
  return (
    <View style={{ padding: 10 }}>
      {/*  <Text>{props.title}</Text>  */}
    </View>
  );
};

const content = [
  <MyComponent title="You two had 12 deals before" />,
  <MyComponent title="You two had 12 deals before" />,
  <MyComponent title="You and Ray had 12 deals before" />,
];

const StepProgress = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => alert('Finish')}
        onNext={() => setActive((p) => p + 1)}
        // showButton={false}
      />
    </View>
  );
};

export default StepProgress;