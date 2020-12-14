import React from 'react'
import Example from './components/example/index.jsx'
import Routes from './routes'
import { renderRoutes } from "react-router-config";
import { UserState } from './store'
import { useRecoilState } from 'recoil'

function App() {

    const [ userState, setUserState ] = useRecoilState(UserState)

    React.useEffect(() => {
        setUserState({
            name: 'iiii',
            isLogin: false
        })
    }, [ setUserState ])

    return (
        <div className="App">
            <Example></Example>
            <div>{userState.name}</div>
            {
                renderRoutes(Routes)
            }
        </div>
    );
}

export default App;