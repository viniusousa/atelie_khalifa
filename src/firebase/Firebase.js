import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
 
//usar o .env dps pra ocultar os dados do meu banco de dados na publicação pro github
//o react ta fazendo diversas requisições de leitura no banco de dados, precisamos definir que ele leia só quando uma ação for alterada assim evitando requests desnecessárias na publicação.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APP_ID
  };


  const app = initializeApp(firebaseConfig);
  
export const db = getFirestore(app);





