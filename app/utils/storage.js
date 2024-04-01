import AsyncStorage from '@react-native-async-storage/async-storage';


const storeDataInStorage = async (key,values)=>{
    try {
        await AsyncStorage.setItem(key, JSON.stringify(values));
        console.log('Data saved successfully!');
      } catch (error) {
        console.error('Error saving data:', error);
      }
}

const getDataFromStorage = async (key)=>{
    try {
        const jsonData = await AsyncStorage.getItem(key);
        if (jsonData) {
          console.log("jsonData",JSON.parse(jsonData))
          console.log(JSON.parse(jsonData))
          return JSON.parse(jsonData);
        }
        return null;
      } catch (error) {
        console.error('Error retrieving data:', error);
        return null;
      }
}

module.exports = {storeDataInStorage,getDataFromStorage};