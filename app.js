'use strict'

// chave de acesso para que eu possa pedir dados ao TMDB
const API_KEY = '514cb2bc38679180e2f580bb956bfe16';
// url da documentacao usada como base
const BASE_URL = 'https://api.themoviedb.org/3';
// devolve as imagens do banco
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// imagens de fundo 
const BD_URL = 'https://image.tmdb.org/t/p/original';

// Monta a URL da API do TMDB para buscar filmes populares em português (pt-BR),
// inserindo automaticamente a BASE_URL e a API_KEY dentro da string
const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`

