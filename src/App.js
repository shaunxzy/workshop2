import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import DecorationBar from "./components/Decoration/DecorationBar";

function App() {
  return (
    <>
      <DecorationBar />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
