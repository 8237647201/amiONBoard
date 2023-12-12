import { createContext, useState } from "react";

export const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [account, setAccount] = useState({
    username: "",
    name: "",
    isRider: false,
    isStudent: false,
  });
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Dataprovider;
// import React, { createContext, useState } from "react";

// export const DataContext = createContext(null);

// const Dataprovider = ({ children }) => {
//   const [account, setAccount] = useState({
//     username: "",
//     name: "",
//     isRider: false,
//     isStudent: false,
//   });
//   return (
//     <DataContext.Provider
//       value={{
//         account,
//         setAccount,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default Dataprovider;
