import React from 'react';
import { Text, Context } from 'react-mathjax2';

function MathRender({ source }) {
  return (
    <Context
      input="ascii"
      onLoad={() => console.log('Loaded MathJax script!')}
      onError={(MathJax, error) => {
        console.warn(error);
        console.log('Encountered a MathJax error, re-attempting a typeset!');
        MathJax.Hub.Queue(MathJax.Hub.Typeset());
      }}
      options={{
        asciimath2jax: {
          useMathMLspacing: true,
          delimiters: [['$$', '$$']],
          preview: 'none',
        },
      }}
    >
      <Text text={source} />
    </Context>
  );
}

export default MathRender;
