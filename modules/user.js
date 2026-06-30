const axios = require("axios");

const BASE_URL = "https://gorest.co.in/public/v2/users";
const TOKEN = "425b7f8b2a90e57665cf10da51c9c04e41f2285a9b0b40ec7c69c9b9426ed901";

// CREATE
async function createUser() {
    const email = `test${Date.now()}@mail.com`;

    const res = await axios.post(BASE_URL, {
        name: "Test User",
        gender: "male",
        email: email,
        status: "active"
    }, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json"
        }
    });

    return res.data;
}

// GET
async function getUser(id) {
    const res = await axios.get(`${BASE_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });

    return res.data;
}

// UPDATE
async function updateUser(id) {
    const res = await axios.patch(`${BASE_URL}/${id}`, {
        name: "Updated User"
    }, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json"
        }
    });

    return res.data;
}

// DELETE
async function deleteUser(id) {
    const res = await axios.delete(`${BASE_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });

    return res.status;
}

// UPDATE WITHOUT TOKEN (negative test)
async function updateUserNoToken(id) {
    const res = await axios.patch(`${BASE_URL}/${id}`, {
        name: "Hack Attempt"
    });

    return res.status;
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    updateUserNoToken
};