import React, {useState, createContext} from 'react';
export const BookItemsContext = createContext(null);
const {Provider} = BookItemsContext;

const BookItemsProvider = ({children}) => {
  let arr = [];
  const [bookItems, setBookItems] = useState([]);
  return <Provider value={{bookItems, setBookItems, arr}}>{children}</Provider>;
};

export default BookItemsProvider;
