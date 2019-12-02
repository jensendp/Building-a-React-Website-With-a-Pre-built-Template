import React from 'react';
import {Link} from 'react-router-dom';

export const PostPreview = (props) => {
    return (
        <div className="post-preview">
            <Link to={`/posts/${props.post.id}`}>
                <h2 className="post-title">
                    {props.post.title}
                </h2>
                <h3 className="post-subtitle">
                    {props.post.subtitle}
                </h3>
            </Link>
            <p className="post-meta">Posted by
            <Link to="/"> {props.post.author} </Link>
            on {props.post.publication_date}</p>
        </div>
    )
}