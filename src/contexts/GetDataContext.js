import React, {useState, useEffect, useContext} from 'react';
import db from '../firebase/firebaseConfig';
import {collection, onSnapshot} from '@firebase/firestore';

const GetDataContext = React.createContext();

const useGetData = () => {
   return useContext(GetDataContext);
};

const GetDataProvider = ({children}) => {
   const [universities, setUniversities] = useState([]);
   const [fundations, setFundations] = useState([]);

   useEffect(() => {
      onSnapshot(collection(db, 'universities'), (snapshot => {
         setUniversities(snapshot.docs.map(document => {
            return {...document.data(), id: document.id, tag: 'Universidad'}
         }))
      }));

      onSnapshot(collection(db, 'foundations'), (snapshot => {
         setFundations(snapshot.docs.map(document => {
            return {...document.data(), id: document.id, tag: 'Fundación'}
         }));
      }));
   }, []);
   
   return (
      <GetDataContext.Provider value={{
         universities: universities,
         fundations: fundations
      }}>
         {children}
      </GetDataContext.Provider>
   );
}
 
export {GetDataProvider, useGetData};