const predictClassification = require('../services/inferenceService');
const crypto = require('crypto');
const storeData = require('../services/storeData');
const { saveUser, getAllClinic, login, getProfile } = require('../services/sqlService');

async function postPredictHandler(request, h) {
    const { user_id, image } = request.payload;

    // TO DO: Get model
    // const { model } = request.server.app;

    // TO DO: Processing model
    // const { result, confidence_score, explanation, suggestion } = await predictClassification(model, image);
    const prediction_id = crypto.randomUUID();
    const created_at = new Date().toISOString();

    const data = {
        "prediction_id": prediction_id,
        "user_id": user_id,
        "result": result,
        "confidence_score": confidence_score,
        "explanation": explanation,
        "suggestion": suggestion,
        "created_at": created_at
    }

    // TO DO: Store data
    // await storeData(id, data);

    const response = h.response({
        status: 'success',
        message: 'Model is predicted successfully.',
        data
    })
    response.code(201);
    return response;
}

async function postForumHandler(request, h) {
    const payload = request.payload;
  
    // Extract payload
    const forum_id = crypto.randomUUID();
    const user_id = parseInt(payload.user_id, 10);
    const judul = payload.judul;
    const isi = payload.isi;
    const created_at = new Date().toISOString();

    const data = {
        "forum_id": forum_id,
        "user_id": user_id,
        "judul": judul,
        "isi" : isi,
        "created_at": created_at
    }

    // TO DO: Store data
  
    const response = h.response({
        status: 'success',
        message: 'Forum is uploaded successfully.',
        data
    })
    response.code(201);
    return response;
}

async function getAllForumHandler(request, h) {
    // TO DO: Make service for getAllForum()
    // const data = await getAllForum();
  
    const response = h.response({
      status: 'success',
      data
    });
    response.code(200);
    return response;
}

async function getAllClinicHandler(request, h) {
    const data = await getAllClinic();
  
    const response = h.response({
        status: 'success',
        data
    });
    
    response.code(200);
    return response;
}

async function postSignupHandler(request, h) {
    const payload = request.payload;
  
    // Extract payload
    const fullName = payload.fullName;
    const email = payload.email;
    const password = payload.password;
    const childName = payload.childName;
    const childBirthday = new Date(payload.childBirthday);
    const adhdDesc = payload.adhdDesc;

    const data = {
        "fullName": fullName,
        "email": email,
        "password": password,
        "childName": childName,
        "childBirthday": childBirthday,
        "adhdDesc": adhdDesc
    }

    // await saveUser(data);
  
    // const response = h.response({
    //     status: 'success',
    //     message: 'User has been successfully created.',
    //     data
    // })

    // response.code(201);
    // return response;

    if (!fullName || !email || !password || !childName || !childBirthday) {
        return h.response({
            status: 'fail',
            message: 'Missing required field'
        }).code(400); // Bad request
    }

    try {
        const result = await saveUser(data);
        const response = h.response({
            status: 'success',
            message: 'User has been successfully created.',
            data
        });
        response.code(201);
        return response;
    } catch (err) {
        const response = h.response({
            status: 'fail',
            message: err.message
        });
        response.code(400);
        return response;
    }
}

async function postLoginHandler(request, h) {
    const payload = request.payload;
  
    // Extract payload
    const email = payload.email;
    const password = payload.password;

    const data = {
        "email": email,
        "password": password,
    }

    if (!payload.email || !payload.password) {
        return h.response({
            status: 'fail',
            message: 'Missing required field'
        }).code(400); // Bad request
    }

    try {
        const result = await login(data);
        const response = h.response({
            status: 'success',
            message: 'User has been login successfully.',
            result
        });
        response.code(200);
        return response;
    } catch (err) {
        const response = h.response({
            status: 'fail',
            message: err.message
        });
        response.code(401);
        return response;
    }
}

async function getProfileHandler(request, h) {
    const id = request.params.id;

    if (!id) {
        return h.response({
            status: 'fail',
            message: 'Missing required field'
        }).code(400); // Bad request
    }

    try {
        // Passwordnya masih ikutan
        const data = await getProfile(id);
        const response = h.response({
            status: 'success',
            data
        });
        response.code(200);
        return response;
    } catch (err) {
        const response = h.response({
            status: 'fail',
            message: err.message
        });
        response.code(400);
        return response;
    }
}

module.exports = {
    postPredictHandler,
    postForumHandler,
    getAllForumHandler,
    getAllClinicHandler,
    postSignupHandler,
    postLoginHandler,
    getProfileHandler
};