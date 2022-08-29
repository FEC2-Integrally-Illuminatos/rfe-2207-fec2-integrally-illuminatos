import React, { useState, useEffect } from 'react';


const StyleName = (props) => {
  const [style, setStyle] = useState(props);

  useEffect(() => {
    setStyle(props);
  }, [props]);


    return (
      <div>
        Style > {style.name}
      </div>
    );
}


export default StyleName;