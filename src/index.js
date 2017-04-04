import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Img1 from './images/101.jpg';
import Img2 from './images/102.jpg';
import Img3 from './images/103.jpg';
import Img4 from './images/104.jpg';

 let  Imgs=[Img1,Img2,Img3,Img4]
ReactDOM.render(
    <App Imgs={Imgs} />,
    document.getElementById('root')
)