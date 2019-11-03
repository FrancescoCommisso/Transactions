import React, { createContext, useState } from "react";
import "./App.css";
import { Title } from "./components/Title";

function App() {
  return (
    <div>
      <Title title={"t1"} />
    </div>

    // <Provider value={{ state, setState }}>
    //   <Consumer>
    //     {value => (
    //       <div>
    //         <Title title={"t1"} context={value} />

    //         <Title title={"t2"} context={value} />
    //       </div>
    //     )}
    //   </Consumer>
    // </Provider>
  );
}

export default App;
