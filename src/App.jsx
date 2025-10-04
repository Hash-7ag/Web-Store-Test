import { useState } from "react";
import "./style/App.css";
import PageContainter from "./container/PageContainter";
import Header from "./components/Header/Header";
import '@fontsource/patrick-hand';
import ProductList from "./components/Products/ProductList";

function App() {

   return (
      <>
         <PageContainter>
            <Header />
            <ProductList />
         </PageContainter>
      </>
   );
}

export default App;
