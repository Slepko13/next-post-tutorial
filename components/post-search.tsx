'use client';

import React, {FormEventHandler, useState} from 'react';
import {getPostsBySearch} from "@/services/get-posts";

type Props = {
    onSearch: (value: any[]) => void;
    onLoading: (value: boolean) => void
}

const PostSearch = ({ onSearch, onLoading }: Props) => {
    const [search, setSearch] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        onLoading(true)
        const posts  = await getPostsBySearch(search);

        onSearch(posts)
        onLoading(false)
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
