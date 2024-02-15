import  { create } from 'zustand';
import {getAllPosts, getPostsBySearch} from "@/services/get-posts";

type UserPosts = {
    posts: any[];
    loading: boolean;
    getAllPost: () => Promise<void>;
    getPostsBySearch: (search: string) => Promise<void>
}

export const usePosts = create<UserPosts>()(set => ({
    posts: [],
    loading: false,
    getAllPost: async () => {
        set({ loading: true})
        const posts = await getAllPosts()
        set({ posts })
        set({ loading: false })
    },
    getPostsBySearch: async (search) => {
        set({ loading: true})
        const posts = await getPostsBySearch(search)
        set({ posts })
        set({ loading: false })
    },
    }))
