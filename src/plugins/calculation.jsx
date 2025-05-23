import React from 'react'

const calculation = ({expression}) => {
  try {
    const data = Function('"use strict"; return (' + expression + ')')();

    if (data === null || data === undefined) {
      throw new Error("Null pointer reference");
    }
    return data;
  } catch (error) {
    console.error("Error calculating expression:", error);
    return "Error calculating expression";
  }
}

export default calculation;