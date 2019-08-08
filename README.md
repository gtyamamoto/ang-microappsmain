# Shell Microfront



##Adicionar novo microapp
ng new application <nome do app>

ng add ngx-build-plus --project <nome do app>

alterar package.json com um novo npm : "build:<nome do app>": "ng build --prod --single-bundle true --project <nome do app> --output-hashing none --vendor-chunk false --output-path dist/shell/<nome do app>",




## Build

Para buildar toda a aplicacao utilizar npm run build
Para buildar apenas uma parte da aplicacao: npm run build:<nome do app>


##Start

Para startar a aplicacao inteira: npm start
Para testar um microapp da aplicacao: ng serve --project <nome da aplicacao> --port <numero de uma porta especifica> --open






