import { View, TouchableOpacity } from 'react-native';
import { s } from '../setup/styles';
import { useTheme } from '@react-navigation/native';
import { Small } from '../setup/typography';

export function ChartRangeSelector() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: colors.border,
          backgroundColor: colors.background,
        }}
        onPress={() => {
          console.log('1W');
        }}
      >
        <Small style={{ color: colors.text }}>1W</Small>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderRadius: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderColor: colors.border,
        }}
        onPress={() => {
          console.log('1M');
        }}
      >
        <Small style={{ color: colors.text }}>1M</Small>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderRadius: 0,
          borderRightWidth: 0,
          borderColor: colors.border,
        }}
        onPress={() => {
          console.log('1Y');
        }}
      >
        <Small style={{ color: colors.text }}>1Y</Small>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...s.btn_secondary,
          ...s.switch_btn,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderColor: colors.border,
        }}
        onPress={() => {
          console.log('All');
        }}
      >
        <Small style={{ color: colors.text }}>All</Small>
      </TouchableOpacity>
    </View>
  );
}
