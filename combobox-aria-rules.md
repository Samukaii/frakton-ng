# Guia de Acessibilidade: Padrão ARIA Combobox

## 1. Estrutura Semântica e Atributos ARIA

O componente é dividido em três partes principais: o container (ou o próprio input), o campo de texto e a lista suspensa de sugestões.

### No Elemento Pai (Container) ou no Input

* role="combobox": identifica o elemento como um controle que combina um input de texto com um popup de opções.
* aria-expanded="true | false": Indica se a lista de sugestões está visível (true) ou oculta (false). Deve ser atualizado dinamicamente via JS.
* aria-haspopup="listbox": avisa às tecnologias assistivas que o tipo de popup que este combobox aciona é uma lista de opções.
* aria-controls="ID_DA_LISTA": Vincula diretamente o combobox ao id da lista suspensa.

### No Campo de Texto (<input\>)

* aria-autocomplete="list | inline | both | none": especifica o modelo de previsão de texto adotado.
* aria-activedescendant="ID_DA_OPCAO_FOCADA": identifica o id da opção da lista que está atualmente destacada visualmente. Deve ser atualizado dinamicamente ao navegar com as setas.

### Na Lista Suspensa (<ul\>)

* role="listbox": identifica o elemento como uma lista de opções selecionáveis.
* aria-label="..." ou aria-labelledby="...": Fornece um nome acessível para a lista (ex: aria-label="Sugestões de cidades").

### Nos Itens da Lista (<li\>)

* role="option": identifica o elemento como uma opção selecionável dentro da listbox.
* aria-selected="true | false": Indica se o item está atualmente selecionado ou destacado pelo usuário.

------------------------------

## 2. Exemplo de Código HTML Espelho

```html
<!-- Container do Combobox -->
<div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-controls="lista-cidades">
  <label for="input-cidades">Buscar cidades:</label>

<input
type="text"
id="input-cidades"
aria-autocomplete="list"
aria-activedescendant="">

  <!-- Botão de Limpar Opcional -->
<button type="button" id="btn-limpar" aria-label="Limpar campo de busca" aria-controls="input-cidades" style="display: none;">✕</button>
</div>
<!-- Lista Suspensa (Escondida por padrão via CSS) -->
<ul id="lista-cidades" role="listbox" aria-label="Sugestões de cidades" style="display: none;">
  <li id="opt-0" role="option" aria-selected="false">Belo Horizonte</li>
  <li id="opt-1" role="option" aria-selected="false">Blumenau</li>
  <li id="opt-2" role="option" aria-selected="false">Brasília</li>
</ul>
```

------------------------------

## 3. Matriz de Comportamento do Teclado

As interações de teclado devem ser ouvidas no <input\> e variar dependendo do estado atual da lista (aberta ou fechada).

## Quando o Dropdown está FECHADO e o foco está no Input

| Tecla / Atalho              | Ação Esperada                                                                     |
|-----------------------------|-----------------------------------------------------------------------------------|
| ArrowDown (Seta para Baixo) | Abre a lista e move o foco visual (aria-activedescendant) para a primeira opção.  |
| ArrowUp (Seta para Cima)    | Abre a lista e move o foco visual (aria-activedescendant) para a última opção.    |
| Alt + ArrowDown             | Apenas abre a lista, mantendo o foco de digitação estrito no input.               |
| Escape                      | Limpa o texto do campo (se houver texto).                                         |
| Enter                       | Comportamento padrão do formulário (geralmente dispara o submit).                 |
| Qualquer caractere          | Abre a lista automaticamente conforme o usuário digita os critérios de filtragem. |

## Quando o Dropdown está ABERTO

| Tecla / Atalho              | Ação Esperada                                                                                                                                  |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| ArrowDown (Seta para Baixo) | Move o foco para a próxima opção da lista. Se estiver na última, o foco pode retornar para a primeira ou para o input.                         |
| ArrowUp (Seta para Cima)    | Move o foco para a opção anterior da lista. Se estiver na primeira, retorna para o input.                                                      |
| Alt + ArrowUp               | Fecha a lista. Se houver um item destacado, coloca o seu valor no input e mantém o foco no input.                                              |
| Escape                      | Fecha a lista imediatamente e limpa o atributo aria-activedescendant. O foco permanece no input.                                               |
| Enter                       | Seleciona a opção focada por aria-activedescendant, insere o texto no input, fecha a lista e mantém o foco no input.                           |
| Tab                         | Fecha a lista, seleciona a opção focada (opcional, dependendo do design de interação) e move o foco para o próximo elemento focável da página. |

------------------------------

## 4. Regras de Ouro de Ciclo de Vida e Foco

1. Sempre Devolva o Foco: Se o usuário clicar no botão de limpar (#btn-limpar), a lógica JavaScript deve limpar o valor do input, esconder o botão e forçar o foco de volta para o input através de input.focus().
2. Não abra com Tab: O ato de navegar com a tecla Tab para dentro do campo de texto não deve abrir a lista automaticamente. O menu só abre com digitação ou intenção explícita pelas setas.
3. Sincronização de Estados: Toda vez que a lista for exibida ou escondida visualmente (seja via classe CSS ou propriedade display), os atributos aria-expanded e aria-activedescendant devem ser atualizados obrigatoriamente no mesmo milissegundo.

------------------------------
Você precisa que eu crie um arquivo JavaScript completo e comentado para implementar toda essa lógica de teclado mapeada na tabela?

