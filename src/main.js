/**
 * Created by UCHATNU on 7/4/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import CheckboxWithLabel from "./components/CheckboxWithLabel/checkbox-with-label";

ReactDOM.render(
    <ButtonComponent name="Counter Button"/>,
    document.getElementById('app')
);

<hr/>

ReactDOM.render(
    <CheckboxWithLabel labelOn="ON" labelOff="OFF" />,
    document.getElementById('app-1')
);


