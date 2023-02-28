import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Content from '@/components/blog/Content'
import Sidebar from '@/components/blog/Sidebar'

export default function Article({article, articles, categories}) {

  return (
    <>
        <Head>
            <title>{article?.title} - WORK FORMATION</title>
            <meta name="description" content={`${article?.contents[0].answers[0].contenu.substring(0, 155)}...`} /> 
            <meta property="og-title" content={article?.title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head> 
        <main>
            <div className="flex px-6 py-8 lg:mt-20 md:px-6 lg:px-12 xl:px-20 2xl:px-32 3xl:px-52">
                <div className="grid grid-flow-row gap-y-8 md:gap-x-12 md:grid-cols-3">
                    <div className="order-2 md:col-span-1 md:order-1">
                        <Sidebar articles={articles} article={article} categories={categories}/>
                    </div>
                    <div className="order-1 md:col-span-2 md:order-2">
                        <Content article={article} />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
export async function getStaticPaths() {
    const url = `${process.env.NEXT_API_URL}/api`;
    const {data: articles} = await axios.get(`${url}/articles`);
    const paths = articles.map(article => {
        return {
            params: {
                categorie: article.categorieSlug,
                slug: article.slug
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const url = `${process.env.NEXT_API_URL}/api`;
    const {slug} = context.params;
    const {data: articles} = await axios.get(`${url}/articles`);
    const {data: categories} = await axios.get(`${url}/categoriesBlog`);
    const {data: article} = await axios.get(`${url}/articles/${slug}`);
    return {
        props: {
            articles,
            categories,
            article
        }
    }
}