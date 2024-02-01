import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AddPost from './components/addPost';
import Post from './components/post';

function index() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {

    }

    useEffect(() => {
        fetchPosts()
    }, []);

    const addPost = (title, body) => {

    };

    const deletePost = (id) => {

    };

    return (
        <main>
            <h1>Consuming REST api tutorial</h1>
            <AddPost addPost={addPost} />
            <section className="posts-container">
                <h2>Posts</h2>
                {posts.map((post) =>
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        deletePost={deletePost}
                    />
                )}
            </section>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 