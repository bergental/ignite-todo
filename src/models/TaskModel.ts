import uuid from 'react-native-uuid';

export type TaskModel = {
  id: string | number[];
  done: boolean;
  task: string;
}

export function newTask(done: boolean, task: string): TaskModel {
  return {
    id: uuid.v4(),
    done,
    task
  }
}