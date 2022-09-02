import React, { useState, useEffect } from 'react';
import { Checkmark } from 'react-checkmark'


const Detail = (props) => {
  const [detail, setDetail] = useState(props.detail);

  useEffect(() => {
    setDetail(props.detail);
  }, []);

  if (!!detail.feature && !detail.value) {
    return (
      <div>
        <span>&#10003;</span>
        &nbsp;&nbsp;&nbsp;{detail.feature}
      </div>
    );
  } else if (detail.feature && detail.value) {
    return (
      <div>
        <span>&#10003;</span>
        &nbsp;&nbsp;&nbsp;{detail.feature}:&nbsp;&nbsp;{detail.value}
      </div>
    );
  } else {
    return (
      <div>
      </div>
    )
  }
}


export default Detail;