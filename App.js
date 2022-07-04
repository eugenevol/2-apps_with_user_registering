import  React,{useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
  Modal,
} from 'react-native';

// import axios from 'axios';

let url =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=817028c7358bc3b63364e57faf4a2f37&language=en-US&page=1';

import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
// import { Todo } from './components/screens/todo';
// import { Films } from './components/screens/films';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {gStyle} from './style/style'

const Stack = createStackNavigator();


function User_profile ({ navigation }) {


  return (

<View>

<Button title="Войти" onPress={() => navigation.navigate('User_login')}  />
 <Button title="Регистрация" onPress={() =>navigation.navigate('User_registration') }  />

 </View>

  )

}


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
        

const UserProfileStackNavigator = () => {
  return (
    <Stack.Navigator
    
    screenOptions={screenOptionStyle}
       
    >
      <Stack.Screen name="User_profile" component={User_profile} />
      <Stack.Screen name="User_login" component={User_login} />
      <Stack.Screen name="User_registration" component={User_registration} />
       <Stack.Screen name="User_login_success" component={User_login_success} />
    </Stack.Navigator>
  );
}



function User_login_success(){

  return(


    <Text>Login success </Text>
  )


}

function User_login(){

const token = "65effdb908ae5fe1b1fdd0e742923fcaadd1e171"

//Получить токен

let url='https://tokenauthapi.eugenevolkov.repl.co/api-token-auth/'

const [nameLogin, setnameLogin] = React.useState('');
const [passLogin, setpassLogin] = React.useState('');
const [usertoken, setUserToken] = React.useState('');



const get_token = async () => {

  // console.log('jjj')


  console.log(`${nameLogin} ${passLogin}`)

     try {
      const response = await fetch(url,{
        
        
        
         method: 'POST', 
    // mode: 'cors', 
    body:JSON.stringify(
      
      
      {'username':`${nameLogin}`,
    
    'password':`${passLogin}`
    }),

    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    
        
        });
      const json = await response.json();
      console.log(json);
      setUserToken(JSON.stringify(json))
    } catch (error) {
      console.error(error);
     

    } 
  }



  

  function clear_fields() {
    setnameLogin('');
    setpassLogin('');
   
  }


return (
    <View>
      <TextInput
        value={nameLogin}
        placeholder="Введите логин"
        onChangeText={setnameLogin}
        style={gStyle.input}
      />
      <TextInput
        value={passLogin}
        placeholder="Введите пароль"
        onChangeText={setpassLogin}
        multiline
        style={gStyle.input}
      />
      
      <Button title="Отправить" onPress={get_token} />

      <Text>{usertoken}</Text>

    </View>
  );


}

function User_registration(){


   
  const [name, setName] = React.useState('');
  const [pass, setPass] = React.useState('');
  

  function clear_fields() {
    setName('');
    setPass('');
   
  }


// const saveData = async (login,password) => {
//   try {
//     await AsyncStorage.setItem('login', login)
//     await AsyncStorage.setItem('password', password)
//     alert('Data successfully saved')
//   } catch (e) {
//     alert('Failed to save the data to the storage')
//   }
// }

// const readData = async () => {
//   try {
//     const login = await AsyncStorage.getItem('login');
//     const password = await AsyncStorage.getItem('password');    


//     // if (login !== null && password !== null) {
//     //   alert(`Логин: ${login} Пароль: ${password}`)
//     // }

//     // else{

//     //   alert('tt')
//     // }
//   } catch (e) {
//     alert('Failed to fetch the input from storage');
//   }
// };

// useEffect(() => {
//   readData();
// }, []);




  // function addItem() {
  //   addArticle({ name: name, pass: pass, });
  //   clear_fields;
  // }

// function addItem() {
//     saveData(name,pass);
//     clear_fields;

// }



  // useEffect(()=>{

  //   console.log({new_obj})
  // },[new_obj])

  return (
    <View>
      <TextInput
        value={name}
        placeholder="Введите логин"
        onChangeText={setName}
        style={gStyle.input}
      />
      <TextInput
        value={pass}
        placeholder="Введите пароль"
        onChangeText={setPass}
        multiline
        style={gStyle.input}
      />
      
      <Button title="Отправить"  />
    </View>
  );

}



