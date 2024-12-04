# YU-GI-OH JO-KEN-PO

**YU-GI-OH JO-KEN-PO** é um jogo interativo que combina os conceitos de "pedra, papel e tesoura" com o universo de **Yu-Gi-Oh!**, utilizando cartas icônicas dos personagens. O projeto apresenta um campo de batalha dinâmico onde os jogadores competem contra a máquina em duelos eletrizantes.

---

## 🎮 **Como Jogar**

1. **Selecione uma carta**: Passe o cursor sobre as cartas no seu lado do campo para visualizar os detalhes.
2. **Clique para jogar**: Escolha sua carta clicando nela para colocá-la em campo.
3. **Resultado do duelo**: O sistema irá comparar a sua carta com a do adversário (computador) para determinar o vencedor com base nas regras clássicas:
   - **Rock** (Pedra) vence **Scissors** (Tesoura).
   - **Scissors** (Tesoura) vence **Paper** (Papel).
   - **Paper** (Papel) vence **Rock** (Pedra).
4. **Reinicie o duelo**: Clique no botão "GANHOU" para iniciar uma nova rodada.

---

## 🚀 **Funcionalidades**

- **Sistema de Pontuação**: Um placar mantém o registro de vitórias e derrotas.
- **Campo de Batalha Visual**: As cartas selecionadas pelos jogadores e pelo computador são exibidas lado a lado.
- **Efeitos Visuais e Temáticos**: 
  - Vídeo de fundo com tema de Yu-Gi-Oh!
  - Cartas estilizadas com animações e detalhes dinâmicos.
- **Interatividade**: 
  - Passe o mouse sobre as cartas para ver detalhes (nome, tipo, imagem).
  - Sons exclusivos para ações de vitória e derrota.

---

## 📁 **Estrutura do Projeto**

### **HTML**
- Estrutura principal com contêineres organizados para o campo de batalha e menu de jogador.

### **CSS**
- **Arquivos Estilos**:
  - `main.css`: Estilos globais.
  - `buttons.css`: Estilos personalizados para botões.
  - `containers_and_frames.css`: Organização visual dos contêineres.
  - `reset.css`: Padronização entre navegadores.

### **JavaScript**
- **Funções Principais**:
  - `drawCards(cardNumbers, fieldSide)`: Renderiza as cartas no campo.
  - `getRandomCardId()`: Seleciona um ID de carta aleatoriamente.
  - `setCardField(cardId)`: Configura o campo com as cartas selecionadas.
  - `checkDuelResults(playerCardId, computerCardId)`: Calcula o vencedor com base nas regras.
  - `updateScore()`: Atualiza o placar.
  - `resetDuel()`: Reinicia o jogo.

---

## 🎨 **Design**

- **Fontes**:
  - Kumbh Sans
  - Press Start 2P
  - Roboto
- **Imagens e Vídeo**:
  - Ícones e artes retirados do universo Yu-Gi-Oh!
  - Vídeo temático exibido em background.

---

## 🛠️ Tecnologias Utilizadas

 - HTML5: Estrutura da aplicação.
 - CSS3: Estilização e layout responsivo.
 - JavaScript: Lógica do jogo e manipulação do DOM.