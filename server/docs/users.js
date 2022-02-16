module.exports = {
    '/users/login': {
        post: {
            description: "Login",
            parameters: [
                {
                    name: "username",
                    in: "path",
                    required: true,
                    description: "User name"
                },
                {
                    name: "password",
                    in: "path",
                    required: true,
                    description: "User password"
                }
            ],
            responses: {
                '200': {
                    description: "Login with success"
                },
                '401': {
                    description: "Unauthorized"
                }
            }
        }
    },
    '/users/signup': {
        post: {
            description: "Signup a new used",
            parameters: [
                {
                    name: "username",
                    in: "body",
                    required: true,
                    description: "User name"
                },
                {
                    name: "password",
                    in: "body",
                    required: true,
                    description: "User password"
                },
                {
                    name: "firstName",
                    in: "body",
                    required: true,
                    description: "User first name"
                },
                {
                    name: "lastName",
                    in: "body",
                    required: true,
                    description: "User last name"
                }
            ],
            responses: {
                '200': {
                    description: "Signup with success"
                },
                '500': {
                    description: "First name required"
                }
            }
        }
    }

}