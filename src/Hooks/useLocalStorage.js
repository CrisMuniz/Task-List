import React from "react";

// Custom Hook
function useLocalStorage(itemName, initialValue) {

    // LocalStorage
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
 
    if(!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    // Creamos un nuevo estado para poder pasarlo a App
    const [item, setItem] = React.useState(parsedItem);
 
   // Función que actualiza el estado y el localStorage al mismo tiempo
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   };
 
   return [item, saveItem];
 }

 export { useLocalStorage};