import React from "react";

import * as Icons from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
const  DynamicFaIcon = ({ name }) => {
    const IconComponent = Icons[name];
  
    if (!IconComponent) { // Return a default one
      return <DiJavascript1 />;
    }
  
    return <IconComponent />;
  };


export default DynamicFaIcon;