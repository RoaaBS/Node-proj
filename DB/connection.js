import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('ums', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const ConnectDB = () => {
    sequelize.sync().then(() => {
        console.log('Database connection successful');
    }).catch((error) => {
        console.log('Unable to connect to database:', error);
    });
};

export { sequelize };
