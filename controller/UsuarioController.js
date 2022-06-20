const Usuario = require("../model/Usuario");

function opadd(req, res){
    res.render('usuario/add.ejs');
};
function add(req, res){
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var foto = req.body.foto;
    var usuario = new Usuario();
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    usuario.foto = foto;
    usuario.save(function (err, result) {
        if(err){
            res.send("Erro ao salvar dados");
        }else{
            res.send("Seus dados foram salvos com sucesso");
        }
    });
}

function lst(req, res){
    Usuario.find({}).then(function(usuarios){
        res.render("usuario/lst.ejs", {Usuarios: usuarios});
    });
};

function filter(req, res){

};

function opedt(req, res){

};
function edt(req, res){

};

function del(req, res){

};

module.exports = {opadd, add, lst, filter, opedt, edt, del};