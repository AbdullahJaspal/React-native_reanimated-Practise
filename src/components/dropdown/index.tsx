import {View} from 'react-native';

type DropdownItemTypes = {
  label: string;
  icon: string;
};

type DropdownProps = {
  header: DropdownItemTypes;
  options: DropdownItemTypes[];
};
const Dropdown: React.FC<DropdownProps> = ({header, options}) => {
  const dropdownItems = [header, ...options];

  return (
    <>
      {dropdownItems.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'white',
              marginBottom: 10,
            }}></View>
        );
      })}
    </>
  );
};

export default Dropdown;
