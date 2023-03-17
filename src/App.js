import React from "react";
import "./acssets/styles/reset.css"
import "./acssets/styles/common.css";
import LayoutDefault from "./layouts";
import HomePageIndex from "./pages/home";


class App extends React.Component {
  render() {
    return (
      <div>
        <LayoutDefault>
          <HomePageIndex /> 
        </LayoutDefault>
      </div>
    );
  }
}
export default App;
