const NavbarData = [
    {
        title: 'ACCEUIL',
        link: '/'
    },
    {
        title: 'NOS FORMATIONS',
        link: '/formations',
       /*  subMenu: [
            {
                title: 'NOS FORMATIONS',
                link: '/formations'
            },
            {
                title: 'TELECOM ET BTP',
                link: '/formation/telecom-btp'
            },
            {
                title: 'BUREAUTIQUE ET GESTION',
                link: '/formation/bureautique'
            },
        ] */
    },
    {
        title: 'NOTRE CENTRE',
        link: '/notre-centre'
    },
    {
        title: 'LES FINANCEMENTS',
        icon: '',
        link: '',
        subMenu: [
            {
                title: 'PÔLE EMPLOI',
                link: '/financement/financement-pole-emploi'
            },
            {
                title: 'CPF',
                link: '/financement/financement-cpf'
            },
            {
                title: 'OPCO',
                link: '/financement/financement-opco'
            },
            {
                title: 'AGEPHIP',
                link: '/financement/financement-agefiph' 
            },
            {
                title: 'CPF TRANSITION PROFESSIONNEL',
                link: '/financement/financement-cpf-transition-professionnel'
            },
        ]
    },
    {
        title: 'INFOS',
        link: '/infos',
    },
    {
        title: 'CONTACT',
        link: '/contact',
    }
];

export default NavbarData;