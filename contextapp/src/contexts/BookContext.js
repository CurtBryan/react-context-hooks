import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Chamber of Secrets", id: 1 },
    { title: "Goblet of Fire", id: 2 },
    { title: "Gone Bamboo", id: 3 },
    { title: "Kitchen Confidential", id: 4 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
