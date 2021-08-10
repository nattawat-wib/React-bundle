import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const {title} = useParams();
    const [articleDetail, setArticleDetail] = useState('');

    useEffect( async () => {
        let data = await axios.get(`http://localhost:8000/article/${title}`).then(resp => resp.data)
        setArticleDetail(data)
    }, [])

    console.log(articleDetail + " daw dawd awd")

    return (
        <main>
            <section>
                <h1> {articleDetail.title} </h1>
                <p> {articleDetail.desc} </p>
                <p> {articleDetail.date} </p>
            </section>
        </main>
    )
}

export default ArticleDetail
