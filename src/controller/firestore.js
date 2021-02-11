import { firebase, db } from './firebase-config';

// Colección en firestore
const collectionUsers = () => db.collection('users');


//Obtener docs de la colección users
const getUsers = (listUsers) =>{
    collectionUsers().onSnapshot((query)=>{
      const docs = [];
      query.forEach((user)=>{
        docs.push({...user.data(), id:user.id});
      });
    //   console.log(docs);
    //   callback(docs);
    listUsers(docs);
    });
  };
  
  
  export default {
      getUsers,
  }