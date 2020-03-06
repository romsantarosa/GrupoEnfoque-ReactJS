
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './Home'
import QuemSomos from './pages/QuemSomos'
import Pesquisa from './pages/Pesquisa'
import Marketing from './pages/Marketing'
import jornalBoqnews from './pages/jornalBoqnews'
import Contato from './pages/Contato'
import Solucoes from './pages/Solucoes'
import FeaturesHome from './components/features/FeaturesHome'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/quemsomos' component={QuemSomos} />
            <Route exact path='/solucoes' component={Solucoes} />
            <Route exact path='/pesquisa' component={Pesquisa} />
            <Route exact path='/marketing' component={Marketing} />
            <Route exact path='/jornal' component={jornalBoqnews} />
            <Route exact path='/contato' component={Contato} />
            <Route exact path='/solucoes' component={FeaturesHome}/>
            <Redirect exact path='*' to='/' />
        </Switch>
    </Router>,document.getElementById('root'))

