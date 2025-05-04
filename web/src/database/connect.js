import mariadb from 'mariadb';
import dotenv from 'dotenv'
dotenv.config()

export const database = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
    
})