# Especificações do Projeto

<!-- Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto -->

## Personas

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja. -->

Ana, 30 anos, filha de Seu Antônio, foi fazer um mestrado em Ciências da Computação no Rio de Janeiro e só pode visitar Seu Antônio duas vezes ao ano. Eles conversam por telefone sempre que possível. Seu Antônio tenta não preocupar Ana e sempre diz que está tudo bem, mas Ana não deixa de se preocupar e teme que caso algo aconteça, Seu Antônio não tenha a quem recorrer. Apesar de Seu Antônio ser bem independente, Ana gostaria de poder contratar um cuidador de confiança para acompanhar Seu Antônio algumas horas por dia para acompanhar Seu Antônio para ir ao mercado, consultas médicas e verificar se ele está tomando seus medicamentos corretamente.  

Seu Antônio, 72 anos, aposentado, mora sozinho em Belo Horizonte, é muito independente e adora jogar xadrez. Seu Antônio não tem muitos conhecidos no Bairro em que mora (conhece alguns vizinhos, mas não tem intimidade com nenhum deles). Apesar de Seu Antônio não se incomodar em ficar mais sozinho, ele gostaria de ter um ou mais vizinhos que ele pudesse contatar em caso de emergência, ou até mesmo visitá-lo de vez em quando para jogar um partida de xadrez. 

//Parente da Idosa - Julia neta da senhora Eugenea tem como sua rotina o maior empecilho com sua avó, já que ela é quem é responsável pelos cuidados da idosa, Julia sai de casa as 06:00 e volta apenas as 22:30 horas, tendo que conciliar trabalho e faculdade. Ela se preocupa muito com sua avó em sua ausência, já que a mesma é diabética.

//Idosa - Senhora Eugenea está na casa dos 68 anos, mora apenas com sua neta Julia, Senhora Eugenea gosta de cuidar de sua horta e fazer crochê, por outro lado ela é bastante ativa e deve seguir uma dieta rigorosa, mas de vez em quando escapa de sua dieta e come alguns morangos, estando sozinha em casa e em algum caso estando longe de sua insulina ela corre o risco recorrente de um acidente grave.

Estudante – Beatriz tem 18 anos, acabou de se formar no ensino médio e iniciou um curso de Técnico em enfermagem. Para pagar o curso e começar a ter alguma experiência prática na área está procurando algum trabalho ou estágio que possibilite ganhar algum dinheiro e colocar em prática o que tem aprendido no curso. 

Voluntário - Maria tem 25 anos e atualmente tem procurado formas de ajudar pessoas no seu tempo livre. Ela possui alguns horários vagos durante a semana, assim como nos sábados e domingos. Tem procurado locais que precisem de ajuda, principalmente, de acordo com suas habilidades. Maria sabe cozinha muito bem, assim como ensinar, e tem experiencia com remédios  farmacêuticos. 



## Histórias de Usuários

<!-- Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/) -->


Como Ana, eu quero contratar um cuidador para acompanhar meu pai, Seu Antônio, ao mercado, consultas médicas e outros. 

Como Seu Antônio, eu quero conhecer vizinhos que eu possa contactar em caso de emergência ou para jogar xadrez comigo de vez em quando. 

//Como Julia desejo ter um controle sobre as últimas medições de glicose de minha vó para saber seu estado atual e um controle se ela está seguindo a dieta e aplicando insulina.

//Como Eugenea desejo poder comer alguns morangos de vez em quando e poder ter controle sobre minha dieta e saúde em tempo real.

//Como administrador devo criar uma funcionalidade para controle de dieta, controle de últimas medições de glicose e controle sobre últimos medicamentos utilizados.

Usuário(contratado): Como estudante, quero me candidatar a um estágio (remunerado) ou emprego que se relacione com a área da saúde. 

Usuário(contratado): Como voluntário, quero encontrar locais que necessitem de ajuda, preferencialmente de acordo com minhas habilidades. 

Administrador(contratante): Eu como contratante, desejo contratar alguém para cuidar do meu avô de segunda a sexta na parte da manhã, de 7 as 12h. 

Administrador(contratante): Eu como contratante, preciso de um voluntário que possa me ajudar nas tarefas do dia-a-dia, como preparar comida, limpeza, ajuda com remédios, etc.


## Requisitos

<!-- As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. -->

### Requisitos Funcionais

<!-- |ID    | Descrição do Requisito  | Prioridade | Responsável |
     |------|-----------------------------------------|----| ----|
     |RF-001|  Cadastro das habilidades/conhecimentos no perfil dos prestadores de serviço. | ALTA |  |
     |RF-002| ------------   | MÉDIA | | 
-->

- Cadastro de usuário 
- Cadastro de voluntário 
- Cadastro de vagas (emprego ou voluntariado) 


### Requisitos não Funcionais

<!-- |ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos. -->

- Integração com API da Polícia Federal para conferência de antecedentes criminais. 
- Uso de design responsivo nas interfaces gráficas



## Restrições

<!-- O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/) -->

- O projeto deverá estar finalizado até 20/12? 
- O projeto deverá ser executado utilizando HTML, JavaScript e CSS