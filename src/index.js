import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'

function ReactRoot() {
    return <App />;
}

ReactDOM.render(<ReactRoot />, document.getElementById("root"));
