import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/Banner/Banner';
import './scss/index.scss';
import { data } from './ts/data';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<Banner data={data} />);
