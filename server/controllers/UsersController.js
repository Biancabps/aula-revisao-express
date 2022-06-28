const usuarios = [
    {
        id: 1,
        nome: 'Abirosvaldo'
    },
    {
        id: 2,
        nome: 'Ofélia'
    },
    {
        id: 3,
        nome: 'João'
    }
]

const controller = {}
//Método index lista todos

// controller.index = (req, res) => {
//     res.render('usuarios', {
//         title: 'Página dos usuários',
//         usuarios
//     });
// };

//Método show lista um
controller.show = (req, res) => {
    const { id } = req.params
    if(id){
        res.render('usuario', {
            title: 'Página do usuário',
            usuario: usuarios.find(user => user.id == req.params.id)
        });
    } else {
        res.render('usuarios', {
            title: 'Página dos usuários',
            usuarios
        }); 
    }
};

module.exports = controller;