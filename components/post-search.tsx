'use client';

import React, {FormEventHandler, useState} from 'react';
import {getPostsBySearch} from "@/services/get-posts";
// import {usePosts} from "@/store";
// import {shallow} from "zustand/shallow";
import useSWR from "swr";

type Props = {
    onSearch: (value: any[]) => void;
    onLoading: (value: boolean) => void
}

const PostSearch = () => {
    const  { mutate } = useSWR('posts' )

    const [search, setSearch] = useState<string>('')
    // const [getPostsBySearch] = usePosts(state => [state.getPostsBySearch], shallow);
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostsBySearch(search);
        await mutate(posts)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default PostSearch;
