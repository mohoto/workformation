import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import axios from 'axios'
import SectionRappel from '@/components/common/section-rappel/SectionRappel'
import Content from '@/components/formations/Content'

export default function Formations({formations, categories}) {

    return (
        <>
            <Head>
                <title>Nos formations - WORK FORMATION</title>
                <meta name="description" content="La formation permet d’acquérir des compétences professionnelles. Nos formations sont accessibles à tous, salariés, indépendants ou demandeurs d’emploi." />
                <meta property="og-title" content="Nos formations" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <main>
                <div className="flex flex-col px-6 pb-20 mt-20 md:px-6 lg:px-6 xl:px-12 2xl:px-32 3xl:px-52">
                    <h1 className="text-3xl font-semibold text-center xl:text-4xl ">NOS FORMATIONS</h1>
                    <div className="flex justify-center py-6">
                        <div className="relative ">
                            <span className="before:content-[''] before:w-[100px] before:h-[5px] before:top-[0px] before:left-[-50px] before:absolute before:rounded-lg before:bg-second-50"></span>
                        </div>
                    </div>
                    <div className="md:px-20 lg:px:32 xl:px-52">
                        <p className="mt-4 text-center xl:text-lg md:p-6">La formation professionnelle, vous permet, tout au long de votre carrière d’acquérir les savoirs et compétences pour progresser en responsabilités au sein de votre entreprise ou d’organiser votre reconversion professionnelle. Nos formations sont accessibles à tous, que vous soyez salarié, indépendant ou demandeur d’emploi.</p>
                    </div>
                    <Content formations={formations} categories={categories} /> 
                </div>
                <SectionRappel /> 
            </main>
        </>
    )
}

export async function getStaticProps() {
    const url = process.env.NEXT_API_URL;
    const {data: formations} = await axios.get(`${url}/api/formations`)
    const {data: categories} = await axios.get(`${url}/api/categoriesFormation`);
    return {
        props: {
            formations,
            categories
        }
    }
} 
