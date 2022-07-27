import {NextFunction, Response} from "express";

const createError = require('http-errors');
import * as express from 'express'
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

import indexRouter from './routes';
import usersRouter from './routes/users';

// @ts-ignore
const app: express.Express = express.default();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'out')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next: NextFunction) {
  next(createError(404));
});

// error handler
// @ts-ignore
app.use(function(err: any, req: Request | any, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;