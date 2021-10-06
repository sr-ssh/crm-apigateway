
const Controller = require(`${config.path.controllers.user}/Controller`);
const TAG = 'v1_account';
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");


module.exports = new class AccountController extends Controller {

    async index(req, res) {
        return res.json({ success: true, message: "Account v1" });

    }
    
    async getUserAccount(req, res) {
        try {
            let user = await this.model.User.findById(req.decodedData.user_id)

            let params = {
                active: user.active,
                id: user._id,
                family: user.family,
                email: user.email,
                mobile: user.mobile,
                address: user.address,
                type: user.type,
            }

            if(user.type == config.employer){
                params.company = user.company
                params.nationalIDCode = user.nationalIDCode
                params.nationalCode = user.nationalCode
                params.financialCode = user.financialCode
                params.registerNo = user.registerNo
                params.postalCode = user.postalCode
            }

            if(user.employer && user._id.toString() != user.employer.toString())
                params.employer = await this.model.User.findById(user.employer, { family: 1, company: 1 })
            

            return res.json({ success : true, message : 'اطلاعات کاربر با موفقیت ارسال شد', data : params})
        }
        catch (err) {
            let handelError = new this.transforms.ErrorTransform(err)
                .parent(this.controllerTag)
                .class(TAG)
                .method('getUserAccount')
                .inputParams(req.body)
                .call();

            if (!res.headersSent) return res.status(500).json(handelError);
        }
    }

    async editEmployerAccount(req, res) {
        try {

            req.checkBody('family', 'please enter family').notEmpty();
            req.checkBody('nationalIDCode', 'please enter nationalIDCode').optional({nullable: true,checkFalsy: true}).isNumeric();
            req.checkBody('company', 'please enter company').optional({nullable: true,checkFalsy: true}).isString();
            req.checkBody('address', 'please enter address').notEmpty().isString();
            req.checkBody('nationalCode', 'please enter nationalCode').optional({nullable: true,checkFalsy: true}).isNumeric();
            req.checkBody('financialCode', 'please enter financialCode').optional({nullable: true,checkFalsy: true}).isNumeric();
            req.checkBody('registerNo', 'please enter registerNo').optional({nullable: true,checkFalsy: true}).isNumeric();
            req.checkBody('postalCode', 'please enter postalCode').optional({nullable: true,checkFalsy: true}).isNumeric();

            if (this.showValidationErrors(req, res)) return;

            let params = {
                family: req.body.family,
                nationalIDCode: req.body.nationalIDCode,
                company: req.body.company,
                address: req.body.address,
                nationalCode: req.body.nationalCode,
                financialCode: req.body.financialCode,
                registerNo: req.body.registerNo,
                postalCode: req.body.postalCode
            }

            await this.model.User.update({ _id: req.decodedData.user_id }, params)

            return res.json({ success : true, message : 'اطلاعات کاربر با موفقیت ویرایش شد', data: { status: true }})
        }
        catch (err) {
            let handelError = new this.transforms.ErrorTransform(err)
                .parent(this.controllerTag)
                .class(TAG)
                .method('editUserAccount')
                .inputParams(req.body)
                .call();

            if (!res.headersSent) return res.status(500).json(handelError);
        }
    }

}


