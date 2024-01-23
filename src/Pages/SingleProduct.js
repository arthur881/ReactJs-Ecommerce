import { useState } from 'react';


import Header from "../Components/Header";
import { useParams } from "react-router-dom";

import { useGetProductsQuery, useGetProductCommentsQuery, usePostCommentMutation } from "../Services/API";
import CardProduct from "../Components/CardProduct";



export default function() {
    let { data, isFetching } = useGetProductsQuery()
    let { id } = useParams()
    let product = data?.find((product) => product.id === id);

    let {data: commentsData, isFetching: commentsIsFetching} = useGetProductCommentsQuery(id)


    let [postComment, { isLoading }] = usePostCommentMutation()
    let [username, setUsername] = useState('');
    let [comment, setComment] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    postComment({ id, username, comment });
    setUsername('');
    setComment('');
}

    return (
        <div>
            <Header />
            <a href="/">Back to home</a>
            {
                isFetching ? <p>Loading</p> : <div>

                <br />
                <CardProduct {...product} />
                </div>
            }
            <br />

            <form name="formComment" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button>Post</button>
            </form>

            <h2>Comments : </h2>
            {
                commentsIsFetching ? <p>Loading</p> : <div>
                    {
                        commentsData.map((comment) => {
                            return <div key={comment.id}>
                                <h3>{comment.username}</h3>
                                <p>{comment.comment}</p>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    );
}
