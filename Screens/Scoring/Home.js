import React, { useCallback, useState, useMemo } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Button from './Button';
import Label from './Label';

const Home = () => {
  const [height, setHeight] = useState(5);
  const [score, setScore] = useState(10);

  const calculation = useMemo(() => expensiveCalculation(score), [score]);

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
      <Label fieldName="Calculate :" value={calculation}></Label>
      <Button label="Increase height" onButtonPress={onIncreaseHeight} />
      <Button label="Increase score" onButtonPress={onIncreaseScore} />
    </SafeAreaView>
  );
};

export default Home;

const expensiveCalculation = (num) => {
  console.log('Calculating');
  for (let index = 0; index < 1000; index++) {
    num = num + 1;
  }
  return num;
};
