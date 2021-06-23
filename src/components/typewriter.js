import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const srcText = `web developer   project manager   writer `;
    const [{ content, index }, setContent] = useState({ content: '', index: 0 });
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (index === srcText.length) return;

        const delay = setTimeout(() => {
            setContent({ content: content + srcText[index], index: index + 1 });
        }, 0 | (Math.random() * 150 + 50));
    }, [content]);

    // blinker
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink(prevState => !prevState);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return <span>{`${content}${blink ? '|' : ''}`}</span>;
};

export default Typewriter;