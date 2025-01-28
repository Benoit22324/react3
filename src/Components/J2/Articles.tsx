import axios from "axios"
import { useEffect, useState } from "react"
import { ArticleView } from "./ArticleView"

export type Article = {
    userId: number
    id: number
    title: string
    body: string
}

export const Articles = () => {
    const [articles, setArticles] = useState<Article[] | null>(null)

    const fetchData = async (): Promise<void> => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");

            if (response.data) setArticles(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <>
        {
            articles && articles.map((article: Article) => <ArticleView key={article.id} article={article} />)
        }
    </>
}
