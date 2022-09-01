import React, { useState, useEffect } from 'react';
import InlineMessage from '@atlaskit/inline-message';


const Alert = (props) => {
  const [alert, setAlert] = useState(props.alert);

  useEffect(() => {
    setAlert(props.alert);
  }, [props]);


  if (alert) {
    return (
      <div>
        <InlineMessage appearance="warning" secondaryText="Please Select Size">
          <p>
            <strong>Select a Size to Add to Cart</strong>
          </p>
        </InlineMessage>
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
}


export default Alert;
