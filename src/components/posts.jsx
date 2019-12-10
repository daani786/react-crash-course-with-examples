import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
    //http://localhost:3000/posts?sortBy=newest&approved=true
    const { sortBy, approved } = queryString.parse(location.search);
    console.log(sortBy, approved);
    return (
        <div>
            <h2>Posts</h2>
            Year: {match.params.year} , Month: {match.params.month}
        </div>
    );
};

export default Posts;
