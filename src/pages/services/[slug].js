import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios'
import Content from '../../components/services/Content'
import Sidebar from '../../components/services/SideBar'

export default function Service({service, services}) {

    const router = useRouter();
    const {slug} = router.query

  return (
    <>
        <Head>
            <title>{service?.title} - WORK FORMATION</title>
            <meta name="description" content={service?.introduction} />
            <meta property="og-title" content={service?.title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-work-formation-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-work-formation-16x16.png" />
        </Head> 
        <main>
            <div className="flex px-6 py-8 mt-20 md:px-6 lg:px-12 xl:px-20 2xl:px-32 3xl:px-64">
                <div className="grid grid-flow-row gap-y-8 md:gap-x-12 md:grid-cols-3">
                    <div className="order-2 md:col-span-1 md:order-1">
                        <Sidebar services={services} service={service} slug={slug} />
                    </div>
                    <div className="order-1 md:col-span-2 md:order-2">
                        <Content service={service} />
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export async function getStaticPaths() {
    const url = process.env.NEXT_API_URL;
    const {data} = await axios.get(`${url}/api/services`);
    const paths = data.map(service => {
        return {
            params: {
                slug: service.slug
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
    const {params} = context;
    const {data:services} = await axios.get(`${url}/api/services`);
    const {data:service} = await axios.get(`${url}/api/services/${params.slug}`);
    return {
        props: {
            services,
            service
        }
    }
}

