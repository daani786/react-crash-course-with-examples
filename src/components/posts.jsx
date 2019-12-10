import React from "react";

const Posts = ({ match }) => {
    return (
        <div>
            <h2>Posts</h2>
            Year: {match.params.year} , Month: {match.params.month}
        </div>
    );
};

export default Posts;
