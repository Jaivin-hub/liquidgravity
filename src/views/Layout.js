import React, { useState } from 'react';
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const Layout = ({ children }) =>
{
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {React.Children.map(children, child =>
      {
        // clone the child and pass down the isActive state
        return React.cloneElement(child, { isActive });
      })}
    </>
  );
};

export default Layout;
