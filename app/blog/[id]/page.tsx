import {Metadata} from "next";

type Props = {
    params : {
        id: string
    }
}

async function getPostById (id: string) {
    // throw new Error('Single post error')
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next: {
            revalidate: 60
        }
    })

    return response.json();
}
export async function generateMetadata ({ params : { id }} : Props): Promise<Metadata> {

    const post = await getPostById(id)
    return {
        title: post.title
    }
}
const Post = async ({ params : { id }} : Props) => {

    const post = await getPostById(id)
    return (
        <>
            <h1>Post: {post.id}</h1>
            <h3>title: {post.title}</h3>
            <p>{post.body}</p>
        </>
    );
};

export default Post;
