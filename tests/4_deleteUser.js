const { createUser, deleteUser } = require('../modules/user');

(async () => {
    const user = await createUser();
    const id = user.id;

    const status = await deleteUser(id);

    console.log("DELETE TEST");

    if (status === 204) {
        console.log("PASS - DELETE 204");
    } else {
        console.log("FAIL");
    }
})();