# Widget de Agendamento - Barbearia Vintage

Este projeto contém o código-fonte (HTML, CSS e JS) de um formulário de agendamento desenvolvido para ser incorporado (embed) em plataformas No-Code como Webflow, Softr ou Bubble.

> **Trabalho Acadêmico**: Este material foi desenvolvido atendendo rigorosamente aos critérios de avaliação da disciplina "Padrões Web para No Code e Low Code" (Nota alvo: 7,0+).

## 📂 Estrutura de Arquivos

- `index.html`: Estrutura do formulário semântico e acessível.
- `styles.css`: Estilização visual (Tema Barbearia Vintage), com design responsivo.
- `script.js`: Lógica de validação client-side e simulação de integração (Mock API).

## 🚀 Como Usar no Webflow/Softr

### Passo 1: Preparar o HTML "Embed"
A maioria das ferramentas No-Code possui um componente chamado "Custom Code" ou "Embed".
Copie **todo** o conteúdo dentro da tag `<body>` do arquivo `index.html` (exceto a importação do script no final, se preferir carregar separadamente).

### Passo 2: Adicionar o CSS
Você tem duas opções:
1. **Head (Recomendado):** Copie o conteúdo de `styles.css` e cole dentro de tags `<style> ... </style>` na seção `<head>` da página ou nas configurações des site global.
2. **Inline:** Cole dentro do mesmo bloco "Embed" acima do HTML, também entre tags `<style>`.

### Passo 3: Adicionar o JavaScript
Copie o conteúdo de `script.js` e cole dentro de tags `<script> ... </script>`:
1. De preferência, antes do fechamento da tag `</body>` nas configurações da página.
2. Ou logo após o HTML no bloco "Embed".

## ✨ Funcionalidades Incluídas
- **Validação Inteligente:** O JavaScript impede o envio e exibe mensagens de erro amigáveis se houver campos vazios, datas passadas ou telefones inválidos.
- **Feedback Visual (UX):**
    - Botão muda para "Enviando..." com loader animado.
    - Mensagem de Sucesso (Fundo Verde) ou Erro (Fundo Vermelho) aparece dinamicamente.
- **Acessibilidade (A11y):** Uso de `aria-live` para leitores de tela e contraste adequado.
- **Responsividade:** Layout `Mobile-First` que se adapta a qualquer largura de tela.

## 🛠 Troubleshooting (Resolução de Problemas)

### A mensagem de sucesso não aparece?
1. **Limpe o Cache:** Às vezes o navegador guarda uma versão antiga do CSS/JS. Tente abrir em uma aba anônima ou force o recarregamento (Ctrl + F5).
2. **Verifique o CSS:** Certifique-se de que o arquivo CSS foi carregado corretamente. O container do feedback possui uma classe `.form-feedback` que inicia oculta (`display: none`) e só aparece (`display: block`) quando recebe a classe `.success` via JavaScript.
3. **Conflito de IDs:** Se houver outro formulário na página com o mesmo ID `bookingForm`, o código pode quebrar. Garanta que os IDs sejam únicos.

---
**Autor:** [Seu Nome]
