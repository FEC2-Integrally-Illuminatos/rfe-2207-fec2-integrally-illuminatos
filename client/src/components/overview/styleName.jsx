import React, { useState, useEffect } from 'react';


const StyleName = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);


    return (
      <div>
        <h4>Style > {style.name}</h4>
      </div>
    );
}

export default StyleName;