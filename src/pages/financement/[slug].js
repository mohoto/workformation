import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios'
import Content from '../../components/financements/Content'
import Sidebar from '../../components/financements/Sidebar'

export default function Financemnt({financements, financement}) {

const router = useRouter();
const {slug} = router.query

  return (
    <>
        <Head>
            <title>{financement?.title} - WORK FORMATION</title>
            <meta name="description" content={financement?.metaDescription} />
            <meta property="og-title" content={financement?.title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>    
        <main>
            <div className="flex px-6 py-8 mt-20 md:px-6 lg:px-12 xl:px-20 2xl:px-32 3xl:px-52">
                <div className="grid grid-flow-row gap-y-8 md:gap-x-12 md:grid-cols-3">
                    <div className="order-2 md:col-span-1 md:order-1">
                        <Sidebar financements={financements} financement={financement} />
                    </div>
                    <div className="order-1 md:col-span-2 md:order-2">
                        <Content financement={financement} />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export async function getStaticPaths() {
    const url = `${process.env.NEXT_API_URL}/api`;
    const {data} = await axios.get(`${url}/financements`);
    const paths = data.map(financement => {
        return {
            params: {
                slug: financement.slug
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
    const {data:financements} = await axios.get(`${url}/financements`)
    const {params} = context;
    const {data: financement} = await axios.get(`${url}/financements/${params.slug}`);
    return {
        props: {
            financements,
            financement
        }
    }
}
