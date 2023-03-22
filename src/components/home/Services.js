import React from 'react'
import Service from './services/Service'

export default function Services() {
    return (
        <section className="relative z-30 grid px-6 pb-16 mt-10 md:-mt-12 gap-x-10 md:grid-cols-3 md:grid-rows-none md:px-6 lg:px-12 xl:px-32 2xl:px-52 3xl:px-72 gap-y-4 md:gap-y-0 lg:gap-x-6">
            <Service iconName="particulier" title="pour les particuliers" texte="Acquérir de nouvelles compétences et savoirs-faire pour atteindre des objectifs professionnels." link="/services/formation-pour-particuliers" linkText="Formation particuliers"/>
            <Service iconName="entreprise" title="pour les entreprises" texte="Améliorer la productivité des entreprises et développer les compétences de leurs employés." link="/services/formation-pour-entreprises" linkText="Formation entreprises"/>
            <Service iconName="association" title="pour les association" texte="Permettre l'insertion sociale et professionnelle des personnes en situation de précarité." link="/services/formation-pour-associations" linkText="Formation associations"/>
        </section>
    )
}
