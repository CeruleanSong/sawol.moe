"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_errors_1 = __importDefault(require("http-errors"));
// controllers
const routes_1 = require("./routes");
// other
const config_json_1 = __importDefault(require("./config.json"));
const app = express_1.default();
//////////////////////////////////////////////////
//												//
//					Setup						//
//												//
//////////////////////////////////////////////////
// view engine
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(cookie_parser_1.default());
app.use(body_parser_1.default.json());
//////////////////////////////////////////////////
//												//
//					Routes						//
//												//
//////////////////////////////////////////////////
app.use("/", routes_1.IndexController);
app.use("/css", routes_1.CssController);
app.use("/about", routes_1.AboutController);
app.use("/projects", routes_1.ProjectsController);
app.use("/portfolio", routes_1.PortfolioController);
app.use("/portal", routes_1.PortalController);
//////////////////////////////////////////////////
//												//
//				Error Routes					//
//												//
//////////////////////////////////////////////////
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === `${config_json_1.default.env}` ? err : {};
    res.locals.status = err.status;
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
//////////////////////////////////////////////////
//												//
//					Start						//
//												//
//////////////////////////////////////////////////
app.listen(config_json_1.default.port, () => {
    console.log(`Listening at http://localhost:${config_json_1.default.port}/`);
});
