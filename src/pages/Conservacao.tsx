const Conservacao = () => {
  const conservationTopics = [
    {
      title: "Proteção e Monitoramento das Espécies",
      description:
        "O Projeto TAMAR-ICMBio atua há mais de quatro décadas na proteção das tartarugas marinhas no Brasil, realizando ações de monitoramento de ninhos, marcação e soltura de filhotes, além de resgate de animais e estudos sobre rotas migratórias. Essas atividades garantem dados essenciais para entender o ciclo de vida das espécies e orientar medidas de manejo eficazes.",
    },
    {
      title: "Áreas Marinhas Protegidas",
      description:
        "As principais unidades de conservação que abrigam tartarugas marinhas incluem o Atol das Rocas (RN), Fernando de Noronha (PE), Reserva Biológica de Comboios (ES), Parque Nacional Marinho de Abrolhos (BA), Ilha da Trindade (ES) e a Reserva Biológica de Santa Isabel (SE). Essas áreas funcionam como refúgios para alimentação, descanso e desova, contribuindo para a recuperação populacional.",
    },
    {
      title: "Medidas de Manejo Sustentável",
      description:
        "Para reduzir a mortalidade acidental, foram implantados Dispositivos Excludentes de Tartarugas (TEDs) nas redes de pesca de arrasto e reforçada a fiscalização contra o comércio ilegal de ovos e cascos. Outras ações incluem o controle da poluição costeira, preservação das pradarias marinhas e proteção de áreas críticas de desova, assegurando condições seguras para a reprodução.",
    },
    {
      title: "Educação Ambiental e Envolvimento Comunitário",
      description:
        "A conservação das tartarugas depende também do trabalho com comunidades pesqueiras e turísticas. Programas de educação ambiental e turismo sustentável incentivam a geração de renda alternativa e a conscientização sobre a importância ecológica dessas espécies. O engajamento local tem sido um dos pilares do sucesso do Projeto TAMAR.",
    },
    {
      title: "Pesquisa, Cooperação e Futuro da Conservação",
      description:
        "A pesquisa científica com telemetria e satélite tem revelado rotas migratórias e áreas prioritárias de proteção, enquanto a cooperação internacional entre países costeiros fortalece estratégias globais de conservação. A continuidade desses esforços é essencial para garantir que as tartarugas marinhas — desde a pequena tartaruga-de-oliva até a imponente tartaruga-de-couro — continuem a cumprir seu papel vital nos oceanos do planeta.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conservação das Espécies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as principais ações de proteção e manejo das tartarugas marinhas no Brasil, que garantem a sobrevivência dessas espécies essenciais para o equilíbrio dos oceanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {conservationTopics.map((topic, index) => (
            <Card
              key={index}
              className="hover-lift cursor-pointer transition-smooth bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Conservacao;
```
