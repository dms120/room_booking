const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const logger = require('morgan')
const passport = require("passport")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
const docs = require('./docs')

if (process.env.NODE_ENV !== "production") {
    // Load environment variables from .env file in non prod environments
    require("dotenv").config()
}

require("./strategies/JwtStrategy")
require("./strategies/LocalStrategy")
require("./authenticate")

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/bookingRoutes')
const usersRouter = require('./routes/userRoutes')
const app = express()

const whitelist = process.env.WHITELISTED_DOMAINS
    ? process.env.WHITELISTED_DOMAINS.split(",")
    : []
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },

    credentials: true,
}

app.use(cors(corsOptions))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(passport.initialize())
app.use('/', indexRouter)
app.use('/bookings', apiRouter)
app.use('/users', usersRouter)

/**
 * Initialize Swagger
 */
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(docs)
);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
