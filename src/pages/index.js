import Head from 'next/head'
import axios from 'axios'
import SectionRappel from '../components/common/section-rappel/SectionRappel'
import Centres from '../components/home/Centres'
import FinancementSection from '../components/home/FinancementSection'
import Formations from '../components/home/Formations'
import Hero from '../components/home/Hero'
import SectionFormationTwo from '../components/home/SectionFormationTwo'
import Services from '@/components/home/Services'
import BlogSection from '@/components/home/BlogSection'

//const inter = Inter({ subsets: ['latin'] })

export default function Home({selectedFormations, selectedArticles}) {
  
  return (
    <>
      <Head>
        <title>Développez vos compétences professionnelles - WORK FORMATION</title>
        <meta name="description" content="WORK FORMATION est un organisme de formation qui aide les personnes à développer leurs compétences professionnelles ou à se reconvertir professionnellement." />
        <meta property="og-title" content="Dévellopez vos compétences professionnelles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-work-formation-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-work-formation-16x16.png" />
      </Head> 
      <main>
        <Hero />
        <Services />
        <SectionFormationTwo />
        <Formations selectedFormations={selectedFormations}/>
        <FinancementSection />
        <SectionRappel />
        <BlogSection selectedArticles={selectedArticles} />
        <Centres />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const url = process.env.NEXT_API_URL;
  const {data: formations} = await axios.get(`${url}/api/formations`);
  const {data: articles} = await axios.get(`${url}/api/articles`);
  return {
    props: {
      selectedFormations: formations.filter(formation => formation.id === "1" || formation.id === "11" || formation.id === "9"),
      selectedArticles: articles.filter(article => article.id === "1" || article.id === "6" || article.id === "2"),
    }
  }
} 
