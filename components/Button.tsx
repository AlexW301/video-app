import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export type Props = {
  onPress?: any;
  iconName: string;
  backgroundColor: string;
  style?: any;
};

const Button: React.FC<Props> = ({onPress, iconName, backgroundColor, style}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[{backgroundColor}, style, styles.button]}>
        <Icon name={iconName} color="white" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    padding: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export default Button;
