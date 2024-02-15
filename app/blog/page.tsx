
import type {Metadata} from "next";
import Posts from "@/components/posts";
import PostSearch from "@/components/post-search";



async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });

    return response.json();
}
export const metadata: Metadata = {
    title: 'Next App | Blog',
}

const Blog =  () => {
    return (
        <>
            <h1>Blog Page</h1>
            <PostSearch />
             <Posts/>
        </>

    );
};

export default Blog;
