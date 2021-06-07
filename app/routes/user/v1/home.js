const express = require('express');
const router = express.Router();

// controllers 
const { user: userController } = config.path.controllers;

const HomeController = require(`${userController}/v1/HomeController`)


/**
 * @api {post} /api/user/v1/ register
 * @apiVersion 1.0.0
 * @apiName register
 * @apiDescription register user
 * @apiGroup home
 * @apiParam  {varchar} password user password
 * @apiParam  {varchar} name  name
 * @apiParam  {varchar} family  family 
 * @apiParam  {varchar} email email 
 * @apiParam  {varchar} mobile mobile
 * @apiParam  {varchar} company company name
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true,
 *     message:"کاربر با موفقیت ثبت شد"
 * }
 * @apiErrorExample {json} Error-Response:
 * {
 *     success:false,
 *     message:"کاربری با این مشخصات موجود است"
 * }
 */
 router.post('/',HomeController.register.bind(HomeController));



/**
 * @api {get} /api/user/v1/ get user info.
 * @apiVersion 1.0.0
 * @apiName getUser
 * @apiDescription get user info. قسمت کارمندان یا کارفرما بسته به کارمند یا کارفرما بودن کاربر ممکن است خالی باشد
 * @apiGroup home
 * @apiSuccessExample {json} Success-Response:
 * {
 *     success:true,
 *     message:"اطلاعات کاربر با موفقیت ارسال شد",
 *     data: {
 *          active: true,
 *          name: "ریحانه",
 *          family: "شکوهی",
 *          username: "r.shokouhi@gmail.com",
 *          password: "reihaneh@123",
 *          email: "r.shokouhi@gmail.com",
 *          mobile: "09307580142",
 *          company: "teamx",
 *          employer: {
 *              name: "محسن",
 *              family: "مصطفایی",
 *              username: "m.mostafaie@gmail.com"
 *          },
 *          employee: [...{
 *              _id: "60b49ed8293793335c4875f8",
 *              name: "زهرا",
 *              family: "کریمی",
 *              username: "z.karimi@gmail.com"
 *          }],
 *     }
 * }
 */
 router.get('/',HomeController.getUser.bind(HomeController)); 




 /**
  * @api {post} /api/user/v1/app/info app info 
  * @apiVersion 1.0.0
  * @apiName info
  * @apiDescription app info 
  * @apiGroup home
  * @apiParam  {int} versionCode versionCode
  * @apiParam  {varchar} os os
  * @apiSuccessExample {json} Success-Response:
  * {
  *   status: true,
  *   message:"اطلاعات نرم افزار فرستاده شد",
  *   data:{
  *       update:false,
  *       updateUrl:"http://cafebazar.com/ir.team-x.ir/mohsenapp,
  *       force:false
  *  }
  *}
  * @apiErrorExample {json} Error-Response:
  *{
  *    status: false,
  *    message:"کاربر بلاک می باشد",
  *    data:{}
  *}
  */
  router.post('/app/info',HomeController.appInfo.bind(HomeController));
 
 
 
 
 /**
  * @api {post} /api/user/v1/login login
  * @apiVersion 1.0.0
  * @apiName login
  * @apiDescription login user
  * @apiGroup home
  * @apiParam  {varchar} mobileOrEmail user mobile or email
  * @apiParam  {varchar} password user password
  * @apiSuccessExample {json} Success-Response:
  * {
  *     success:true,
  *     message:"کاربر با موفقیت وارد شد",
  *     data:{
  *          idToken: idToken, 
  *          accessToken: accessToken
  *     }
  * }
  * @apiErrorExample {json} Error-Response:
  * {
  *      success:false,
  *      message:"کاربر وارد نشد",
  *      data:{}
  * }
  */
  router.post('/login',HomeController.login.bind(HomeController));


  

 module.exports = router;