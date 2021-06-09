import React from 'react';
import useContactData from '../../../hooks/usecontactdata';

const Email = () => {
    const { email } = useContactData();
    return <a href={`mailto:${email}`}>{email}</a>;
};

export default Email;