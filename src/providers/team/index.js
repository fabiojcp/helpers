import { createContext } from "react";
export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const team =  [
    {
      name: "André Silveira",
      title: "Product Owner",
      img: "https://i.imgur.com/EPQV2iv.jpg",
      LinkedIn: "https://www.linkedin.com/in/andrrms/",
      GitHub: "https://github.com/andrrms",
    },
    {
      name: "Clara Cavalcante",
      title: "Quality assurance",
      img: "https://i.imgur.com/Ba7YZPV.jpg",
      LinkedIn: "https://www.linkedin.com/in/clara-mattos-2b63b4230/",
      GitHub: "https://github.com/Clara-Carvalho",
    },
    {
      name: "Fábio Casanova",
      title: "Tech Lead",
      img: "https://i.imgur.com/ZCKn6l7.jpg",
      LinkedIn: "https://www.linkedin.com/in/f%C3%A1bio-casanova-baa818237/",
      GitHub: "https://github.com/fabiojcp",
    },
    {
      name: "Felipe Calori",
      title: "Scrum Master",
      img: "https://i.imgur.com/tvz8kjO.jpg",
      LinkedIn: "https://www.linkedin.com/in/felipe-calori-81a817214/",
      GitHub: "https://github.com/felipecalori",
    },
  ];

  return (
    <TeamContext.Provider value={{ team }}>{children}</TeamContext.Provider>
  );
};
