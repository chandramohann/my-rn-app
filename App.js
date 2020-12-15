import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, { uid: Math.random().toString(), value: goalTitle }])
    setIsAddMode(false);
  }
  const clearGoalHandler = () => {
    setCourseGoals(currentGoals => [])
  }
  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.uid != goalId)
    })
  }
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title='new goals' onPress={() => setIsAddMode(true)} />
      <GoalInput enableAddMode={isAddMode} onAddGoal={addGoalHandler} onClearGoal={clearGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item) => item.uid}
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.uid} title={itemData.item.value} onDelete={deleteGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
