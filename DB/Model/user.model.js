import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'), // Fix ENUM values
            allowNull: false,
            defaultValue: 'user', // Valid default
          },
          
            profilePic:{
                type:DataTypes.STRING,
                allowNull:true
            },confirmEmail:{
                type:DataTypes.BOOLEAN,
                defaultValue:false
            }
          
          
    
}, {
    timestamps: false  
});

export default UserModel;