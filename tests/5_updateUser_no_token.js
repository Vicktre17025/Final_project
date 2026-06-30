const { createUser, updateUserNoToken, deleteUser } = require('../modules/user');

(async () => {
    const user = await createUser();
    const id = user.id;

    const status = await updateUserNoToken(id);

    console.log("NO TOKEN UPDATE TEST");

    if (status === 404) {
        console.log("PASS - 404 expected");
    } else {
        console.log("FAIL");
    }

    await deleteUser(id);
})();