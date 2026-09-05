# Checkpoint 4 - Front

Projeto desenvolvido para o Checkpoint 4 da disciplina de Front (Engenharia de Software - FIAP), sob orientação do professor Wellington Cidade Silva.

## Sistema de Lista de Tarefas do Programador

Aplicação em React + Vite + Tailwind CSS para gerenciamento de tarefas voltado para desenvolvedores, com persistência em `localStorage` e interface estilizada.

### Funcionalidades

- Cadastro de tarefas com Nome, Data, Descrição e Nível de Prioridade
- Marcar tarefa como concluída (e reabrir) ou remover
- Filtros rápidos: Todas, Pendentes, Concluídas
- Persistência automática dos dados no `localStorage`

## Integrantes

| Turma | Nome | RM |
| --- | --- | --- |
| 1ESPI | Eduardo Bechara Medeiros Craveiro | 571081 |
| 1ESPI | Gustavo Moita de Lima | 569180 |
| 1ESPI | Bruno Carreiro Dos Santos | 569423 |

## Repositório

[Link do repositório](https://github.com/BrunoCarreiroCS/cp4_frontend_2_semestre)

## Como executar

```bash
npm install
npm run dev
```

## Estrutura de pastas

```
src/
  components/   Componentes de UI (formulário, lista, item, filtros)
  hooks/        Hooks customizados (useTasks, useLocalStorage)
  utils/        Funções utilitárias e constantes
  index.css     Configuração do Tailwind CSS e tema
```
