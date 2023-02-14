import React from 'react'
import Service from './services/Service'

export default function Services() {
    return (
        <section className="relative z-30 grid items-center px-6 pb-16 mt-10 md:-mt-12 gap-x-10 md:grid-cols-3 md:grid-rows-none md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52 gap-y-4 md:gap-y-0">
            <Service iconName="particulier" title="pour les particuliers" texte="Permet d'acquérir de nouvelles compétences et connaissances pour atteindre des objectifs professionnels" link="/services/formation-pour-particuliers" linkText="Formation particuliers"/>
            <Service iconName="entreprise" title="pour les entreprises" texte="Permet de nombreux avantages aux entreprises et à leurs employés en améliorant les compétences et la productivité" link="/services/formation-pour-entreprises" linkText="Formation entreprises"/>
            <Service iconName="association" title="pour les association" texte="Permet l'insertion sociale et professionnelle des personnes en difficultés et de lutter contre l'exclusion sociale" link="/services/formation-pour-associations" linkText="Formation associations"/>
        </section>
    )
}
