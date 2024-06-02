const { postPredictHandler, postForumHandler, getAllForumHandler, getAllClinicHandler } = require('../server/handler');
 
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
]
 
module.exports = routes;