import { createContext } from "react";

const BookContext = createContext();

function BookProvider({ children }) {
  const arrayBooks = [
    ["El Juego de Ender", "Alfaguara", "Orson Scott Card", 50, 20.00, 25, 500.00],
    ["Cien Años de Soledad", "Editorial XYZ", "Gabriel García Márquez", 30, 15.00, 15, 225.00],
    ["1984", "Penguin Books", "George Orwell", 40, 18.00, 20, 360.00],
    ["Harry Potter y la Piedra Filosofal", "Salamandra", "J.K. Rowling", 60, 25.00, 30, 750.00],
    ["La Sombra del Viento", "Planeta", "Carlos Ruiz Zafón", 25, 22.00, 10, 220.00],
    ["Matar a un Ruiseñor", "Harper Lee", "Harper Lee", 35, 16.00, 18, 288.00],
    ["Sapiens: De Animales a Dioses", "Debate", "Yuval Noah Harari", 45, 30.00, 25, 750.00],
    ["El Hobbit", "Minotauro", "J.R.R. Tolkien", 55, 28.00, 15, 420.00],
    ["Los Pilares de la Tierra", "Plaza & Janés", "Ken Follett", 20, 24.00, 12, 288.00],
    ["Orgullo y Prejuicio", "Penguin Classics", "Jane Austen", 30, 18.50, 20, 370.00]
  ];

  const arrayEditoriales = [
    ["Alfaguara", 1, 500.00],
    ["Editorial XYZ", 1, 225.00],
    ["Penguin Books", 1, 360.00],
    ["Salamandra", 1, 750.00],
    ["Planeta", 1, 220.00],
    ["Harper Lee", 1, 288.00],
    ["Debate", 1, 750.00],
    ["Minotauro", 1, 420.00],
    ["Plaza & Janés", 1, 288.00],
    ["Penguin Classics", 1, 370.00]
  ];

  return (
    <BookContext.Provider value={{ arrayBooks, arrayEditoriales }}>
      {children}
    </BookContext.Provider>
  );
}

export { BookContext, BookProvider };