import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Provider } from 'react-redux';
import { store } from './config/store';
function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <h1>hihi</h1>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
