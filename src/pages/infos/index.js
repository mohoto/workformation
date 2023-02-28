import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Content from '@/components/blogs/Content'
import Sidebar from '@/components/blogs/Sidebar'

export default function Article({articles, categories}) {

  return (
    <>
        <Head>
            <title>Les infos sur les formations - WORK FORMATION</title>
            <meta name="description" content="" />
            <meta property="og-title" content="Les infos sur les formations" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
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

export async function getStaticProps () {
    const url = `${process.env.NEXT_API_URL}/api`;
    const {data: articles} = await axios.get(`${url}/articles`);
    const {data: categories} = await axios.get(`${url}/categoriesFormation`);
    return {
        props: {
            articles,
            categories
        }
    }
}
