import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"
import Header from "./components/header";
import Card from "./components/home/card";
import FilterCard from "./components/home/filter";

function App() {
  return (
    <>
<Header />
<Card/>
<FilterCard/>
    </>
  );
}

export default App;
