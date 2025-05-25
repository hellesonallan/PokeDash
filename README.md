# 🧩 PokeDash - Dashboard de Estatísticas dos Pokémon (1ª Geração)

Este projeto é um **website de dashboard** que apresenta as principais estatísticas dos Pokémon da 1ª geração. Os dados são obtidos através de uma API do Back4App (com autenticação via API Key) e apresentados com gráficos interativos e visualizações.

---

## 📁 Estrutura de Pastas

A estrutura do projeto é organizada de forma modular, facilitando a manutenção e escalabilidade:

```plaintext
PokeDash/
├── config/                  # Configurações como API Keys e variáveis globais
│   └── config.js
├── data/                    # (Opcional) Dados mockados ou cache local
│   └── sample.json
├── public/                  # Arquivos estáticos acessíveis diretamente
│   └── images/              # Imagens públicas (ex: logo, ícones)
├── src/                     # Código-fonte principal
│   ├── assets/              # Ícones, fontes, imagens internas
│   ├── css/                 # Estilos CSS
│   │   └── styles.css
│   ├── js/                  # Scripts JavaScript
│   │   ├── api.js           # Comunicação com a API dos Pokémon
│   │   ├── charts.js        # Lógica para renderização dos gráficos
│   │   ├── dom.js           # Manipulação da interface e elementos HTML
│   │   └── main.js          # Inicialização do app
│   └── index.html           # Página principal da aplicação
└── README.md                # Documentação do projeto
```

---

## 🌐 Tecnologias Utilizadas

- **HTML5** / **CSS3**
- **JavaScript**
- **Chart.js**
- **Bootstrap**
- **API RESTful**
- **Back4App**

---

## 📚 Referências

- Dataset Pokémon Completo retirado de [Kaggle | The Complete Pokemon Dataset by Rounak Banik](https://www.kaggle.com/datasets/rounakbanik/pokemon)

---

## 🚀 Como Começar

Clone este repositório:

```bash
git clone https://github.com/hellesonallan/PokeDash.git
```

---

### Atualizando seu repositório local

Antes de iniciar um novo desenvolvimento, atualize sua branch principal com as últimas mudanças:

```bash
git checkout main
git pull origin main
```

---

### Trabalhando com Git

**1. Criar uma nova branch para desenvolver funcionalidades**

```bash
git checkout meu-nome
```

**2. Adicionar os arquivos modificados para staging:**

```bash
git add .
```

**3. Fazer commit das alterações com uma mensagem descritiva:**

```bash
git commit -m "Padrão: Descrição das alterações feitas"
```

## 📝 Padrão de Commit

Para manter um histórico de commits organizado e claro, utilize os seguintes tipos de mensagens para os commits:

- **chore**: alterações relacionadas à estrutura do projeto ou tarefas de manutenção.  
  Exemplo: `chore: criei uma nova pasta chamada assets`

- **feat**: adição de novas funcionalidades ou alterações no código.  
  Exemplo: `feat: criei o header da página`

- **fix**: correção de bugs ou problemas no código.  
  Exemplo: `fix: resolvido diretório do logo não encontrado`

- **docs**: alterações na documentação do projeto.  
  Exemplo: `docs: adicionei instruções para utilização do git`

**4. Enviar a branch para o repositório remoto:**

```bash
git push origin meu-nome
```
