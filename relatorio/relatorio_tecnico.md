# Relatório Técnico: Personalização e Integração Web

**Tema**: Soluções Web para Pequenos Negócios (Barbearia Vintage)

## 1. Explicação do Projeto

### Contexto e Finalidade
Este projeto, desenvolvido sob a metodologia **Problem-Based Learning (PBL)**, visa resolver um desafio real de mercado: criar presença digital para um pequeno negócio local ("Barbearia Vintage") com orçamento limitado. O objetivo central é fornecer uma interface funcional e acessível para agendamento de serviços.

### Estrutura da Solução
A solução consiste em uma Landing Page construída sobre uma plataforma No-Code (hipoteticamente Webflow ou Softr), integrada com um widget de agendamento personalizado desenvolvido "na mão" (Custom Code).
- **Interface Visual**: Criada via plataforma visual para agilidade.
- **Funcionalidade Core (Agendamento)**: Desenvolvida em HTML/CSS/JS para garantir controle total sobre a experiência do usuário, validações e estilização.

## 2. Justificativa da Ferramenta Visual

A escolha de ferramentas No-Code/Low-Code (como Softr, Bubble ou Webflow) se justifica por:
- **Velocidade de Desenvolvimento**: Permite colocar o site no ar em questão de horas.
- **Facilidade de Manutenção**: O dono do negócio pode alterar textos e imagens sem precisar mexer em código.
- **Custo-Benefício**: Planos iniciais gratuitos ou baratos, com hospedagem inclusa.

**Limitações Superadas com Código:**
Apesar das vantagens, essas ferramentas muitas vezes possuem formulários genéricos ou cobram caro por funcionalidades lógicas avançadas (como validação customizada em tempo real). A injeção de código personalizado (Embed) resolve essa lacuna, trazendo a "inteligência" do JavaScript para dentro de uma estrutura visual simples.

## 3. Descrição Técnica da Aplicação dos Padrões Web

O widget de agendamento foi construído seguindo os pilares do desenvolvimento web moderno:

### HTML Semântico
Utilizou-se tags apropriadas (`<header>`, `<form>`, `<label>`, `<button>`) em vez de divs genéricas. Isso ajuda motores de busca (SEO) a entenderem o conteúdo e leitores de tela a navegar corretamente.

### CSS Modular e Responsivo
- **Isolamento**: As classes CSS foram prefixadas ou estruturadas dentro de um container `.barbershop-widget` para evitar que o estilo do widget "quebre" o estilo do restante da página No-Code.
- **Variáveis (`:root`)**: Usadas para fácil manutenção de cores e fontes.
- **Media Queries**: Ajustes para telas menores (`max-width: 480px`), garantindo que o formulário seja utilizável em celulares.

### JavaScript (ES6+)
- **Manipulação do DOM**: Seleção eficiente de elementos e escuta de eventos (`submit`, `input`, `blur`).
- **Validação Client-Side**: Verifica dados antes de enviar ao servidor, economizando requisições.
- **Assincronismo**: Uso de `Promise` e `setTimeout` para simular uma chamada de API, demonstrando como a interface deve reagir a estados de espera ("loading") e respostas do servidor.

## 4. Cuidados com Responsividade e Acessibilidade

### Responsividade
O layout foi pensado "Mobile First". O formulário se adapta fluido (100% de largura) até um limite máximo (`max-width: 400px`), garantindo boa leitura tanto em desktops quanto em smartphones. Os inputs têm áreas de toque confortáveis.

### Acessibilidade (a11y)
- **Contraste**: Cores escolhidas (texto escuro sobre fundo claro) seguraram legibilidade.
- **Atributos ARIA**: Uso de `aria-required`, `aria-live` (para feedback dinâmico de erros) e associação explícita entre `label` e `input` via atributo `for`.
- **Navegação por Teclado**: Todo o formulário é operável sem mouse, com estados de foco (`:focus`) visíveis.

## 5. Aprendizados: Padrões Web vs. Plataformas No-Code

A experiência demonstrou que o No-Code não elimina a necessidade de conhecimento técnico. Pelo contrário:
1.  **O "Poder" está na Integração**: Saber injetar HTML/CSS/JS permite transformar um site estático No-Code em uma aplicação web dinâmica.
2.  **Limites do Visual**: Ferramentas visuais são ótimas para layout, mas péssimas para lógica de negócios específica. O código entra exatamente para suprir essa lógica.
3.  **Qualidade Final**: Um site feito apenas arrastando blocos muitas vezes peca em performance e acessibilidade. O conhecimento de padrões web permite corrigir essas falhas manualmente através de custom codes.

**Conclusão**: O desenvolvedor moderno deve atuar como um "arquiteto de soluções", sabendo quando usar a agilidade do No-Code e quando aplicar a robustez do código tradicional.

## 6. Referências Bibliográficas e Fontes
Para o desenvolvimento, foram consultadas as seguintes fontes:
- **MDN Web Docs**: Referência técnica para tags semânticas e APIs de JavaScript.
- **Webflow University / Softr Docs**: Para entendimento da injeção de "Embeds".
- **Google Web Fundamentals**: Guias de melhores práticas de UX e Performance Mobile.
