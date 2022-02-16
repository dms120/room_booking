# Joint Room Booking demo

This applications was built using a MERN stack.

When deployed it will initialize a mult container application composed by the following containers:
* **react-app** -  React client application
* **api-server** - Express & NodeJS server
* **mongo** - Mongo database

You can use the following [environment variables](https://docs.docker.com/reference/run/#env-environment-variables) to modify the container's configuration:

**react-app**

| Name                                    | Default                  | Description                                                                         |
|-----------------------------------------|--------------------------|-------------------------------------------------------------------------------------|
| `REACT_APP_API_ENDPOINT`                | `http://localhost:8083/` | The server host                                                                     |
| `REACT_APP_BOOKING_COMPANY_NAMES`       | `COKE,PEPSI`             | The available companies to be selected during user registration.                    |
| `REACT_APP_BOOKING_COMPANY_ABBR`        | `C,P`                    | The companies abbreviations to name the rooms. (I know it cold be the first letter) |
| `REACT_APP_BOOKING_COMPANY_ROOM_NUMBER` | `10,10`                  | The companies available rooms number                                                |
| `REACT_APP_BOOKING_COMPANY_COLORS`      | `#F40009,#004B93`        | The companies colors to give to distinguish the reservations from both of them      |

**api-server**

| Name                         | Default                                    | Description      |
|------------------------------|--------------------------------------------|------------------|
| `MONGO_DB_CONNECTION_STRING` | `mongodb://mongoadmin:secret@mongo:27017/` | The database URL |
| `PORT`                       | `8083`                                     | Port to listen   |

**mongo**
[documentation](https://hub.docker.com/_/mongo)


### Deployment
---

Run `make build` from root to build containers
Run `make run` from root to run containers with docker-compose

---
### API documentation
On **/api-docs** you can find the API documentation built with Swagger.

