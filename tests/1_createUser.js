const { createUser } = require('../modules/user');

(async () => {
    const user = await createUser();

    console.log("CREATE USER TEST");

    if (user.id) {
        console.log("PASS - User created (201 expected)");
    } else {
        console.log("FAIL");
    }

    console.log(user);
})();