import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WebFont from 'webfontloader';
import { Helmet } from 'react-helmet';
/* Components */
import Home from './components/Home';
import Feed from './components/Feed';
import Information from './components/Information';
import Error404 from './components/Error404';
/* Favicon */
import favicon from './images/favicon.png';
import {useGetData} from './contexts/GetDataContext';

function App() {
  const {universities, fundations} = useGetData();

  WebFont.load({
    google: {
      families: ['Montserrat:300,400,500,600,700']
    }
  });

  return (
    <>
      <Helmet>
        <title>{`Bibliobeca ${new Date().getFullYear()}`}</title>
        <link rel="shortcut icon" href={favicon} sizes="16x16" type="image/x-icon" />
      </Helmet>
      
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/info/:id">
            <Information universities={universities} fundations={fundations} />
          </Route>
          <Route component={Error404}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;