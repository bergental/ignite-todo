import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {SvgCssUri} from 'react-native-svg';

import Theme from '../../global/styles/theme';
import { TaskModel } from '../../models/TaskModel';


import { styles } from './styles';


const Unchecked = Image.resolveAssetSource(require('../../../assets/svg/unchecked.svg'));
const Checked = Image.resolveAssetSource(require('../../../assets/svg/checked.svg'));
const Trash = Image.resolveAssetSource(require('../../../assets/svg/trash.svg'));

type Props = {
  item: TaskModel;
  onCheck: (item: TaskModel) => void;
  onRemove: (item: TaskModel) => void;
}


export function Task({item, onCheck, onRemove}: Props) {
  
  const [checkPress, setCheckPress] = useState(false);
  const [removePress, setRemovePress] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonCheck}
        onPressIn={() => setCheckPress(true)}
        onPressOut={() => {
          setCheckPress(false); 
          onCheck(item);
        }}
      >
        <SvgCssUri 
          fill={ item.done ? 
            (checkPress ? Theme.colors.purple : Theme.colors.purpleDark) : 
            (checkPress ? Theme.colors.blueDark : Theme.colors.blue) } 
            
          uri={ item.done ? 
            Checked.uri : 
            Unchecked.uri
          } 
          width='24' 
          height='24' 
        />
      </TouchableOpacity>
      <Text style={item.done ? styles.taskDone : styles.task}>
        { item.task }
      </Text>
      <TouchableOpacity 
        style={removePress ? styles.buttonRemovePress : styles.buttonRemove}
        onPressIn={() => setRemovePress(true)}
        onPressOut={() => {
          setRemovePress(false); 
          onRemove(item);
        }}
      >
        <SvgCssUri 
          fill={ removePress ? Theme.colors.danger : Theme.colors.gray300 } 
          uri={Trash.uri} 
          width='14' 
          height='14' />
      </TouchableOpacity>
    </View>
  )
}