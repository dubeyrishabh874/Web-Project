import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "http://localhost:3004/posts";

const intialState = {
  name: "",
  img: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "TECHNICAL SOFTENGI",
        img: "https://t3.ftcdn.net/jpg/03/64/90/68/360_F_364906832_3CWsp5oXzh8oauRKz7SYtPfCZ57JfESZ.jpg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Technical RAM",
        img: "https://www.airswift.com/hubfs/employee%20training%20and%20development.png",
      },
    });
  };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });

      console.log("API", data);


    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};
// const AppProvider = ({ children }) => {
//   return (
//     <AppContext.Provider value={{ firstName: "Rishabh Dubey", age: 21 }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
