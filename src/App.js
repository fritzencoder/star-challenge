
import { MainLayout } from './pages/MainLayout';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import combinedReducer from './store/combinedReducer';
import thunk from 'redux-thunk';

const store = createStore(combinedReducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <MainLayout />
        </Provider>
    );
}

export default App;
