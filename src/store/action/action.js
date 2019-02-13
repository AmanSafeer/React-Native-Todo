import {actionTypes} from '../constant/constant'
// import * as firebase from 'firebase';

// var config = {
//     apiKey: "AIzaSyCnG6P11GDCcgqia2V2kXeJ_kndBJGF8Ho",
//     authDomain: "react-native-todo-app-android.firebaseapp.com",
//     databaseURL: "https://react-native-todo-app-android.firebaseio.com",
//     projectId: "react-native-todo-app-android",
//     storageBucket: "react-native-todo-app-android.appspot.com",
//     messagingSenderId: "802236606160"
//   };
//   firebase.initializeApp(config);



// const ref=firebase.database().ref('/');

// export function getData(){
//     return (dispatch)=>{
//         ref.child('todos').on('child_added',snap=>{
//             const data=snap.val();
//             // console.log(data)
//             data.id=snap.key
//             dispatch({type:actionTypes.ADD,payload:data})
//         })
//         ref.child('todos').on("child_removed",snap=>{
//             const data=snap.val()
//             dispatch({type:actionTypes.DELETE,payload:data.id})
//         })
//     }
// }

export function add(obj){
    return (dispatch) =>{ 
        // ref.child('todos').push(obj)
        dispatch({type:actionTypes.ADD,payload:obj})

    }
}
export function update(obj){
    return (dispatch) =>{
        dispatch({type:actionTypes.UPDATE,payload:obj})

    } 
}

export function deleteOne(ind,id){
    return (dispatch) =>{
        // ref.child('todos').child(id).remove()
        dispatch({type:actionTypes.DELETE,payload:ind})

    } 
}

export function deleteAll(){
    return (dispatch) =>{
        dispatch({type:actionTypes.DELETEALL})

    } 
}
