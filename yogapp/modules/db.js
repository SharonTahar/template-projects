const knex = require('knex');
const pws = require('p4ssw0rd');
const { response } = require('express');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'panda007',
    database : 'hr'
  }
});


const createUser = ({ fname,lname,email, password }) => {
  return db('users')
    .returning('*')
    .insert({fname: fname,
             lname: lname,
             email: email.toLowerCase(),
             password: pws.hash(password,10),
             createdat: new Date(),
             updatedat: new Date()});
}

const findUser = (email) => {
  return db.select('*')
    .from('users')
    .where({email})
}


const myFavorites = (u_id, p_id) => {
  return db('favorites')
  .returning('*')
  .insert({user_id:u_id, pose_id:p_id})
}

const getAllPoses = () => {
  return db.select('*')
  .from('yogaposes')
}

// const getAllPoses = (user_id) => {
//   return db.select('*')
//   .from('yogaposes')
//   .where ({user_id}) .from('favorites')
// }

module.exports = {
  findUser,
  createUser,
  getAllPoses,
  myFavorites
};
