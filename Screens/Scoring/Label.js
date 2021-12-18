import React from 'react';
import { View, Text } from 'react-native';

const Label = (props) => {
  const { fieldName, value } = props || '';
  console.log('Rendered', fieldName);
  return (
    <View>
      <Text>
        {fieldName}: {value}
      </Text>
    </View>
  );
};

export default React.memo(Label);
