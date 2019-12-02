import React from 'react';

export const Post = (props) => {

    return (
        <h1>{props.match.params.id}</h1>
    )
}