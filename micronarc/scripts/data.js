const participants = {
  "FELCO SA": {
    dimensions: {
      CX: { criterias: { CX1: 3, CX2: 3, CX3: 3 }, score: 3.0 },
      PI: { criterias: { PI1: 4, PI2: 2, PI3: 4 }, score: 3.3333333333333335 },
      ST: { criterias: { ST1: 4, ST2: 4 }, score: 4.0 },
      OR: { criterias: { OR1: 3, OR2: 4, OR3: 5 }, score: 4.0 },
      PD: { criterias: { PD1: 3, PD2: 2, PD3: 2 }, score: 2.3333333333333335 },
      CO: { criterias: { CO1: 3, CO2: 3, CO3: 3 }, score: 3.0 },
      CU: { criterias: { CU1: 3, CU2: 3, CU3: 3 }, score: 3.0 },
      IT: { criterias: { IT1: 2, IT2: 3, IT3: 3, IT4: 3 }, score: 2.75 },
      TM: { criterias: { TM1: 1, TM2: 3, TM3: 3 }, score: 2.3333333333333335 },
    },
    company_name: "FELCO SA",
    maturity_level: 3.08,
  },
  "Maturité digitale globale": {
    dimensions: {
      CX: { score: 2.486559139784946, criterias: { CX1: 2.7419354838709675, CX2: 2.306451612903226, CX3: 2.411290322580645 } },
      PI: { score: 2.532258064516129, criterias: { PI1: 2.661290322580645, PI2: 2.2661290322580645, PI3: 2.6693548387096775 } },
      ST: { score: 2.713709677419355, criterias: { ST1: 2.5725806451612905, ST2: 2.8548387096774195 } },
      OR: { score: 2.8736559139784945, criterias: { OR1: 2.403225806451613, OR2: 3.024193548387097, OR3: 3.193548387096774 } },
      PD: { score: 2.4704301075268815, criterias: { PD1: 2.8629032258064515, PD2: 2.564516129032258, PD3: 1.9838709677419355 } },
      CO: { score: 2.8440860215053765, criterias: { CO1: 2.903225806451613, CO2: 2.661290322580645, CO3: 2.967741935483871 } },
      CU: { score: 2.7795698924731185, criterias: { CU1: 2.9596774193548385, CU2: 2.5806451612903225, CU3: 2.7983870967741935 } },
      IT: { score: 2.590725806451613, criterias: { IT1: 1.9112903225806452, IT2: 2.870967741935484, IT3: 2.806451612903226, IT4: 2.774193548387097 } },
      TM: { score: 2.389784946236559, criterias: { TM1: 2.2016129032258065, TM2: 2.0725806451612905, TM3: 2.8951612903225805 } },
    },
    company_name: "Maturité digitale globale",
    maturity_level: 2.5,
  },
  "Sored SA": {
    dimensions: {
      CX: { criterias: { CX1: 1, CX2: 1, CX3: 3 }, score: 1.6666666666666667 },
      PI: { criterias: { PI1: 1, PI2: 2, PI3: 2 }, score: 1.6666666666666667 },
      ST: { criterias: { ST1: 3, ST2: 2 }, score: 2.5 },
      OR: { criterias: { OR1: 1, OR2: 3, OR3: 3 }, score: 2.3333333333333335 },
      PD: { criterias: { PD1: 3, PD2: 2, PD3: 3 }, score: 2.6666666666666665 },
      CO: { criterias: { CO1: 2, CO2: 1, CO3: 2 }, score: 1.6666666666666667 },
      CU: { criterias: { CU1: 3, CU2: 3, CU3: 3 }, score: 3.0 },
      IT: { criterias: { IT1: 1, IT2: 4, IT3: 2, IT4: 4 }, score: 2.75 },
      TM: { criterias: { TM1: 4, TM2: 2, TM3: 4 }, score: 3.3333333333333335 },
    },
    company_name: "Sored SA",
    maturity_level: 2.39,
  },
  Medtronic: {
    dimensions: {
      CX: { criterias: { CX1: 2, CX2: 1, CX3: 4 }, score: 2.3333333333333335 },
      PI: { criterias: { PI1: 2, PI2: 4, PI3: 1 }, score: 2.3333333333333335 },
      ST: { criterias: { ST1: 3, ST2: 4 }, score: 3.5 },
      OR: { criterias: { OR1: 1, OR2: 3, OR3: 2 }, score: 2.0 },
      PD: { criterias: { PD1: 3, PD2: 4, PD3: 4 }, score: 3.6666666666666665 },
      CO: { criterias: { CO1: 3, CO2: 3, CO3: 4 }, score: 3.3333333333333335 },
      CU: { criterias: { CU1: 4, CU2: 3, CU3: 4 }, score: 3.6666666666666665 },
      IT: { criterias: { IT1: 3, IT2: 3, IT3: 3, IT4: 3 }, score: 3.0 },
      TM: { criterias: { TM1: 3, TM2: 3, TM3: 3 }, score: 3.0 },
    },
    company_name: "Medtronic",
    maturity_level: 2.39,
  },
  "Ressorts Industriels SA": {
    dimensions: {
      CX: { criterias: { CX1: 2, CX2: 3, CX3: 2 }, score: 2.3333333333333335 },
      PI: { criterias: { PI1: 2, PI2: 1, PI3: 3 }, score: 2.0 },
      ST: { criterias: { ST1: 1, ST2: 2 }, score: 1.5 },
      OR: { criterias: { OR1: 2, OR2: 4, OR3: 4 }, score: 3.3333333333333335 },
      PD: { criterias: { PD1: 1, PD2: 4, PD3: 2 }, score: 2.3333333333333335 },
      CO: { criterias: { CO1: 3, CO2: 3, CO3: 3 }, score: 3.0 },
      CU: { criterias: { CU1: 3, CU2: 3, CU3: 4 }, score: 3.3333333333333335 },
      IT: { criterias: { IT1: 1, IT2: 3, IT3: 2, IT4: 3 }, score: 2.25 },
      TM: { criterias: { TM1: 2, TM2: 2, TM3: 3 }, score: 2.3333333333333335 },
    },
    company_name: "Ressorts Industriels SA",
    maturity_level: 2.49,
  },
  "FAJI SA": {
    dimensions: {
      CX: { criterias: { CX1: 4, CX2: 3, CX3: 5 }, score: 4.0 },
      PI: { criterias: { PI1: 3, PI2: 3, PI3: 5 }, score: 3.6666666666666665 },
      ST: { criterias: { ST1: 3, ST2: 4 }, score: 3.5 },
      OR: { criterias: { OR1: 1, OR2: 5, OR3: 5 }, score: 3.6666666666666665 },
      PD: { criterias: { PD1: 5, PD2: 3, PD3: 2 }, score: 3.3333333333333335 },
      CO: { criterias: { CO1: 3, CO2: 3, CO3: 5 }, score: 3.6666666666666665 },
      CU: { criterias: { CU1: 4, CU2: 3, CU3: 3 }, score: 3.3333333333333335 },
      IT: { criterias: { IT1: 1, IT2: 5, IT3: 3, IT4: 3 }, score: 3.0 },
      TM: { criterias: { TM1: 2, TM2: 1, TM3: 5 }, score: 2.6666666666666665 },
    },
    company_name: "FAJI SA",
    maturity_level: 3.42,
  },
  "HL-Technology SA": {
    dimensions: {
      CX: { criterias: { CX1: 3, CX2: 4, CX3: 3 }, score: 3.3333333333333335 },
      PI: { criterias: { PI1: 4, PI2: 3, PI3: 4 }, score: 3.6666666666666665 },
      ST: { criterias: { ST1: 4, ST2: 5 }, score: 4.5 },
      OR: { criterias: { OR1: 4, OR2: 5, OR3: 4 }, score: 4.333333333333333 },
      PD: { criterias: { PD1: 3, PD2: 5, PD3: 2 }, score: 3.3333333333333335 },
      CO: { criterias: { CO1: 3, CO2: 4, CO3: 5 }, score: 4.0 },
      CU: { criterias: { CU1: 3, CU2: 4, CU3: 4 }, score: 3.6666666666666665 },
      IT: { criterias: { IT1: 2, IT2: 5, IT3: 4, IT4: 2 }, score: 3.25 },
      TM: { criterias: { TM1: 4, TM2: 4, TM3: 5 }, score: 4.333333333333333 },
    },
    company_name: "HL-Technology SA",
    maturity_level: 3.82,
  },
  "NID SA": {
    dimensions: {
      CX: { criterias: { CX1: 5, CX2: 5, CX3: 5 }, score: 5.0 },
      PI: { criterias: { PI1: 4, PI2: 3, PI3: 3 }, score: 3.3333333333333335 },
      ST: { criterias: { ST1: 4, ST2: 5 }, score: 4.5 },
      OR: { criterias: { OR1: 3, OR2: 4, OR3: 5 }, score: 4.0 },
      PD: { criterias: { PD1: 4, PD2: 4, PD3: 2 }, score: 3.3333333333333335 },
      CO: { criterias: { CO1: 3, CO2: 5, CO3: 4 }, score: 4.0 },
      CU: { criterias: { CU1: 4, CU2: 4, CU3: 4 }, score: 4.0 },
      IT: { criterias: { IT1: 1, IT2: 4, IT3: 4, IT4: 5 }, score: 3.5 },
      TM: { criterias: { TM1: 3, TM2: 2, TM3: 4 }, score: 3.0 },
    },
    company_name: "NID SA",
    maturity_level: 3.85,
  },
};

