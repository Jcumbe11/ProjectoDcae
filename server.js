// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(process.env.PORT||8080);

// *** GET Routes - display pages ***
// Root Route
//Home
app.get('/', function (req, res) {
    var name = 'Jose Cumbe'
    res.render('pages/index',{
        name:name
    });
        
});

//rota para pagina de contacte-nos
app.get('/contacto', function (req, res) {
    res.render('pages/contact');    
});

//rota para pagina de cursos
app.get('/cursos',function(req,res){
    res.render('pages/cursos');

});
//rota para pagina de regulamentos 
app.get('/regulamento',function(req,res){
    res.render('pages/regulamento');

});

//rota para pagina de departamento
app.get('/departamentos',function(req,res){
    res.render('pages/departamentos');
});

//rota para pagina de investigacao
app.get('/investigacao',function(req,res){
    res.render('pages/investigacao');
});

//rota para pagina de departamento
app.get('/estudante',function(req,res){
    res.render('pages/estudante');
});

app.get('/sobrenos',function(req,res){
    res.render('pages/sobrenos');
});

app.get('/visao',function(req,res){
    res.render('pages/visao');
});
app.get('/historia',function(req,res){
    res.render('pages/historia');
});

app.get('/estrutura-organica',function(req,res){
    res.render('pages/estrOrganica');
});
app.get('/corpo-docente',function(req,res){
    res.render('pages/corpoDocente');
});
app.get('/corpo-tecnico',function(req,res){
    res.render('pages/corpoTecn');
});
app.get('/orgao-colegial',function(req,res){
    res.render('pages/orgaoColegial');
});
app.get('/lei',function(req,res){
    res.render('pages/lei');
});
app.get('/lem',function(req,res){
    res.render('pages/lem');
});
app.get('/leg',function(req,res){
    res.render('pages/leg');
});
app.get('/lec',function(req,res){
    res.render('pages/lec');
});

app.get('/dei',function(req,res){
    res.render('pages/dei');
});
app.get('/dec',function(req,res){
    res.render('pages/dec');
});
app.get('/deg',function(req,res){
    res.render('pages/deg');
});
app.get('/dem',function(req,res){
    res.render('pages/dem');
});