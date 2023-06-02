export default {
presentation:{
    title: "Présentation",
    hello: "Bonjour,",
    texte: `Je m'appelle Thomas SAUVAGEOT et j'ai 29 ans. Je travaille dans le domaine du développement web. J'ai acquis de solides compétences grâce à mes études et à mon parcours professionnel.
    <br>
Je suis titulaire d'un MBA (Master of Business Administration), ce qui m'a permis de développer une vision globale des enjeux stratégiques et managériaux dans le domaine de l'informatique. Cette formation m'a apporté des connaissances approfondies en gestion de projet, en analyse des besoins et en coordination d'équipes.
En parallèle, j'ai également obtenu une licence ASI (Administrateur des Systèmes d'Information). Cette formation m'a permis de développer des compétences techniques solides dans le développement informatique.
<br>
Pour enrichir mes compétences linguistiques, j'ai décidé de me rendre à New York en 2018 pour étudier l'anglais dans une école de langue. Cette expérience m'a permis d'améliorer ma maîtrise de la langue anglaise, ce qui est un atout précieux dans le monde professionnel.
<br>
Actuellement, je travaille en tant que développeur web dans une entreprise basée à Dijon. Dans ce rôle, j'ai la chance de mettre en pratique mes compétences techniques et mon expertise pour créer des applications web innovantes et fonctionnelles.
<br>
Je suis passionné par la conception et le développement d'interfaces conviviales, et je m'efforce toujours de créer des expériences utilisateur exceptionnelles.
<br>
Je suis constamment à l'affût des dernières tendances et des nouvelles technologies dans le domaine du développement web.
<br>
Merci de votre attention, et j'espère avoir l'occasion de travailler avec vous prochainement.`,
city:'Dijon',
phone: '06.47.64.53.03',
email: 'thomassauvageot@outlook.com',
langages: 'Français, Anglais',
networks: 'Mes réseaux',
icone: {
    github : {
        icone: 'mdi-github', 
        url :'https://github.com/Thomas-T4ZERx'
        },
    linkedin: {
        icone: 'mdi-linkedin', 
        url :'https://www.linkedin.com/in/thomas-sauvageot-990480130/'
        }
    }
},
skills:{
title: 'Compétences',
skills:{
    html:{
        title:'html',
        picture:'html.png',
    },
    css:{
        title:'css',
        picture:'css.png',
    },
    php:{
        title:'php',
        picture:'php.png',
    },
    laravel:{
        title:'laravel',
        picture:'laravel.png',
    },
    vuejs:{
        title:'vuejs',
        picture:'vuejs.png',
    },
    linux:{
        title:'linux',
        picture:'linux.png',
    },
}
},
experiences:{
    title: "Expériences",
    experiences:{ 
        pageup:{
            entreprise: 'Page Up',
            date: 'Novembre 2022 – Actuellement',
            post: 'Développeur web',
            city: 'Dijon',
            description: `Développement vuejs · Laravel · PHP · MySQL · JavaScript · Linux · SQL`,
        },
        fimainfo:{
            entreprise: 'FIMAINFO',
            date: 'Août 2021 – Novembre 2022',
            post: 'Développeur web',
            city: 'Dijon',
            description: `Développement Hermes.net et JavaScript, Node.js, assistance et support
            technique, animation de réunions, rédaction de cahier des charges,
            procédures, analyse technique, établissement de plan de développement,
            établissement de planning pour la gestion de projet`,
        },
        PearConsulting:{
            entreprise: 'Pear Consulting',
            date: 'Septembre 2020 – Février 2021',
            post: 'Stage marketing et gestion de projets innovants',
            city: 'Saint-Louis',
            description: `Gestion de projets informatiques, gestion de produits, stratégie
            d’entreprise, marketing digital, étude de marché, coordination équipes de
            développement offshore, étude de dossiers clients, établissement de
            plannings prévisionnels, études de la concurrence, rédaction de plan
            marketing, assistance à la transformation digitale`,
        },
        JollietInnovation:{
            entreprise: 'Jolliet Innovation',
            date: 'Août 2016 – Août 2018',
            post: 'Alternance développement informatique',
            city: 'Gevry',
            description: `Conception d'une e-boutique (Laravel, Ajax, Jquerry)
            Conception d'un site de géolocalisation de balise en temps réel (Laravel,
            ajax, Jquerry, trigger)`,
        },
    }
},
formations:{
    title: "Formations",
    formations:{ 
        BAC:{
            school: 'Lycée Saint Joseph',
            date: '2012',
            diplome: 'Baccalauréat professionnel de comptabilité',
            city: 'Belfort',
        },
        BTS:{
            school: 'Lycée Pasteur Mont Roland',
            date: '2015',
            diplome: 'BTS SIO (Services informatiques aux organisations)',
            city: 'Dole',
        },
        Licence:{
            school: 'Lycée Pasteur Mont Roland',
            date: '2018',
            diplome: 'Licence ASI (Administrateur de système d’information)',
            city: 'Dole',
        },
        ECNewYork:{
            school: 'EC New-York',
            date: '2019',
            diplome: 'Oxford test certificate',
            city: 'New-York',
        },
        Master:{
            school: 'EC2M',
            date: '2021',
            diplome: 'MBA (Master of Business Administration)',
            city: 'Dijon',
        },
    }
},
realisations:{
    title: "Réalisations",
    realisations:{ 
        devandtech:{
            enterprise: 'Dev&Tech',
            description: 'refonte en cours',
            langages: `Vue.js`,
            url: 'https://www.devandtech.fr/',
            image:"devandtech.png"
        },
        essert:{
            enterprise: `mairie d’Essert`,
            description: '',
            langages: 'wordpress',
            url: 'https://www.essert.fr/',
            image:"essert.png"
        },
        Dokuritsu:{
            enterprise: 'Projet personnel',
            description: `Développement d’un site pour les livres`,
            langages: 'Laravel, Vue.js et SQL',
            url: '',
            image:"dokuritsu.png"
        },
        montRoland:{
            enterprise: `Projet d'études`,
            description: `Site d'informations pour l'école Pasteur Mont Roland Dole`,
            langages: 'Laravel,Javascript et SQL',
            url: '',
            image:"pasteur.png"
        },
        portfolio:{
            enterprise: `portfolio`,
            description: '',
            langages: 'Vue.js',
            url: 'https://sauvageotthomas.fr/',
            image:"picture.jpg"
        },
        USARBOIS:{
            enterprise: `US ARBOIS`,
            description: '',
            langages: 'Laravel et SQL',
            url: 'https://usarboisrugby.com/',
            image:"arbois.jpg"
            
        },
    }
},
mentions:{
    description1:`Informations générales :<br>
    SAUVAGEOT Thomas<br>
    151 rue d'auxonne 21000 Dijon<br>
    thomassauvageot@outlook.com<br>
    06.47.64.53.03<br>
    `,
    description2:`Propriété intellectuelle :<br>
    Tous les contenus présents sur ce portfolio en ligne, y compris, mais sans s'y limiter, les textes, les images, les vidéos, les graphiques et les logos, sont la propriété intellectuelle de SAUVAGEOT Thomas, sauf indication contraire. Toute utilisation non autorisée de ces contenus est strictement interdite.
    `,
    description3:`Responsabilité :<br>
    Je m'efforce de maintenir les informations présentes sur ce portfolio en ligne à jour et exactes. Cependant, je ne peux garantir ni l'exactitude ni l'exhaustivité de ces informations. Par conséquent, je décline toute responsabilité quant aux dommages ou pertes découlant de l'utilisation de ce portfolio en ligne. 
    `,
    description4:`Liens externes :<br>
    Ce portfolio en ligne peut contenir des liens vers des sites externes. Je n'ai aucun contrôle sur le contenu ou la disponibilité de ces sites et je ne peux être tenu responsable des dommages ou pertes découlant de leur utilisation. 
    `,
    description5:`Collecte de données :<br>
    Je peux collecter des données personnelles, telles que votre nom et votre adresse e-mail, lorsque vous utilisez ce portfolio en ligne. Ces données seront utilisées uniquement dans le but de répondre à vos demandes et de vous fournir les informations demandées. Je m'engage à respecter la législation française sur la protection des données et à ne pas partager vos informations personnelles avec des tiers sans votre consentement.
    `,
    description6:`Cookies :<br>
    Ce portfolio en ligne utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à analyser les habitudes de navigation des utilisateurs et à fournir des fonctionnalités personnalisées. Vous pouvez refuser l'utilisation des cookies en modifiant les paramètres de votre navigateur, mais cela peut affecter le bon fonctionnement du site.
    `,
    description7:`Droit applicable :<br>
    Ces mentions légales sont régies par le droit français. Tout litige découlant de l'utilisation de ce portfolio en ligne sera soumis à la compétence exclusive des tribunaux français.
     `,
},
politiques:{
    description1:`Nous accordons une grande importance à la confidentialité de vos informations personnelles. Cette politique de confidentialité explique comment nous traitons et protégeons les données que vous pourriez nous fournir lors de votre visite sur notre portfolio en ligne.
    `,
    description2:`Collecte de données personnelles :<br>
    Nous tenons à vous informer que nous ne collectons aucune donnée personnelle identifiable lorsque vous visitez notre portfolio en ligne. Nous ne demandons ni ne stockons aucune information personnelle telle que votre nom, adresse e-mail, numéro de téléphone, ou toute autre donnée similaire.
    `,
    description3:`Utilisation des cookies :<br>
    Nous utilisons des cookies pour améliorer votre expérience de navigation sur notre portfolio en ligne. Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous accédez à notre site. Ces cookies nous aident à analyser les habitudes de navigation des utilisateurs et à fournir des fonctionnalités personnalisées. Cependant, ces cookies ne collectent pas d'informations personnelles identifiables.
    `,
    description4:`Partage d'informations :<br>
    Étant donné que nous ne collectons aucune donnée personnelle, nous ne partageons pas vos informations avec des tiers. Nous ne vendons, n'échangeons, ni ne transférons de quelque manière que ce soit des informations personnelles à des tiers.
    `,
    description5:`Liens externes :<br>
    Notre portfolio en ligne peut contenir des liens vers d'autres sites web. Veuillez noter que nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites externes. Nous vous encourageons à consulter les politiques de confidentialité de ces sites tiers avant de fournir toute information personnelle.
    `,
    description6:`Sécurité des données :<br>
    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger les informations que vous nous avez fournies contre tout accès non autorisé, toute divulgation, toute altération ou destruction. Cependant, veuillez noter que malgré nos efforts, aucune méthode de transmission de données sur Internet ou de stockage électronique n'est totalement sécurisée. Nous ne pouvons donc pas garantir une sécurité absolue.
    `,
    description7:`Modification de la politique de confidentialité :<br>
    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page, et la date de mise à jour en haut de cette page sera révisée. Nous vous encourageons à consulter régulièrement cette politique de confidentialité pour rester informé des éventuelles mises à jour.
    `, 
    description8:`Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à thomassauvageot@outlook.com.
    `, 
}
}