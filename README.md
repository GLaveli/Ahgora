<img src="https://github.com/GLaveli/Ahgora/blob/main/gitAssets/logo.gif" width="150px" height="120px" align="left"/>

# YouTube APP
Teste Ahgora, APP desenvolvido em ReacJS.

------------------------------------------

# Requisitos:

* React.js V17.0.0 +
* NPM v6.14.10 +

------------------------------------------

# Instalação:

Execute em seu terminal favorito o comando
```
 npm install
```

aguarde até a finalização da instalação e em seguida execute o comando
```
 npm start ou npm run start (caso não funcione o primeiro)
```

ao iniciar o projeto basta acessar a URL
```
 http://localhost:3000
```

# Manual:
A aplicação possui apenas uma página, onde são apresentados o menu de busca e o menu de configurações.

<img src="https://github.com/GLaveli/Ahgora/blob/main/gitAssets/search.png" width="700px" height="400px" align="center"/>

Para cada dia da semana o usuário pode definir quantos minutos em determinado dia ele terá para assistir, sendo assim cada dia da semana comporta apenas a quantidade de vídeos cuja a soma de seus tempos corresponda ao total de minutos escolhido pelo usuário.

para cada busca a página apresenta todos os vídeos que podem ser assistidos durante toda a semana respeitando a soma de todos os minutos informados nos campos da semana

Cada vídeo traz a informação de  duração e também as 5 palavras que mais se repetem na descrição e no título.

(videos ao vivo podem aparecer na lista com duração 0:00)

<img src="https://github.com/GLaveli/Ahgora/blob/main/gitAssets/videoInfo.png" width="700px" height="400px" align="center"/>



------------------------------------------
# netlify:
* https://ahgora-test.netlify.app/
------------------------------------------
# Bibliotecas utilizadas no projeto:
* axios v0.21.1
* momentJS v2.29.1
* react-icons v4.2.0
------------------------------------------
# API's utilizadas no projeto:
* googleapis.com/youtube/v3/
* rapidAPI
