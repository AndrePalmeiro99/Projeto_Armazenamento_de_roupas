*PROJETO PARA ARMAZENAMENTO E ORGANIZAÇÃO DE ROUPAS ENTRE LOJAS*

Projeto utilizando manipulação de JSON com o objetivo de armazenar roupas de diversas lojas

Adições futuras

1-Banco de dados para adição de mais lojas e mais produtos além de roupas </br>
2-Adição de uma interface para facilitação do uso </br>
3-Atualizações nas rotas das lojas,podendo futuramente adicionar e guardar ou atualizar alguma loja errada

Endpoints/rotas

http://127.0.0.1:3333/roupas -> Recebe os dados localizados no arquivo JSON de roupas </br>
http://127.0.0.1:3333/roupas/add -> Adição de novas peças de roupas ao arquivo JSON,atualmente utilizando o site postman </br>
http://127.0.0.1:3333/roupas/:id -> Atualização de dados ou remoção dos mesmos,dependendo se for patch ou delete no postman </br>

Rotas das lojas(material extra para a edição completa do objetivo acima)

http://127.0.0.1:3333/lojas -> Recebe o array das lojas adicionadas(podem ser vistas no arquivo lojaController.js) </br>
http://127.0.0.1:3333/lojas/add -> Adição de lojas ao array(não serão guardadas caso feche o servidor) </br>
http://127.0.0.1:3333/lojas/delete -> Remoção de uma loja do array
