export const BARBERSHOP_DATA = {
  name: "Lobeca Barbershop",
  tagline: "Barbearia em Apucarana há 11 anos",
  phone: "(43) 99876-5432",
  phoneRaw: "5543998765432",
  phoneLandline: "(43) 3422-9876",
  address: "Rua Osório Ribas de Paula, 1717 - Centro",
  city: "Apucarana - PR",
  cep: "86802-710",
  instagram: "lobecabarbershop",
  instagramUrl: "https://www.instagram.com/lobecabarbershop/",
  googleRating: 4.9,
  googleReviewsCount: 368,
  subscribersCount: 450,
  yearsActive: 11,
  
  hours: [
    { days: "Segunda a Sexta", hours: "09:00 às 20:00" },
    { days: "Sábado", hours: "08:30 às 19:00" },
    { days: "Domingo e Feriados", hours: "Fechado" }
  ],

  barbers: [
    {
      id: "lucas-lobeca",
      name: "Lucas Lobeca",
      role: "Mestre Barbeiro & Fundador",
      specialty: "Cortes Clássicos, Degradê Navalhado e Barba Terapia",
      experience: "11 anos",
      status: "Disponível hoje",
      avatar: "/images/equipe-roda.jpg"
    },
    {
      id: "diego-alcantara",
      name: "Diego Alcantara",
      role: "Especialista em Visagismo & Barba",
      specialty: "Alinhamento de Barba, Fade e Pigmentação",
      experience: "6 anos",
      status: "Disponível hoje",
      avatar: "/images/salao.jpg"
    },
    {
      id: "matheus-rocha",
      name: "Matheus Rocha",
      role: "Barbeiro Sênior & Estilista",
      specialty: "Cortes Modernos, Texturização e Tratamentos Capilares",
      experience: "4 anos",
      status: "Poucos horários",
      avatar: "/images/broll-5.jpg"
    }
  ],

  services: [
    // Cabelo
    {
      id: "corte",
      name: "Corte Tradicional / Fade",
      category: "cabelo",
      price: 75.0,
      duration: 45,
      description: "Lavagem especial com shampoo refrescante, corte personalizado com tesoura e máquina, finalização com pomada premium."
    },
    {
      id: "corte-adicional",
      name: "Corte Adicional / Manutenção",
      category: "cabelo",
      price: 75.0,
      duration: 45,
      description: "Manutenção de corte para clientes recorrentes, com limpeza de nuca e contorno das orelhas."
    },
    {
      id: "hidratacao",
      name: "Reconstrução de Fios — Hidratação Profunda",
      category: "cabelo",
      price: 29.0,
      duration: 30,
      isFromPrice: true,
      description: "Tratamento de choque para fios ressecados, com máscara nutritiva e vapor de ozônio para máxima absorção."
    },
    {
      id: "selagem-progressiva",
      name: "Selagem Térmica / Alinhamento de Fios",
      category: "cabelo",
      price: 119.0,
      duration: 90,
      isFromPrice: true,
      description: "Redução de volume e controle de frizz com efeito natural, sem danificar a estrutura capilar."
    },
    {
      id: "camuflagem-cabelo",
      name: "Camuflagem Capilar — Pigmentação Discreta",
      category: "cabelo",
      price: 45.0,
      duration: 30,
      description: "Disfarce sutil e elegante de fios brancos com tonalizante sem amônia de acabamento imperceptível."
    },

    // Barba
    {
      id: "barba",
      name: "Barba Terapia com Toalha Quente",
      category: "barba",
      price: 65.0,
      duration: 30,
      description: "Protocolo completo com toalha aquecida em óleos essenciais, massagem facial, lâmina descartável e pós-barba refrescante."
    },
    {
      id: "camuflagem-barba",
      name: "Camuflagem de Barba — Pigmentação",
      category: "barba",
      price: 45.0,
      duration: 30,
      description: "Correção de falhas e uniformização da cor dos fios da barba com resultado limpo e natural."
    },

    // Combos
    {
      id: "combo-corte-barba",
      name: "Combo Completo: Corte + Barba Terapia",
      category: "combos",
      price: 130.0,
      originalPrice: 140.0,
      duration: 75,
      description: "A experiência definitiva da Lobeca. Corte completo + barba relaxante com toalha quente e bebida cortesia."
    },

    // Rosto & Acabamento
    {
      id: "design-sobrancelhas",
      name: "Design Masculino de Sobrancelhas",
      category: "rosto",
      price: 29.0,
      duration: 15,
      description: "Alinhamento e limpeza das sobrancelhas mantendo a naturalidade da expressão masculina."
    },
    {
      id: "esfoliacao-mascara",
      name: "Esfoliação Facial + Máscara Black",
      category: "rosto",
      price: 29.0,
      duration: 30,
      description: "Limpeza profunda dos poros, remoção de cravos superficiais e hidratação da pele do rosto."
    },
    {
      id: "acabamento-pezinho",
      name: "Acabamento & Alinhamento de Pézinho",
      category: "rosto",
      price: 25.0,
      duration: 15,
      description: "Apenas contorno do pescoço e têmporas com navalha para manter o visual alinhado entre cortes."
    },
    {
      id: "depilacao-auricular",
      name: "Depilação Auricular (Cera Quente)",
      category: "rosto",
      price: 25.0,
      duration: 15,
      description: "Remoção higiênica e indolor de pelos da região da orelha."
    },
    {
      id: "depilacao-nasal",
      name: "Depilação Nasal (Cera Rápida)",
      category: "rosto",
      price: 25.0,
      duration: 15,
      description: "Limpeza de pelos nasais com cera específica hipoalergênica."
    }
  ],

  plans: [
    {
      id: "corte-e-barba-exclusive",
      name: "CORTE E BARBA EXCLUSIVE",
      price: 259.90,
      period: "mês",
      category: "combos",
      isPopular: true,
      badge: "Mais Escolhido",
      days: "Segunda a Sábado (Sem restrição)",
      features: [
        "Cortes de cabelo ilimitados no mês",
        "Barba completa ilimitada com toalha quente",
        "10% de desconto em produtos da loja",
        "Cerveja ou café cortesia a cada atendimento",
        "Prioridade de agendamento no aplicativo",
        "Acesso à mesa de sinuca e fliperama"
      ],
      description: "O plano definitivo para quem quer estar sempre impecável sem se preocupar com quantas vezes vai cortar no mês."
    },
    {
      id: "corte-e-barba-vip",
      name: "CORTE E BARBA VIP",
      price: 209.90,
      period: "mês",
      category: "combos",
      days: "Segunda a Sábado",
      features: [
        "Até 3 cortes de cabelo no mês",
        "Até 3 sessões de barba com toalha quente",
        "Cerveja cortesia no atendimento",
        "Agendamento preferencial",
        "Cancelamento sem carência"
      ],
      description: "Excelente custo-benefício para quem mantém corte e barba alinhados a cada 10 dias."
    },
    {
      id: "corte-vip",
      name: "CORTE VIP",
      price: 122.90,
      period: "mês",
      category: "corte",
      days: "Segunda a Sábado",
      features: [
        "Até 3 cortes de cabelo por mês",
        "Lavagem especial e finalização inclusas",
        "Café expresso cortesia",
        "Sem taxa de adesão"
      ],
      description: "Ideal para manter o corte e fade sempre na régua durante o mês todo."
    },
    {
      id: "barba-vip",
      name: "BARBA VIP",
      price: 122.90,
      period: "mês",
      category: "barba",
      days: "Segunda a Sábado",
      features: [
        "Até 3 sessões de barba completa no mês",
        "Protocolo com toalha quente e óleos especiais",
        "Bebida cortesia",
        "Horários flexíveis"
      ],
      description: "Para o homem que exige barba milimetricamente desenhada e cuidada."
    },
    {
      id: "corte-exclusive",
      name: "CORTE EXCLUSIVE",
      price: 172.90,
      period: "mês",
      category: "corte",
      days: "Segunda a Sábado",
      features: [
        "Cortes de cabelo ilimitados no mês",
        "Finalização premium com pomada matte",
        "Cerveja ou café em toda visita",
        "Vigência flexível sem fidelidade"
      ],
      description: "Corte quantas vezes quiser. Perfeito para manter degradê raspado semanal."
    },
    {
      id: "barba-exclusive",
      name: "BARBA EXCLUSIVE",
      price: 172.90,
      period: "mês",
      category: "barba",
      days: "Segunda a Sábado",
      features: [
        "Barba ilimitada durante todo o mês",
        "Toalha quente e massagem facial em todas as visitas",
        "Óleo para barba e balm hidratante inclusos",
        "Agendamento direto com o barbeiro"
      ],
      description: "Barba sempre alinhada e macia sem limite de visitas."
    },
    {
      id: "corte-e-barba-week",
      name: "CORTE E BARBA WEEK",
      price: 189.90,
      period: "mês",
      category: "combos",
      badge: "Econômico",
      days: "Segunda a Quarta-feira",
      features: [
        "Corte e barba ilimitados de seg a qua",
        "Tranquilidade de atendimento sem fila",
        "Bebida cortesia",
        "Economia garantida no início da semana"
      ],
      description: "Perfeito para quem tem flexibilidade de horários entre segunda e quarta."
    },
    {
      id: "barba-week",
      name: "BARBA WEEK",
      price: 99.00,
      period: "mês",
      category: "barba",
      days: "Segunda a Quarta-feira",
      features: [
        "Barba ilimitada de segunda a quarta",
        "Toalha quente e navalha afiada",
        "Atendimento com hora marcada"
      ],
      description: "Manutenção de barba no início da semana com preço super acessível."
    },
    {
      id: "corte-empresarial",
      name: "CORTE EMPRESARIAL",
      price: 89.90,
      period: "mês",
      category: "empresarial",
      days: "Segunda a Sexta",
      features: [
        "2 cortes no mês com nota fiscal para empresa",
        "Ideal para executivos e profissionais corporativos",
        "Válido com convênio de empresa ou CNPJ",
        "Horários pontuais para não atrasar reuniões"
      ],
      description: "Plano corporativo para empresas que investem na boa apresentação de sua equipe."
    },
    {
      id: "corte-e-barba-empresarial",
      name: "CORTE E BARBA EMPRESARIAL",
      price: 169.90,
      period: "mês",
      category: "empresarial",
      days: "Segunda a Sexta",
      features: [
        "2 cortes e 2 barbas por mês",
        "Faturamento facilitado para empresas",
        "Café expresso gourmet liberado",
        "Ambiente adequado para networking"
      ],
      description: "Combo completo com benefícios e faturamento direto para pessoa jurídica."
    },
    {
      id: "corte-e-barba-exclusive-limitado",
      name: "CORTE E BARBA EXCLUSIVE LIMITADO",
      price: 239.90,
      period: "mês",
      category: "combos",
      days: "Segunda a Sábado",
      features: [
        "4 cortes e 4 barbas por mês",
        "Sem carência mínima",
        "Desconto em serviços adicionais",
        "Brinde exclusivo de boas-vindas"
      ],
      description: "Para quem quer frequência semanal garantida com excelente margem de economia."
    },
    {
      id: "plano-one",
      name: "PLANO ONE",
      price: 65.00,
      period: "mês",
      category: "corte",
      days: "Segunda a Quinta-feira",
      features: [
        "1 corte completo no mês + 1 acabamento/pezinho",
        "Preço travado sem reajustes repentinos",
        "Ideal para cortes de baixa manutenção"
      ],
      description: "A porta de entrada para ser um membro assinante da Lobeca Barbershop."
    }
  ],

  spaceTour: [
    {
      id: "fachada",
      title: "Fachada & Recepção",
      step: "01",
      description: "Localização nobre no coração de Apucarana na Rua Osório Ribas de Paula, 1717. Fachada contemporânea e recepção climatizada.",
      image: "/images/equipe-roda.jpg",
      video: "/videos/hero-vertical.mp4"
    },
    {
      id: "salao",
      title: "Salão Principal & Bancadas",
      step: "02",
      description: "Cadeiras de couro vintage hidráulicas, iluminação com índice de reprodução de cor para visagismo perfeito e equipamentos esterilizados.",
      image: "/images/salao.jpg",
      video: "/videos/barbeiros-1.mp4"
    },
    {
      id: "fliperama",
      title: "Lounge & Fliperama",
      step: "03",
      description: "Área de espera agradável com arcade retrô liberado, cervejeira abastecida, café expresso moído na hora e playlist selecionada.",
      image: "/images/broll-5.jpg",
      video: "/videos/espaco-tour.mp4"
    },
    {
      id: "noivos",
      title: "Sala VIP & Dia do Noivo",
      step: "04",
      description: "Espaço exclusivo para o noivo e seus padrinhos comemorarem com privacidade, massagem, brinde com espumante e produção impecável.",
      image: "/images/noivo-poster.webp",
      video: "/videos/noivo-reel.mp4"
    },
    {
      id: "cadeira",
      title: "Na Cadeira • O Trabalho",
      step: "05",
      description: "Do alinhamento com navalhete ao relaxamento com toalha vaporizada. Atendimento detalhista conduzido por barbeiros experientes.",
      image: "/images/barbeiros-2-poster.webp",
      video: "/videos/barbeiros-2.mp4"
    }
  ],

  groomPackages: [
    {
      id: "silver",
      name: "Pacote Silver",
      price: "A partir de R$ 380",
      description: "Ideal para o noivo que quer o essencial com máxima qualidade.",
      features: [
        "Corte de cabelo visagista completo",
        "Barba terapia com toalha quente e massagem facial",
        "Limpeza de pele express + máscara hidratante",
        "Finalização e penteado fixado para fotos",
        "1 chopp ou café gourmet de cortesia"
      ]
    },
    {
      id: "gold",
      name: "Pacote Gold Exclusive",
      price: "A partir de R$ 690",
      isPopular: true,
      badge: "Mais Procurado",
      description: "A experiência completa para o noivo e acompanhantes relaxarem no grande dia.",
      features: [
        "Todos os serviços do pacote Silver",
        "Espaço VIP reservado com os padrinhos",
        "Massagem relaxante corporal de alívio pré-altar",
        "Depilação auricular e nasal com cera indolor",
        "Brinde com espumante para o noivo e padrinhos",
        "Registro em fotos do making of para lembrança"
      ]
    },
    {
      id: "diamond",
      name: "Pacote Diamond Experience",
      price: "Sob Consulta",
      description: "Fechamento exclusivo do espaço e consultoria personalizada.",
      features: [
        "Salão ou sala VIP 100% privativa",
        "Atendimento completo para até 6 padrinhos",
        "Tábua de frios e open bar de chopp artesanal",
        "Ajuste e colocação de gravatas e lapelas pela equipe",
        "Acompanhamento até o horário de saída para a cerimônia"
      ]
    }
  ],

  reviews: [
    {
      name: "Guilherme B. Andrade",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Há 1 semana",
      comment: "Melhor barbearia de Apucarana sem sombra de dúvidas! Sou assinante do plano Exclusive há quase um ano e a economia é absurda. Barbeiros educados, cerveja trincando e o corte sempre perfeito.",
      verified: true
    },
    {
      name: "Rafael Meneghetti",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Há 3 semanas",
      comment: "Fiz o Dia do Noivo aqui com 4 padrinhos. Foi a melhor escolha da minha vida! Nos divertimos no fliperama, tomamos chopp e fomos para o casamento impecáveis. Agradecimento especial ao Lucas!",
      verified: true
    },
    {
      name: "Dr. Marcelo Sampaio",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Há 1 mês",
      comment: "Pontualidade britânica. Para quem tem agenda apertada no consultório, marcar horário na Lobeca é garantia de ser atendido no minuto certo. A toalha quente na barba é terapêutica.",
      verified: true
    },
    {
      name: "Thiago Fagundes",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Há 1 mês",
      comment: "Ambiente top, espaço aconchegante e atendimento nota 1000. Já cortei em várias barbearias em Londrina e Maringá, mas o padrão da Lobeca aqui em Apucarana supera qualquer uma.",
      verified: true
    }
  ],

  faqs: [
    {
      question: "Como funciona o agendamento de horários?",
      answer: "Você pode agendar pelo botão 'Agendar Horário' aqui no site ou diretamente no nosso WhatsApp. Escolha o barbeiro de sua preferência, os serviços desejados, a data e o horário. A confirmação é instantânea."
    },
    {
      question: "Como funcionam os planos de assinatura mensal?",
      answer: "Nossos planos têm vigência indeterminada e renovação mensal automática. Você escolhe o plano que melhor atende sua rotina (cortes ilimitados, semanais ou combos) e corta quando quiser sem pagar nada na hora. Não há taxa de cancelamento ou carência mínima abusiva."
    },
    {
      question: "Tem estacionamento perto da barbearia?",
      answer: "Sim! Estamos localizados na Rua Osório Ribas de Paula, 1717, no centro de Apucarana. Há vagas conveniadas e facilidade de estacionamento nas imediações da quadra."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos PIX, cartões de crédito e débito (todas as bandeiras), dinheiro e faturamento corporativo para assinaturas empresariais."
    },
    {
      question: "Com quanta antecedência devo reservar o Dia do Noivo?",
      answer: "Recomendamos entrar em contato de 1 a 3 meses antes da data do casamento para garantir a reserva exclusiva da sala VIP e a escala dos profissionais para você e seus padrinhos."
    }
  ]
};
