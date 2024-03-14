import React from 'react';
import {View} from 'react-native';
import Dropdown from '../components/dropdown';

const AnimatedDropdown = () => {
  const options = [
    {
      label: 'Charts',
      icon: '',
    },
    {
      label: 'Books',
      icon: '',
    },
    {
      label: 'Calender',
      icon: '',
    },
    {
      label: 'Camera',
      icon: '',
    },
  ];
  const header = {
    label: 'Header',
    icon: '',
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Dropdown header={header} options={options} />
    </View>
  );
};
export default AnimatedDropdown;