function Form({ addTodo, TodoItems }) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Введите название задачи"
        style={styles.textInput}
        onChangeText={(text) => {
          setInputValue(text);
        }}
        value={inputValue}></TextInput>

      <Button
        title="Добавить задачу"
        disabled={!inputValue}
        onPress={() => {
          let newItem = {};

          const ids = TodoItems.map((object) => {
            return object.id;
          });

          if (TodoItems.length != 0) {
            const max = Math.max(...ids);

            newItem.id = max + 1;
          } else {
            newItem.id = 0;
          }

          (newItem.text = inputValue), addTodo(newItem);

          setInputValue('');
        }}
      />
    </View>
  );
}

function TodoItem({ item, delTodo }) {
  return (
    <TouchableOpacity
      style={styles.todo}
      onLongPress={() => {
        delTodo(item.id);
      }}>
      <Text style={styles.text}>{item.text}</Text>

      <TouchableOpacity
        onPress={() => {
          delTodo(item.id);
        }}>
        <Text>&#128465;</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('./assets/514-5142665_react-native-transparent-react-native-logo-png-png.png.jpg')}
      />
    </View>
  );
}

function Todo() {
  const [TodoItems, setTodoItems] = React.useState([
    { id: 1, text: 'React Native 1' },
  ]);

  const addTodo = (newItem) => {
    let test = TodoItems.slice();

    test.push(newItem);

    console.log('TodoItems', TodoItems);

    console.log('test', test);

    setTodoItems(test);
  };

  const delTodo = (id) => {
    setTodoItems(
      TodoItems.filter((e) => {
        return e.id != id;
      })
    );

    console.log('TodoItems after del', TodoItems);
  };

  return (
    <SafeAreaView style={styles.app}>
      <Header />

      <ImageBackground source={require('./bg.jpg')} style={styles.bg}>
        <Form addTodo={addTodo} TodoItems={TodoItems} />

        {TodoItems.length ? <Text> Всего [{TodoItems.length}]</Text> : null}

        <FlatList
          data={TodoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem delTodo={delTodo} item={item} />}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

function FilmItem({ film }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <TouchableOpacity
      onLongPress={() => setModalVisible(!modalVisible)}
      style={styles.filmItem}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200/${film.poster_path}` }}
        style={styles.Image}
      />
      <Text style={styles.title}>{film.title}</Text>

      <Modal 
        animationType="slide"
        presentationStyle="formSheet"
        visible={modalVisible}>
        <SafeAreaView style={styles.Modal}>
          <Text
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.close}>
            &times;
          </Text>
          <Image
            source={{uri: `https://image.tmdb.org/t/p/w200/${film.poster_path}`}}
            style={styles.modalImg}
          />
          <Text style={styles.overview}>{film.overview}</Text>
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
}

function Films() {
  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {
    const getFilms = async () => {
      let res = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=817028c7358bc3b63364e57faf4a2f37&language=en-US&page=1'
      );
      const json = await res.json();

      setFilms(json.results);
    };

    getFilms();
  }, []);

  console.log('films', films);

  return (
    <SafeAreaView>
      <Header />

      <Text></Text>

      <FlatList
        columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 100 }}
        data={films}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilmItem film={item} />}
      />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Todo"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Todo"
          component={Todo}
          options={{
            tabBarLabel: 'Заметки',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="note" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Films"
          component={Films}
          options={{
            tabBarLabel: 'Фильмы',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="film" color={color} size={size} />
            ),
          }}
        />

 <Tab.Screen
          name="UserProfileStackNavigator"
          component={UserProfileStackNavigator}
          options={{
            tabBarLabel: 'Профиль',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face" color={color} size={size} />
            ),
          }}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 69,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
  },

  logo: {
    maxWidth: 300,
    widht: '100%',
    height: 69,
  },

  bg: {
    flex: 1,
  },

  app: {
    flex: 1,
  },

  todo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },

  text: {
    fontSize: 18,
  },

  textInput: {
    padding: 15,
    margin: 15,
    background: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  filmItem: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 20,
  },
  Image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  title: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 500,
    textAling: 'center',
  },

  Modal: {
    margin: 25,
  },

  close: {
    fontSize: 30,
    textAlign: 'right',
  },
  modalImg: {
    widht: 300,
    height: 300,
    resizeMode: 'contain',
    display: 'flex',
    alignSelf: 'center',
  },
  overview: {
    fontSize: 18,
    marginTop: 25,
  },
});