const questions = {
  CX: {
    questions: {
      CX1: {
        name: "Interaction avec le client",
        answers: [
          { 1: "Nous interagissons avec nos clients à travers des canaux traditionnels uniquement." },
          { 2: "Nous interagissons avec nos clients à travers des canaux traditionnels et numériques indépendants." },
          { 3: "Les contenus délivrés aux clients sont appropriés au canal numérique." },
          { 4: "Plusieurs canaux d'interactions sont complémentaires et partiellement intégrés." },
          { 5: "L'expérience client est cohérente et homogène d'un canal à l'autre." },
        ],
      },
      CX2: {
        name: "Analyse des données",
        answers: [
          { 1: "Nous ne collectons pas de données clients." },
          { 2: "Nous collectons des données clients." },
          { 3: "Nous analysons les données clients." },
          { 4: "Nous effectuons des analyses prédictives à partir des données clients." },
          { 5: "Nous effectuons des analyses prescriptives à partir des données clients." },
        ],
      },
      CX3: {
        name: "Protection des données",
        answers: [
          { 1: "Les données personnelles ne sont pas identifiées." },
          { 2: "La collecte et l'exploitation des données sont effectuées dans le respect des recommandations." },
          { 3: "Nous avons développé un ensemble de procédures et processus en matière de protection des données." },
          { 4: "Nous avons un niveau élevé d'expertise en matière de protection des données." },
          { 5: "Nous appliquons les meilleures pratiques en matière de protection des données." },
        ],
      },
    },
    description: "Réponds à l’attente des clients vis-à-vis des services et produits digitaux qu’ils tiennent pour acquis.",
    code: "CX",
    name: "Expérience client",
    order: 2,
  },
  PI: {
    questions: {
      PI1: {
        name: "Développement des affaires",
        answers: [
          { 1: "Nous n'intégrons pas le numérique dans notre modèle d'affaires." },
          { 2: "Nos activités sont soutenues par le numérique." },
          { 3: "Certains aspects de notre modèle d'affaires sont complétés par le numérique." },
          { 4: "Une innovation sur la base d'une technologie numérique contribue à augmenter nos revenus." },
          { 5: "Le développement de notre entreprise exploite complètement et systématiquement des technologies numériques." },
        ],
      },
      PI2: {
        name: "Soutien à l'innovation",
        answers: [
          { 1: "Il n'y a pas de soutien spécifique à l'innovation." },
          { 2: "Nous suivons quelques pratiques adaptées à l'innovation." },
          { 3: "Nous suivons un processus adapté à l'innovation." },
          { 4: "Nous disposons d'un ensemble d'outils et de pratiques adaptés à l'innovation." },
          { 5: "Notre entreprise offre un soutient complet à l'innovation." },
        ],
      },
      PI3: {
        name: "Implication du client",
        answers: [
          { 1: "Nous n'impliquons pas nos clients dans le développement d'innovations numériques." },
          { 2: "Nous impliquons nos clients de manière informelle." },
          { 3: "Nous impliquons nos clients de manière formelle et occasionnelle." },
          { 4: "Nous impliquons nos clients de manière formelle et régulière." },
          { 5: "Nos clients sont  au centre du processus d'innovation numérique." },
        ],
      },
    },
    description: "Soutien de la direction et reconnaissance de l’opportunité que représente la transformation digitale.",
    code: "PI",
    name: "Innovation des produits et des services",
    order: 3,
  },
  ST: {
    questions: {
      ST1: {
        name: "Innovation numérique",
        answers: [
          { 1: "Notre stratégie ne passe pas par l'innovation numérique." },
          { 2: "Nous avons analysé les opportunités d'innovation numérique." },
          { 3: "L'innovation numérique est intégrée dans notre stratégie." },
          { 4: "L'innovation numérique joue un rôle stratégique majeur." },
          { 5: "Nous avons développé un programme d'innovation numérique." },
        ],
      },
      ST2: {
        name: "Engagement numérique",
        answers: [
          { 1: "Nous n'avons pas encore engagé de ressource pour mener des projets numériques." },
          { 2: "Nous avons planifié des projets numériques." },
          { 3: "Des preuves de concepts et prototypes s'appuyant sur le numérique ont abouti." },
          { 4: "Des projets numériques d'importance stratégique ont abouti." },
          { 5: "De nombreux projets numériques ont abouti et ce type de projet est autant important que les activités quotidiennes." },
        ],
      },
    },
    description: "Incorporation du digital au sein de la stratégie de l’organisation.",
    code: "ST",
    name: "Stratégie",
    order: 4,
  },
  OR: {
    questions: {
      OR1: {
        name: "Equipe de projet numérique",
        answers: [
          { 1: "Nous n'avons pas d'équipe dédiée aux projets numériques." },
          { 2: "Nos équipes dédiées aux projets numériques sont composées de collaborateurs d'une même fonction." },
          { 3: "Nos équipes dédiées aux projets numériques sont inter-fonctionnelles." },
          { 4: "Nos équipes dédiées aux projets numériques sont inter-fonctionnelles et ont une vision commune." },
          { 5: "Nos équipes dédiées aux projets numériques sont performantes grâce à leur configuration optimale." },
        ],
      },
      OR2: {
        name: "Agilité organisationnelle",
        answers: [
          { 1: "Nous ne sommes pas en mesure de réagir aux changements de notre environnement." },
          { 2: "Nous avons analysé les changements de notre environnement." },
          { 3: "Nous avons mené quelques actions pour nous adapter aux changements de notre environnement." },
          { 4: "Nous sommes en mesure de réagir rapidement aux changements de notre environnement." },
          { 5: "La capacité à nous réinventer fait partie de notre ADN." },
        ],
      },
      OR3: {
        name: "Partenaires",
        answers: [
          { 1: "Nous n’avons aucun contact actif dans le domaine du numérique." },
          { 2: "Nous échangeons des informations avec des contacts actifs dans le domaine du numérique." },
          { 3: "Nous travaillons avec un partenaire actif dans le domaine du numérique." },
          { 4: "Nous travaillons étroitement des partenaires dans le domaine du numérique." },
          { 5: "Nous disposons d’un réseau de partenaires dans le domaine du numérique avec lequel nous travaillons systématiquement et efficacement." },
        ],
      },
    },
    description: "Incorporation du digital à tous les niveaux de l’organisation, et non plus comme entité séparée.",
    code: "OR",
    name: "Organisation",
    order: 5,
  },
  PD: {
    questions: {
      PD1: {
        name: "Gestion des points de contact",
        answers: [
          { 1: "Nous n'avons aucune gestion des points de contact avec le client." },
          { 2: "Nous avons intégré quelques points de contact." },
          { 3: "Nous avons intégré des points de contact de manière cohérente dans le parcours client." },
          { 4: "Nous évaluons nos interactions avec le client et les adaptons en conséquence." },
          { 5: "Nous surveillons, mesurons et améliorons en permanence nos interactions avec le client." },
        ],
      },
      PD2: {
        name: "Automatisation",
        answers: [
          { 1: "L'automatisation des processus n'est pas à l'ordre du jour." },
          { 2: "Nous avons analysé le potentiel d’amélioration des processus." },
          { 3: "Nous avons automatisé des processus clés." },
          { 4: "Nous avons automatisé un ensemble de processus et examinons régulièrement leur potentiel d’amélioration." },
          { 5: "Nous avons une approche proactive d'amélioration des processus par l'automatisation." },
        ],
      },
      PD3: {
        name: "Piloté par les données",
        answers: [
          { 1: "Nous ne collectons et n'exploitons pas de données." },
          { 2: "Nous établissons des rapports synthétiques à partir des données collectées." },
          { 3: "Nous développons des modèles analytiques à partir des données collectées." },
          { 4: "Nous développons des modèles analytiques dans un processus continu et sur la base d'une infrastructure et de processus communs à l'entreprise." },
          { 5: "Notre entreprise est pilotée par les données en étant soutenue par une stratégie analytique alignée avec la stratégie de l'entreprise." },
        ],
      },
    },
    description: "Simplification, unification et automatisation des processus internes.",
    code: "PD",
    name: "Digitalisation des processus",
    order: 6,
  },
  CO: {
    questions: {
      CO1: {
        name: "Travail collaboratif",
        answers: [
          { 1: "Nos collaborateurs travaillent dans leur espace personnel fermé." },
          { 2: "Des outils collaboratifs différents sont utilisés par certaines équipes." },
          { 3: "Des outils collaboratifs sont utilisés à l'échelle de l'entreprise et de manière standardisée." },
          { 4: "Nos collaborateurs partagent des connaissances de manière efficace, proactive et structurée à travers des outils collaboratifs standardisés." },
          { 5: "L'utilisation des outils collaboratifs est surveillée, mesurée et améliorée en permanence." },
        ],
      },
      CO2: {
        name: "Gestion des connaissances",
        answers: [
          { 1: "Nous avons des compétences numériques limitées." },
          { 2: "Nous avons un niveau de compétences numériques adéquat à nos activités." },
          { 3: "Nous avons un niveau de compétences numériques adéquat à nos activités et menons quelques actions pour les développer." },
          { 4: "Nous avons un niveau élevé de compétences numériques et les développons régulièrement." },
          { 5: "Nous avons un niveau élevé de compétences numériques et avons une attitude proactive pour les développer." },
        ],
      },
      CO3: {
        name: "Travail flexible",
        answers: [
          { 1: "Nous ne favorisons pas le travail flexible." },
          { 2: "Le travail flexible est possible pour quelques collaborateurs." },
          { 3: "Le travail flexible est répandu à l'échelle de l'entreprise et avons établi une politique en la matière." },
          { 4: "Nous promouvons diverses formes de travail flexible." },
          { 5: "Le travail flexible fait partie de la culture de l'entreprise." },
        ],
      },
    },
    description: "Amélioration de la collaboration et de la communication entre les collaborateurs et les équipes.",
    code: "CO",
    name: "Collaboration",
    order: 7,
  },
  CU: {
    questions: {
      CU1: {
        name: "Affinité avec le numérique",
        answers: [
          { 1: "Nos collaborateurs ont de l'aversion pour le numérique." },
          { 2: "Une partie de nos collaborateurs sont ouverts au numérique." },
          { 3: "Nos collaborateurs ont généralement une attitude positive face au numérique." },
          { 4: "Nos collaborateurs ont une attitude proactive et ouverte face au numérique." },
          { 5: "Notre entreprise a une culture du numérique." },
        ],
      },
      CU2: {
        name: "Appétit pour le risque",
        answers: [
          { 1: "Nous préférons ne pas prendre de risque." },
          { 2: "Nos projets numériques comportent de faibles risques." },
          { 3: "Nos projets numériques comportent des risques modérés." },
          { 4: "Les responsables prennent des risques importants en mettant en œuvre des solutions numériques innovantes." },
          { 5: "La culture de notre organisation encourage la prise de risque et l'expérimentation." },
        ],
      },
      CU3: {
        name: "Culture de l’erreur",
        answers: [
          { 1: "Les échecs sont généralement stigmatisés." },
          { 2: "Nous tolérons l'échec lorsque les risques sont importants." },
          { 3: "Nous acceptons l'échec comme un élément naturel de l'expérimentation." },
          { 4: "Nous valorisons l'échec et en tirons des enseignements." },
          { 5: "Nous avons une culture de droit à l'erreur." },
        ],
      },
    },
    description: "Ouverture aux nouvelles technologies et aux changements qui y sont associés.",
    code: "CU",
    name: "Culture et expertise",
    order: 8,
  },
  IT: {
    questions: {
      IT1: {
        name: "Gestion de projet agile",
        answers: [
          { 1: "Nous ne suivons pas une approche de gestion de projet agile." },
          { 2: "Nos projets numériques suivent quelques pratiques de gestion de projet agile." },
          { 3: "Nos projets numériques suivent une méthode de gestion de projet agile." },
          { 4: "Nous sommes expérimentés dans la conduite de projets numériques de manière agile." },
          { 5: "Nos équipes ont une culture agile en matière de projets numériques." },
        ],
      },
      IT2: {
        name: "Architecture intégrée",
        answers: [
          { 1: "Nos systèmes informatiques sont isolés." },
          { 2: "Des travaux pour ouvrir nos systèmes sont planifiés ou en cours." },
          { 3: "Nos systèmes sont ouverts à l'interne et en partie interconnectés." },
          { 4: "Nos systèmes sont interconnectés et ouverts à l'interne et à l’externe." },
          { 5: "L'architecture de notre système d'information est flexible, adaptable et évolutive." },
        ],
      },
      IT3: {
        name: "Expertise informatique",
        answers: [
          { 1: "Nous avons peu de compétences en informatique à l'interne." },
          { 2: "Notre équipe informatique répond aux exigences de notre transformation numérique avec une aide externe." },
          { 3: "Notre équipe informatique mène quelques activités de notre transformation numérique." },
          { 4: "Notre équipe informatique conduit la plupart des activités de transformation numérique." },
          { 5: "Notre équipe informatique est un moteur de la transformation numérique et expérimente en permanence de nouvelles idées." },
        ],
      },
      IT4: {
        name: "Cybersécurité",
        answers: [
          { 1: "Les mesures en matière de sécurité informatique sont très limitées." },
          { 2: "Des mesures de cybersécurité de base sont mises en œuvre." },
          { 3: "Des mesures complètes de sécurité informatique ont été mises en œuvre et sont documentées." },
          { 4: "Une gouvernance en matière de cybersécurité guide les activités dans ce domaine." },
          { 5: "Nous disposons d'une cybersécurité optimale d'un point de vue technique et organisationnel ." },
        ],
      },
    },
    description: "Souplesse et agilité du système d’information pour le succès des projets digitaux.",
    code: "IT",
    name: "Technologies de l’information",
    order: 9,
  },
  TM: {
    questions: {
      TM1: {
        name: "Gouvernance",
        answers: [
          { 1: "Nous n'avons aucune gouvernance en matière de transformation numérique." },
          { 2: "Nous avons planifié l'élaboration d'un plan de gouvernance de notre transformation numérique." },
          { 3: "Notre transformation numérique est guidée par une feuille de route claire, des rôles et des processus définis." },
          { 4: "Notre gouvernance en matière de transformation numérique intègre des bonnes pratiques." },
          { 5: "Notre gouvernance en matière de transformation numérique évolue constamment." },
        ],
      },
      TM2: {
        name: "Mesure de la performance",
        answers: [
          { 1: "Nous ne mesurons pas notre progression en matière de transformation numérique." },
          { 2: "Nous planifions d'identifier des objectifs et des mesures en matière de transformation numérique." },
          { 3: "Les objectifs de notre transformation numérique sont clairement définis et diffusés au sein de l'entreprise." },
          { 4: "La réalisation des objectifs de toute activité liée à la transformation numérique est examinée périodiquement." },
          { 5: "Les effets de la transformation numérique sont évalués selon plusieurs dimensions et systématiquement." },
        ],
      },
      TM3: {
        name: "Soutien managérial",
        answers: [
          { 1: "Il n'y a pas de soutien spécifique à la transformation numérique." },
          { 2: "Le management communique l’importance de la transformation numérique." },
          { 3: "Le management soutient et encourage la transformation numérique." },
          { 4: "Le management est fortement impliqué dans la transformation numérique." },
          { 5: "Des digital leaders coordonnent, facilitent et encouragent les activités de transformation numérique." },
        ],
      },
    },
    description: "Soutien de la direction et reconnaissance de l’opportunité que représente la transformation digitale.",
    code: "TM",
    name: "Gestion de la transformation",
    order: 10,
  },
};
