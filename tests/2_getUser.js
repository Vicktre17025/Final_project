const { createUser, getUser, deleteUser } = require('../modules/user');

(async () => {
    const user = await createUser();
    const id = user.id;

    const get = await getUser(id);

    console.log("GET USER TEST");

    if (get.id === id) {
        console.log("PASS - GET 200");
    } else {
        console.log("FAIL");
    }

    await deleteUser(id);
})();