import React from 'react';

export const renderStack = (stack = [], { index, top, left }) => 
    stack.map((item, currIndex) => React.createElement(
        item, {
            key: `tile-${index}-${currIndex}`,
            zIndex: currIndex,
            top,
            left,
        }
    ));