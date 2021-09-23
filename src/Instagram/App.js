import Header from "./header/header";
// import Story from "./story";
// import Feed from "./feed";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
// import { useEffect } from "react";

const store = createStore(rootReducer);

function Insta(){
    return (<div>
        <Provider store={store}>
    <Header />
    
    {/* <Feed /> */}
    </Provider>
    </div>)
}
export default Insta;