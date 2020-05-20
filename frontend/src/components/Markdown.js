import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import RemarkMathPlugin from "remark-math";

function Markdown(props) {
    const newProps = {
        ...props,
        plugins: [
            RemarkMathPlugin,
        ],
        renderers: {
            ...props.renderers,
            math: (props) => <BlockMath math={props.value} />,
            inlineMath: (props) => <InlineMath math={props.value} />
        }
    };
    return (
        <ReactMarkdown {...newProps} />
    );
};

export default Markdown;