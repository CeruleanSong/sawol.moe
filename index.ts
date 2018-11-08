import express, { NextFunction } from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import createError from "http-errors";
// controllers
import { CssController, IndexController, ProjectsController, AboutController, PortalController, PortfolioController } from "./routes";

// other
import config from "./config.json";

const app: express.Application = express();

//////////////////////////////////////////////////
//												//
//					Setup						//
//												//
//////////////////////////////////////////////////

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());

//////////////////////////////////////////////////
//												//
//					Routes						//
//												//
//////////////////////////////////////////////////

app.use("/", IndexController);
app.use("/css", CssController);
app.use("/about", AboutController);
app.use("/projects", ProjectsController);
app.use("/portfolio", PortfolioController);
app.use("/portal", PortalController);


//////////////////////////////////////////////////
//												//
//				Error Routes					//
//												//
//////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
  });
  
  // error handler
  app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === `${config.env}` ? err : {};
	res.locals.status = err.status
  
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
  
//////////////////////////////////////////////////
//												//
//					Start						//
//												//
//////////////////////////////////////////////////

app.listen(config.port, () => {
	console.log(`Listening at http://localhost:${config.port}/`);
});
