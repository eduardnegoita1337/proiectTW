import express from 'express';
import {User, Subject, Course, Lab} from './repository.mjs';
import {getRecords, postRecord, deleteRecords, getRecord,
headRecord, putRecord, patchRecord, deleteRecord} from './service.mjs';


const router = express.Router();

router.route('/users')
    .get((request, response) => getRecords(User, request, response))
    .post((request, response) => postRecord(User, request, response))
    .delete((request, response) => deleteRecords(User, request, response))

router.route('/users/:id')
.get((request, response) => getRecord(User, request, response))
.head((request, response) => headRecord(User, request, response))
.put((request, response) => putRecord(User, request, response))
.patch((request, response) => patchRecord(User, request, response))
.delete((request, response) => deleteRecord(User, request, response))

router.route('/subjects')
    .get((request, response) => getRecords(Subject, request, response))
    .post((request, response) => postRecord(Subject, request, response))
    .delete((request, response) => deleteRecords(Subject, request, response))

router.route('/subjects/:id')
.get((request, response) => getRecord(Subject, request, response))
.head((request, response) => headRecord(Subject, request, response))
.put((request, response) => putRecord(Subject, request, response))
.patch((request, response) => patchRecord(Subject, request, response))
.delete((request, response) => deleteRecord(Subject, request, response))

router.route('/courses')
    .get((request, response) => getRecords(Course, request, response))
    .post((request, response) => postRecord(Course, request, response))
    .delete((request, response) => deleteRecords(Course, request, response))

router.route('/courses/:id')
.get((request, response) => getRecord(Course, request, response))
.head((request, response) => headRecord(Course, request, response))
.put((request, response) => putRecord(Course, request, response))
.patch((request, response) => patchRecord(Course, request, response))
.delete((request, response) => deleteRecord(Course, request, response))


router.route('/labs')
    .get((request, response) => getRecords(Lab, request, response))
    .post((request, response) => postRecord(Lab, request, response))
    .delete((request, response) => deleteRecords(Lab, request, response))

router.route('/labs/:id')
.get((request, response) => getRecord(Lab, request, response))
.head((request, response) => headRecord(Lab, request, response))
.put((request, response) => putRecord(Lab, request, response))
.patch((request, response) => patchRecord(Lab, request, response))
.delete((request, response) => deleteRecord(Lab, request, response))

//initializam user 
var user = {
    id: null,
    userName: null,
    password: null,
    email: null
}

//ruta inregistrare
router.route("/register").post((req, res) => {

    //findOne()-cauta dupa un element cu acelasi nume
    User.findOne({
        where: {
            userName: req.body.userName,
        }
    }).then((result) => { //result va fii inregistrarea cu numele daca exista,daca nu mai exista niciun utilizator cu numele acela result va fii null

        if (result !== null) {
            res.send("Exista deja acest nume de utilizator")
        }
        else {
            var numbers = /[0-9]/g;
            var litereMari = /[A-Z]/g;
            var litereMici = /[a-z]/g;
            if (req.body.password.match(litereMari) && req.body.password.match(litereMici) && req.body.password.match(numbers) && req.body.password.length >= 8) {
                User.create({
                    userName: req.body.userName,
                    password: req.body.password,
                    email: req.body.email,
                }).then(result => res.json(result))
                res.send("Te-ai inregistrat!")
            }
            else {
                res.json("Parola trebuie sa contina cel putin 8 caractere,o litera mica,o litera mare si o cifra")
            }
        }
    });

})



router.route("/login").get((req, res) => {
    User.findOne({
        where: {
            userName: req.query.userId,
            password: req.query.password
        }
    }).then((result) => {
        if (result !== null) {
            user.id = result.userId;
            user.password = result.password;
            user.userName = result.nume;
            user.email = result.email;
            let id = user.id
            res.json(id + "");
        }
        else {
            (User.findOne({
                where: {
                    userName: req.query.userId
                }
            }).then((result) => {
                if (result !== null) {
                    let p = result.password;
                    res.json("Parola incorecta!")
                }
                else { res.json("Logarea a esuat! Ne pare rau! Incearca sa iti creezi mai intai un cont") }
            }))
        }
    });
});


export default router;