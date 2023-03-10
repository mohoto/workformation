import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios'
import SectionRappel from '@/components/common/section-rappel/SectionRappel'
import Content from '@/components/formations/Content'

export default function FormationsByCategory({formations, categories, category}) {

    const router = useRouter();
    const {categorie} = router.query;

    return (
        <>
            <Head>
                <title>Nos formations {category?.name} - WORK FORMATION</title>
                <meta name="description" content={category?.metaDescription} />
                <meta property="og-title" content={`Nos formations ${category?.name}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-work-formation-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-work-formation-16x16.png" />
            </Head> 
            <main>
                <div className="flex flex-col px-6 pb-20 mt-20 md:px-6 lg:px-6 xl:px-12 2xl:px-32 3xl:px-52">
                    <h1 className="text-3xl font-semibold text-center uppercase xl:text-4xl">NOS FORMATIONS {category?.name}</h1>
                    <div className="flex justify-center py-6">
                        <div className="relative ">
                            <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0px] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                        </div>
                    </div>
                    <div className="md:px-20 lg:px:32 xl:px-52">
                        <p className="mt-4 text-center xl:text-lg md:p-6">{category?.description}</p>
                    </div>
                    <Content formations={formations} categories={categories} categorie={categorie}/>
                </div>
                <SectionRappel /> 
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const url = process.env.NEXT_API_URL;
    const {data:formations} = await axios.get(`${url}/api/formations`)
    const paths = formations.map(formation => {
        return {
            params: {
                categorie: formation.categorieSlug
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
    const {data: formations} = await axios.get(`${url}/api/formations/categorie/${categorie}`)
    const {data: categories} = await axios.get(`${url}/api/categoriesFormation`);
    const {data: category} = await axios.get(`${url}/api/categoriesFormation/${categorie}`)
    return {
        props: {
            formations,
            categories,
            category
        }
    } 
} 