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

  const url = process.env.NEXT_PUBLIC_API_KEY;
  console.log('url:', url)
  
  return (
    <>
      <Head>
        <title>Dévellopez vos compétences professionnelles - WORK FORMATION</title>
        <meta name="description" content="WORK FORMATION est un organisme de formation qui aide les personnes à développer leurs compétences professionnelles ou à se reconvertir professionnellement." />
        <meta property="og-title" content="Dévellopez vos compétences professionnelles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main>
        <Hero />
        <Services />
        <SectionFormationTwo />
        <Formations selectedFormations={selectedFormations}/>
        <FinancementSection />
        <SectionRappel />
         
        <Centres />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_API_URL}/api`;
  const {data: formations} = await axios.get(`${url}/formations`);
  
  return {
    props: {
      selectedFormations: formations.filter(formation => formation.id === "1" || formation.id === "9" || formation.id === "11"),
      
    }
  }
} 
