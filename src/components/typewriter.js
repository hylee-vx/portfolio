import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const initialList = ['web developer', ' project manager', ' writer '];
    const [roleList, setRoleList] = useState(initialList);
    const [content, setContent] = useState('');
    const [index, setIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [currentRole, setCurrentRole] = useState('');

    // sets next item in array as currentRole 
    const getNewWord = () => {
        if (!roleList.length) { return; }
        setTimeout(() => {
            // deletes item in array after it has been typed out
            // sets next item as currentRole to be typed out
            const role = roleList.splice(0, 1)[0];
            setRoleList([...roleList]);
            setIndex(0);
            setCurrentRole(role);
        }, (Math.random() * 750 + 50))
    };

    useEffect(() => {
        // fetches next item in array if currentRole typed out completely
        if (index === currentRole.length) {
            getNewWord();
            return;
        }

        // types out each letter/space in currentRole
        setTimeout(() => {
            setIndex(index + 1);
            setContent(content + currentRole[index]);
        }, (Math.random() * 150 + 50));
    }, [content, currentRole]);

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