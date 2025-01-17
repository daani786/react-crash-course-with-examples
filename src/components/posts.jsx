import "react-toastify/dist/ReactToastify.css";

import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import config from "../config.json";
import http from "../services/httpService";

class Posts extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        // pending > resolved (success) OR rejected (failure)
        const { data: posts } = await http.get(config.apiEndpoint);
        this.setState({ posts });
    }

    handleAdd = async () => {
        const obj = { title: "a", body: "b" };
        const { data: post } = await http.post(config.apiEndpoint, obj);

        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    };

    handleUpdate = async post => {
        post.title = "Updated";
        await http.put(config.apiEndpoint + "/" + post.id, post);

        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = { ...post };
        this.setState({ posts });
    };
    handleDelete = async post => {
        const originalPosts = this.state.posts;

        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });

        try {
            //await http.delete(config.apiEndpoint + "/" + post.id);
            //throw new Error("");

            //await http.delete(config.apiEndpoint + "/999"); //for expected errors
            await http.delete("s" + config.apiEndpoint + "/" + post.id); // for unexpected errors

            toast.success("Record deleted successfuly.");
        } catch (ex) {
            console.log("handle delete catch block");
            // Expected
            // Invalid id => 404 : not found
            // Invalid data submited => 400 : bad request
            // these kind of error are client errors
            //- Display a specific error message
            if (ex.response && ex.response.status === 404) {
                alert("This post has already been deleted.");
            }
            //
            // Unexpected (network down, server down, db down, bug in application code)
            // - Log them
            // - Display a generic and friendly error message

            //alert("Something failed while deleting a post!");
            this.setState({ posts: originalPosts });
        }
    };

    render() {
        return (
            <React.Fragment>
                <ToastContainer />

                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => this.handleUpdate(post)}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.handleDelete(post)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Posts;
