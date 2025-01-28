import { useState } from "react";
import { Article } from "./Articles";

export const ArticleView = ({article}: {article: Article}) => {
    const [like, setLike] = useState<number>(Math.floor(Math.random() * 100));
    const [alreadyLiked, setAlreadyLiked] = useState<boolean>(false);

    const handleLike = () => {
        if (!alreadyLiked) {
            setLike(like + 1);
            setAlreadyLiked(true);
        }
        else {
            setLike(like - 1);
            setAlreadyLiked(false);
        }
    }

    return <>
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <div>
                <p>Number{like > 1 && "s"} of like{like > 1 && "s"}: {like}</p>
                <button onClick={handleLike}>Like</button>
            </div>
        </div>
    </>
}