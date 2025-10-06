import { useState } from "react";
import "./style/App.css";
import PageContainter from "./container/PageContainter";
import Header from "./components/Header/Header";
import RouterConfig from "./config/RouterConfig";
import '@fontsource/patrick-hand';
import '@fontsource-variable/roboto-mono';

function App() {

   return (
      <PageContainter>
         <Header />
         <RouterConfig />
      </PageContainter>
   );
}

export default App;
