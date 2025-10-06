import { useState } from "react";
import "./style/App.css";
import PageContainter from "./container/PageContainter";
import Header from "./components/Header/Header";
import '@fontsource/patrick-hand';
import RouterConfig from "./config/RouterConfig";

function App() {

   return (
      <>
         <PageContainter>
            <Header />
            <RouterConfig />
         </PageContainter>
      </>
   );
}

export default App;
