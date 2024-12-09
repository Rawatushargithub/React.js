import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {       // children is just a generic name , which is given to that things which is passed to this function 
    const [user , setUser] = React.useState(null)
    return (
         <UserContext.Provider value={{user , setUser}}> {/*here you can pass multiple values*/}
        {children}
        </UserContext.Provider>
    )                     

}

export default UserContextProvider