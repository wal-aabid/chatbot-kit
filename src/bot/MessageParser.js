import React from 'react';
import ActionProvider from './ActionProvider';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        actions.handleAPI(message);
    };
    console.log(children);
  return (
    <div>
      {
        React.Children.map(children, (child) => {
            return React.cloneElement(child, {
            parse: parse,
            actions: {ActionProvider},
            });
        })}
    </div>
  );
};

export default MessageParser;