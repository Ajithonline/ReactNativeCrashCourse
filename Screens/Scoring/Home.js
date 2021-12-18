import React, { useCallback, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Button from './Button';
import Label from './Label';

const Home = () => {
  const [height, setHeight] = useState(5);
  const [score, setScore] = useState(10);

  const onIncreaseHeight = useCallback(() => {
    setHeight((height) => height + 1);
  }, []);

  const onIncreaseScore = useCallback(() => {
    setScore((score) => score + 1);
  }, []);

  return (
    <SafeAreaView style={{ margin: 15 }}>
      <Label fieldName="Candidate Name :" value="John Doe"></Label>
      <Label fieldName="Candidate Height :" value={height}></Label>
      <Label fieldName="Candidate Score :" value={score}></Label>
      <Button label="Increase height" onButtonPress={onIncreaseHeight} />
      <Button label="Increase score" onButtonPress={onIncreaseScore} />
    </SafeAreaView>
  );
};

export default Home;
