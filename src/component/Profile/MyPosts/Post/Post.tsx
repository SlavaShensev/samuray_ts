import React from 'react';
import {PostType} from '../../../..';
import p from "./Post.module.css";

const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <img className={p.logoPost}
                 src={'https://images-platform.99static.com//koDOE6XSPahJa1HGgz-I' +
                 'Xn3GQH0=/164x157:1126x1119/fit-in/590x590/projects-files/32/3245/324578/fc' +
                 'c8836a-549c-4233-9c88-644de9329a17.jpg'}/>
            {props.message}
            <div>
                <span>
                    {props.message}
                </span>
            </div>
        </div>
    )
}

export default Post;


