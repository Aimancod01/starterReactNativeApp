import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data saved successfully: ${key}`);
  } catch (error) {
    console.error(`Error saving data to AsyncStorage: ${error.message}`);
  }
};

export const getFromStorage = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Error retrieving data from AsyncStorage: ${error.message}`);
    return null;
  }
};

export const updateStorage = async (key, updater) => {
  try {
    const currentValue = await getFromStorage(key);
    const updatedValue = updater(currentValue);
    await saveToStorage(key, updatedValue);
    console.log(`Data updated successfully: ${key}`);
  } catch (error) {
    console.error(`Error updating data in AsyncStorage: ${error.message}`);
  }
};

export const removeFromStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data removed successfully: ${key}`);
  } catch (error) {
    console.error(`Error removing data from AsyncStorage: ${error.message}`);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared from AsyncStorage');
  } catch (error) {
    console.error(`Error clearing AsyncStorage: ${error.message}`);
  }
};
