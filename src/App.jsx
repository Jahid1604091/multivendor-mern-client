import React, { useState } from 'react'
import Router from './router/routes/Router';
import publicRoutes from './router/routes/publicRoutes';

export default function App() {
  const [allRoutes,setAllRoutes] = useState([...publicRoutes]);
  return <Router allRoutes={allRoutes}/>
}
