import { useState } from "react";
import "./style/App.css";
import PageContainter from "./container/PageContainter";
import Header from "./components/Header/Header";
import '@fontsource/patrick-hand';

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <PageContainter>
            <Header />
         </PageContainter>
      </>
   );
}

export default App;
