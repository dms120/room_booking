module.exports = {
    '/bookings': {
        get: {
            description: "Get bookings",
            parameters: [],
            responses: {
                '200': {
                    description: "Bookings were obteined",
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Booking'
                            }
                        }
                    }
                }
            }
        },
        post: {
            description: "Create booking",
            parameters: [],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Booking'
                        }
                    }
                }
            },
            responses: {
                '201': {
                    description: "Booking created successfully"
                },
                '500': {
                    description: 'Server error'
                }
            }
        }
    },
    '/bookings/{id}': {
        put: {
            description: "Update Booking",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id"
                    },
                    required: true,
                    description: "Id of Booking to be updated"
                }
            ],
            responses: {

                '200': {
                    description: "Booking updated successfully"
                },
                '404': {
                    description: "Booking not found"
                },
                '500': {
                    description: "Server error"
                }

            }
        },
        delete: {
            description: "Deleting a Booking",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id"
                    },
                    required: true,
                    description: "Deleting a created Booking"
                }
            ],
            responses: {
                '200': {
                    description: "Booking deleted successfully"
                },
                '404': {
                    description: "Booking not found"
                },
                '500': {
                    description: "Server error"
                }
            }
        }
    }

}