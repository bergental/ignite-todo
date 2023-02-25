import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, FlatList, Text, Alert } from 'react-native';
import {SvgCssUri} from 'react-native-svg';

import Theme from '../../global/styles/theme';
import { TaskModel, newTask } from '../../models/TaskModel';

import { TaskInfo } from '../../components/TaskInfo';
import { Task } from '../../components/Task';

const Logo = Image.resolveAssetSource(require('../../../assets/svg/logo.svg'));
const Add = Image.resolveAssetSource(require('../../../assets/svg/add.svg'));


import { styles } from './styles';

export default function Home() {
  const [inputTask, setInputTask] = useState<TextInput | null>(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [addNewTaskPress, setAddNewTaskPress] = useState(false);
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');

  function handlerTaskAdd() {
    const text = taskTitle.trim();
    if (text.length == 0) return;
    
    setTasks(prevState => [...prevState, newTask(false, text)]);
    setTaskTitle('');
    if (inputTask != null) inputTask.focus(); 
  }

  function handlerTaskCheck(item: TaskModel) {
    setTasks(prevState => prevState.map(task => {
      if (item.id == task.id) task.done = !task.done;
      return task;
    }).sort((a, b) => a.done != b.done ? (a.done ? 1 : -1): 0));
  }

  function handlerTaskRemove(item: TaskModel) {
    Alert.alert('Remover', `Remover a tarefa '${item.task}'?`, [
      {
        text: 'Sim',
        onPress: () => { setTasks(prevState => [...prevState.filter(task => task.id != item.id)].sort((a, b) => a.done != b.done ? (a.done ? 1 : -1): 0)); }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <>
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundBottom} />
      <View style={styles.container}>
        <SvgCssUri style={styles.logo} uri={Logo.uri} width='110' height='32' />
        
        <View style={styles.containerNewTask}>
          <TextInput 
            ref={setInputTask}
            style={inputFocus ? styles.inputFocus : styles.input}
            cursorColor={Theme.colors.white}
            placeholderTextColor={Theme.colors.gray300}
            placeholder='Adicione uma nova tarefa'
            onFocus={() => setInputFocus(true)}
            onBlur={() => setInputFocus(false)}
            value={taskTitle}
            onChangeText={setTaskTitle}
            onSubmitEditing={handlerTaskAdd}
            blurOnSubmit={false}
            autoFocus
          />
          <TouchableOpacity 
            style={addNewTaskPress ? styles.buttonNewTaskPress : styles.buttonNewTask}
            onPressIn={() => setAddNewTaskPress(true)}
            onPressOut={() => {
              handlerTaskAdd();
              setAddNewTaskPress(false); 
            }}
          >
            <SvgCssUri uri={Add.uri} width='16' height='16' />
          </TouchableOpacity>
        </View>

        <View style={styles.containerTasks}>
          <View style={styles.tasksInfoContainer}>
            <TaskInfo
              labelText='Criadas'
              labelColor={Theme.colors.blue}
              recordsCount={tasks.length}
            />
            <TaskInfo
              labelText='Concluídas'
              labelColor={Theme.colors.purple}
              recordsCount={tasks.filter(item => item.done).length}
            />
          </View>

          <FlatList
              data={tasks}
              style={{marginVertical: 20}}
              keyExtractor={(item, index) => `task-${index}`}
              renderItem={({ item }) =>(
                <Task 
                  item={{
                    id: item.id,
                    done: item.done,
                    task: item.task
                  }}
                  onCheck={handlerTaskCheck}
                  onRemove={handlerTaskRemove}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View style={styles.tasksListEmptyContainer}>
                  <Image 
                    source={require('../../../assets/clipboard.png')}
                  />
                  <Text style={styles.tasksListEmptyTitle}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.tasksListEmptySubtitle}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              )}
            />
        </View>

      </View>
    </>
  );
}