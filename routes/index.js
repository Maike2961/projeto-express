const express = require('express')

//rotas (quando o servidor for acessado, pra onde ele vai)
const router = express.Router();

/* router.get('/', (req, res) =>{
    res.send("ola mundão do node...")
}); */
router.get('/posts/:id',(req, res)=>{
    let id = req.params.id;
    res.send('ID do post: '+id);
})

// trocando ID por SLUG
/* router.get('/posts/:slug',(req, res)=>{
    let slug = req.params.slug;
    res.send('SLUG do post: '+slug);
}) */

router.get('/rota1', (req, res) =>{
    res.send("pagina sobre ROTA1...")
});

router.get('/rota2', (req, res) =>{

   /*  let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let idade = req.query.idade */

    //inserir informacao na url como /?nome=maike&idade=22
   /*  res.send("ola "  + req.query.nome + " voce tem " + req.query.idade + " anos de idade") */

   res.json(
   /*  dados: nome + ' ' + sobrenome + " tem " + idade */
   (req.query)
   )
}); 

module.exports = router;