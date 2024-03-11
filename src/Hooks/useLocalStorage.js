import React from "react";

// Custom Hook
function useLocalStorage(itemName, initialValue) {
      // Creamos un nuevo estado para poder pasarlo a App
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
         // LocalStorage
         setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
        
                let parsedItem;
                if(!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                  } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                  }
                setLoading(false);
                } catch(error) {
                    setError(true);
                    setLoading(false);
                }
         }, 2000);
    
    }, [itemName,initialValue])


 
   // Función que actualiza el estado y el localStorage al mismo tiempo
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   };
 
   return {
    item, 
    saveItem, 
    loading,
    error,
    };
 }

 export { useLocalStorage};


 // const defaultTodos = [
//   { text: "cortar cebolla", completed: true},
//   { text: "poner lavadora", completed: false},
//   { text: "hacer curso react", completed: false},
//   { text: "tocarme las narices un rato lolo lolo lolo lolo lolo lolo lolo lo lol lol lol llol lololo lololo", completed: true},
//   { text: "hacer la comida", completed: false},
//   { text: "HACER LA", completed: false},
// ];
// localStorage.setItem('TODOs_V1', JSON.stringify(defaultTodos));

// localStorage.setItem('TODOs_V1', defaultTodos);
// localStorage.removeItem("TODOs_V1");