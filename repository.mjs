import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './notes.db'
});

/* Definim modelele */
const User = sequelize.define('user',{
    id: {
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
        primaryKey: true
    },
    userName : {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    }
});

const Subject = sequelize.define('subject',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    details: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    examDate:{
        type: Sequelize.DATE,
        allowNull: false
    }
});

const Course = sequelize.define('course',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    courseName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    links: {
        type: Sequelize.STRING,
        allowNull: false
    },
    teacherName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    teacherEmail:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

const Lab = sequelize.define('lab',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    labName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    links: {
        type: Sequelize.STRING,
        allowNull: false
    },
    teacherName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    teacherEmail:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

User.hasMany(Subject);
Subject.hasMany(Course,{foreignKey: 'subjectID'});
Course.belongsTo(Subject, {foreignKey: 'subjectID'});
Subject.hasMany(Lab,{foreignKey: 'subjectID'});
Lab.belongsTo(Subject, {foreignKey: 'subjectID'});


async function initialize() {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
}

export {
    initialize,
    User,
    Subject,
    Course,
    Lab
}

