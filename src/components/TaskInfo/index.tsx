import { View, Text, ColorValue } from 'react-native';

import { styles } from './styles';

type Props = {
  labelText: string;
  labelColor: ColorValue;
  recordsCount: number;
}

export function TaskInfo({labelText, labelColor, recordsCount}: Props) {
  
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.label, color: labelColor }}>
        { labelText }
      </Text>
      <Text style={styles.ballon}>
        { recordsCount }
      </Text>
    </View>
  )
}