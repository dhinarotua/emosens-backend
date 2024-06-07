const { postPredictHandler, postForumHandler, getAllForumHandler, getAllClinicHandler, postSignupHandler, postLoginHandler, getProfileHandler, getAllSpeechHandler } = require('../server/handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
  {
    path: '/forum/upload',
    method: 'POST',
    handler: postForumHandler,
    options: {
      payload: {
        allow: ['application/json'],
        output: 'data',
        parse: true
      }
    }
  },
  {
    path: '/forum',
    method: 'GET',
    handler: getAllForumHandler
  },
  {
    path: '/clinic',
    method: 'GET',
    handler: getAllClinicHandler
  },
  {
    path: '/signup',
    method: 'POST',
    handler: postSignupHandler,
    options: {
      payload: {
        allow: ['application/json'],
        output: 'data',
        parse: true
      }
    }
  },
  {
    path: '/login',
    method: 'POST',
    handler: postLoginHandler,
    options: {
      payload: {
        allow: ['application/json'],
        output: 'data',
        parse: true
      }
    }
  },
  {
    path: '/profile/{id}',
    method: 'GET',
    handler: getProfileHandler,
  },
  {
    path: '/speech',
    method: 'GET',
    handler: getAllSpeechHandler,
  },
]
 
module.exports = routes;