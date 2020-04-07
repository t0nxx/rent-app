import React from 'react';
import './App.css';
import AppRouterWrapper from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faLongArrowAltDown, faLongArrowAltUp, faGripVertical, faList } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faLongArrowAltDown, faLongArrowAltUp, faGripVertical, faList)



function App() {
  return (
    <AppRouterWrapper>
      <div className='App' />
    </AppRouterWrapper>
  );
}

export default App;
