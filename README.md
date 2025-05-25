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

## 🚀 Como Começar

Clone este repositório:

```bash
git clone https://github.com/hellesonallan/PokeDash.git
```
