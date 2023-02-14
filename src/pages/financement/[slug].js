import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios'
import Content from '../../components/financements/Content'
import Sidebar from '../../components/financements/Sidebar'

export default function Financemnt() {

const router = useRouter();
const {slug} = router.query

const [financements, setFinancements] = useState();

const [financement, setFinancement] = useState();

const getFinancements = async () => {
    const {data} = await axios.get(`/api/financements`)
    setFinancements(data);
}

const getFinancement = async () => {
    const {data} = await axios.get(`/api/financements/${slug}`)
    setFinancement(data);
}

useEffect(() => {
    getFinancements();
    getFinancement();
}, [slug])

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
            <div className="flex px-6 py-8 mt-20 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
                <div className="grid grid-flow-row gap-y-8 md:gap-x-12 md:grid-cols-3">
                    <div className="order-2 md:col-span-1 md:order-1">
                        <Sidebar financements={financements} financement={financement} slug={slug} />
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
