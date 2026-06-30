const { createUser, updateUser, deleteUser } = require('../modules/user');

(async () => {
    const user = await createUser();
    const id = user.id;

    const updated = await updateUser(id);

    console.log("UPDATE TEST");

    if (updated.name === "Updated User") {
        console.log("PASS - UPDATE 200");
    } else {
        console.log("FAIL");
    }

    await deleteUser(id);
})();