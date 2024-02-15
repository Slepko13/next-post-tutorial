'use client';

import type {Metadata} from "next";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllPosts} from "@/services/get-posts";
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
// export const metadata: Metadata = {
//     title: 'Next App | Blog',
// }

const Blog =  () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false))

    }, [])
    // const posts = await getData()
    return (
        <>
            <h1>Blog Page</h1>
            <PostSearch onSearch={setPosts} onLoading={setLoading}/>
            {loading ? <h3>Loading...</h3> : <Posts posts={posts}/>}
        </>

    );
};

export default Blog;
