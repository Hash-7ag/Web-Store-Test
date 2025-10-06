import { useState } from "react";
import "./style/App.css";
import PageContainter from "./container/PageContainter";
import Header from "./components/Header/Header";
import RouterConfig from "./config/RouterConfig";
import '@fontsource/patrick-hand';
import '@fontsource-variable/roboto-mono';
import Loading from "./components/Loading/Loading";

function App() {

   return (
      <PageContainter>
         <Loading />
         <Header />
         <RouterConfig />
      </PageContainter>
   );
}

export default App;
