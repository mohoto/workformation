import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios'
import Content from '@/components/blogs/Content'
import Sidebar from '@/components/blogs/Sidebar'

export default function Article({articles, categories}) {

 const router = useRouter();
 const {categorie} = router.query

  return (
    <>
        <Head>
            <title>Les infos sur les formations - WORK FORMATION</title>
            <meta name="description" content="" />
            <meta property="og-title" content="Les infos sur les formations" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-work-formation-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-work-formation-16x16.png" />
        </Head> 
        <main>
            <div className="flex px-6 py-8 lg:mt-20 md:px-6 lg:px-12 xl:px-20 2xl:px-32 3xl:px-52">
                <div className="grid grid-flow-row gap-y-8 md:gap-y-0 md:gap-x-6 md:grid-cols-3">
                    <div className="order-2 md:col-span-1 md:order-1">
                        <Sidebar articles={articles} categories={categories}/>
                    </div>
                    <div className="order-1 md:col-span-2 md:order-2">
                        <Content articles={articles} />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export async function getStaticPaths() {
    const url = process.env.NEXT_API_URL;
    const {data: articles} = await axios.get(`${url}/api/articles`);
    const paths = articles.map(article => {
        return {
            params: {
                categorie: article.categorieSlug
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const url = process.env.NEXT_API_URL;
    const {categorie} = context.params;
    
    const {data: articles} = await axios.get(`${url}/api/articles/categorie/${categorie}`)
    const {data: categories} = await axios.get(`${url}/api/categoriesBlog`);
    const {data: category} = await axios.get(`${url}/api/categoriesBlog/${categorie}`)
    return {
        props: {
            articles,
            categories,
            category
        }
    } 
} 

