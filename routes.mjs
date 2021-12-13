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


export default router;