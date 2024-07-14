import React from 'react';
import Optional from 'optional-js';

export default function AlertBox(props) {
  const optionalMessageOptions
    = Optional.ofNullable(props.messageOptions);

  if (!optionalMessageOptions.isPresent()) return null;

  const messageOptions = optionalMessageOptions.get();

  return (
    <div style={{backgroundColor: messageOptions.backgroundColor}}>
      {messageOptions.message}
    </div>
  );
}
