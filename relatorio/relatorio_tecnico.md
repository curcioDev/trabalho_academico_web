# Relatório Técnico: Personalização e Integração Web com Antigravity

**Tema:** Soluções Web para Pequenos Negócios (Barbearia Vintage)

## 1. Visão Geral do Projeto

### Contexto e Objetivos (Problem-Based Learning)
Desenvolvido sob a metodologia **Problem-Based Learning (PBL)**, este projeto aborda um desafio real de mercado: a criação de uma presença digital eficaz para a "Barbearia Vintage", um pequeno negócio local com restrições orçamentárias. O objetivo primordial foi desenvolver uma interface web funcional, acessível e esteticamente alinhada à marca, facilitando a apresentação de serviços e o agendamento de clientes.

### Estrutura da Solução Híbrida
A solução final é uma aplicação web moderna construída através do **Antigravity**. Diferenciando-se dos construtores de sites convencionais, esta ferramenta possibilitou uma abordagem híbrida:
*   **Prototipagem Ágil:** Uso de geração assistida por IA e componentes pré-fabricados para estruturação rápida do layout.
*   **Personalização Low-Code:** Acesso irrestrito à estrutura de código (HTML/CSS/React), permitindo refinamentos manuais indispensáveis que ferramentas "No-Code" puras não suportariam.

## 2. Justificativa da Ferramenta Visual

A eleição do **Antigravity** (inserido na categoria de ferramentas flexíveis sugeridas no estudo de caso  ) provou-se estratégica ao equilibrar produtividade e controle técnico:

*   **Agilidade na Prototipagem:** Viabilizou a geração da estrutura base do site e formulários em minutos, alinhando-se à necessidade de entrega rápida do cliente.
*   **Autonomia de Código (Diferencial):** Ao contrário de plataformas fechadas (como Wix ou Squarespace) que ofuscam o código-fonte, o Antigravity entrega código limpo e editável. Esta característica foi crucial para atender ao requisito de "capacidade de personalização via código"  , possibilitando ajustes refinados em CSS e lógica JavaScript.
*   **Superação de Limitações:** Embora a geração automática forneça uma base sólida, a lógica específica de validação de agendamentos e o feedback visual de sucesso (`success_styles.css`) demandaram intervenção manual, evidenciando a ferramenta como um acelerador, e não um substituto da competência técnica.

## 3. Aplicação Técnica dos Padrões Web

Para assegurar a qualidade profissional, foram aplicados manualmente os fundamentos dos padrões web sobre a base gerada:

### Semântica e Estrutura HTML
Realizou-se uma revisão rigorosa para garantir o uso de tags semânticas (`<header>`, `<main>`, `<section>`, `<form>`) em detrimento de `divs` genéricas, otimizando a estrutura para SEO e leitores de tela.

### CSS Modular e Personalização Visual
A estilização transcendeu o editor visual:
*   **Estilização Dedicada:** Desenvolvimento do `styles.css` para controle granular de tipografia, cores e espaçamentos, consolidando a identidade "Vintage".
*   **Feedback de Interface:** Implementação do `success_styles.css` para gerenciar estados visuais pós-interação, garantindo uma UX fluida.

### JavaScript e Interatividade (ES6+)
A lógica do widget de agendamento (`script_v3.js`) foi codificada manualmente para garantir robustez:
*   **Manipulação do DOM:** Captura precisa de eventos (`submit`) e manipulação de classes CSS para feedback dinâmico.
*   **Simulação de Integração:** Emprego de funções assíncronas (`setTimeout` simulando Promises) para simular latência de API e estados de "loading", aproximando a experiência de um cenário real de produção.

## 4. Diretrizes de Responsividade e Acessibilidade

### Responsividade e Adaptabilidade
O projeto segue uma abordagem fluida. O CSS foi ajustado manualmente para que containers e formulários se adaptem a qualquer viewport (`max-width: 100%`), assegurando legibilidade e usabilidade consistente entre dispositivos móveis e desktops, em conformidade com as diretrizes do Google Web Fundamentals.

### Acessibilidade e Ética Digital
*   **Contraste e Legibilidade:** Ajuste manual de paletas de cores para garantir alto contraste (WCAG).
*   **Navegabilidade:** Estrutura semântica que permite navegação completa via teclado.
*   **Transparência:** Clareza na coleta de dados no formulário, respeitando princípios de ética e privacidade digital.

## 5. Conclusão: O Desenvolvedor na Era No-Code

A experiência com o Antigravity ratificou que o domínio dos **Web Standards** (HTML, CSS, JS) é o diferencial entre um operador de ferramentas e um desenvolvedor competente:
1.  **Auditoria de Código:** Ferramentas visuais podem gerar redundâncias. A capacidade de auditar e refatorar o código gerado (ex: `index.html`) é vital para a performance.
2.  **Poder de Customização:** A habilidade de injetar scripts e estilos proprietários elevou uma página genérica a uma solução de software customizada.
3.  **Síntese:** As tecnologias No-Code/Low-Code aceleram a implementação, mas a lógica de negócios complexa e o refinamento de UX permanecem dependentes do conhecimento técnico profundo.

## 6. Referências Bibliográficas
*   **MDN Web Docs** (Documentação HTML, CSS, JS) 
*   **Google Web Fundamentals** (Diretrizes de Responsividade e Performance) 
*   Materiais de apoio da disciplina e documentação o Antigravity.
