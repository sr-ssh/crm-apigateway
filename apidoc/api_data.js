define({ "api": [
  {
    "type": "put",
    "url": "/api/user/v1/account/employer",
    "title": "edit employer account",
    "version": "1.0.0",
    "name": "editEmployerAccount",
    "description": "<p>edit employer account</p>",
    "group": "account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>user family</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": true,
            "field": "nationalIDCode",
            "description": "<p>user national ID code</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": true,
            "field": "company",
            "description": "<p>user company</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": true,
            "field": "nationalCode",
            "description": "<p>user company national code</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": true,
            "field": "financialCode",
            "description": "<p>user company financial code</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": true,
            "field": "registerNo",
            "description": "<p>user company register number</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": true,
            "field": "postalCode",
            "description": "<p>user company postal code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "voipNumbers",
            "description": "<p>user voip numbers</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"اطلاعات کاربر با موفقیت ویرایش شد\", \n    data: { status: true }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/account.js",
    "groupTitle": "account"
  },
  {
    "type": "put",
    "url": "/api/user/v1/account",
    "title": "edit user account",
    "version": "1.0.0",
    "name": "editUserAccount",
    "description": "<p>edit user account: only send one of the params, company param is for employers</p>",
    "group": "account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>user family</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "address",
            "description": "<p>user address</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "company",
            "description": "<p>user company, available for employers only</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"اطلاعات کاربر با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    success: false,\n    message: \"اطلاعات وارد شده صحیح نمی باشد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/account.js",
    "groupTitle": "account"
  },
  {
    "type": "get",
    "url": "/api/user/v1/account",
    "title": "get user account",
    "version": "1.0.0",
    "name": "getUserAccount",
    "description": "<p>get user account. قسمت کارفرما بسته به کارمند یا کارفرما بودن کاربر ممکن است خالی باشد</p>",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success:true,\n    message:\"اطلاعات کاربر با موفقیت ارسال شد\",\n    data: {\n         active: true,\n         _id: \"60d72865519b311c905f9566\",\n         family: \"شکوهی\",\n         password: \"reihaneh@123\",\n         email: \"r.shokouhi@gmail.com\",\n         mobile: \"09307580142\",\n         employer: {\n             _id: \"60d72865519b311c905f9566\",\n             family: \"مصطفایی\",\n             company: \"teamx\"\n         }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/account.js",
    "groupTitle": "account"
  },
  {
    "type": "get",
    "url": "/api/user/v1/customer",
    "title": "get customer",
    "version": "1.0.0",
    "name": "getCustomer",
    "description": "<p>get customer .It gives you the customer or seller information of the phone number you sent , if there is no customer or no seller with that phone number it sends false instead of customer or seller information</p>",
    "group": "customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>customer or seller phone number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response 1 :",
          "content": "{\n     success: true,\n     message: \"اطلاعات با موفقیت ارسال شد\",\n     data: {\n         customer: {\n             _id: \"617925b1c601dd6ba7185fa7\"\n             family: \"مصطفایی\",\n             mobile: \"09625846122\",\n             phoneNumber: \"09625846122\",\n             lastAddress: \"کلاهدوز ۴\"\n         },\n         seller: {\n             _id: \"6188d4ff675723337cff3d09\"\n             family: \"رضایی\",\n             mobile: \"09307580121\"\n         }\n      }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response 2 :",
          "content": "{\n     success: true,\n     message: \"اطلاعات با موفقیت ارسال شد\",\n     data: {\n         customer: {\n             _id: \"617925b1c601dd6ba7185fa7\"\n             family: \"مصطفایی\",\n             mobile: \"09625846122\",\n             phoneNumber: \"09625846122\",\n             lastAddress: \"کلاهدوز ۴\"\n         },\n         seller: false\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: true,\n     message: \"اطلاعاتی موجود نیست\",\n     data: { status: false }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/customer.js",
    "groupTitle": "customer"
  },
  {
    "type": "get",
    "url": "/api/user/v1/customer/list",
    "title": "get customers",
    "version": "1.0.0",
    "name": "getCustomers",
    "description": "<p>get customers . respnse description: by &quot;order&quot; field we meant order length, &quot;lastBuy&quot; is the date of the customer last buy,and &quot;total&quot; is the total price of all customer orders. all params are necessary and in case of no entry , there is a flag in parantheses for each param.if that flag entered it asumed as no entry</p>",
    "group": "customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>customer family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>customer mobile (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtFrom",
            "description": "<p>customer membership from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtTo",
            "description": "<p>customer membership until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyFrom",
            "description": "<p>customer last buy from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyTo",
            "description": "<p>customer last buy until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderFrom",
            "description": "<p>minimum number of orders (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderTo",
            "description": "<p>maximum number of orders (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "totalFrom",
            "description": "<p>minimum total price of all orders of customer (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "totalTo",
            "description": "<p>maximum total price of all orders of customer (&quot;0&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"اطلاعات مشتریان با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         family: \"مصطفایی\",\n         mobile: \"09625846122\",\n         birthday: \"1990-12-18T23:59:00.798Z\",\n         createdAt: \"2010-12-18T23:59:00.798Z\",\n         order: 4,\n         lastBy: \"2021-12-18T23:59:00.798Z\",\n         total: 270000\n      }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/customer.js",
    "groupTitle": "customer"
  },
  {
    "type": "get",
    "url": "/api/user/v1/customer/excel",
    "title": "get excel customers",
    "version": "1.0.0",
    "name": "getExcelCustomers",
    "description": "<p>get Excel customers . respnse description: by &quot;order&quot; field we meant order length, &quot;lastBuy&quot; is the date of the customer last buy,and &quot;total&quot; is the total price of all customer orders. all params are necessary and in case of no entry , there is a flag in parantheses for each param.if that flag entered it asumed as no entry</p>",
    "group": "customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>customer family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>customer mobile (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtFrom",
            "description": "<p>customer membership from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtTo",
            "description": "<p>customer membership until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyFrom",
            "description": "<p>customer last buy from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyTo",
            "description": "<p>customer last buy until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderFrom",
            "description": "<p>minimum number of orders (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderTo",
            "description": "<p>maximum number of orders (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "totalFrom",
            "description": "<p>minimum total price of all orders of customer (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "totalTo",
            "description": "<p>maximum total price of all orders of customer (&quot;0&quot;)</p>"
          }
        ]
      }
    },
    "filename": "app/routes/user/v1/customer.js",
    "groupTitle": "customer"
  },
  {
    "type": "post",
    "url": "/api/user/v1/discount/",
    "title": "add discount",
    "version": "1.0.0",
    "name": "addDiscount",
    "description": "<p>add discount.</p>",
    "group": "discount",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer",
            "description": "<p>customer mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "percentage",
            "description": "<p>discount percent (min=0, max=100)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "type",
            "description": "<p>discount type (&quot;تولد&quot; or &quot;فرد&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "sms",
            "description": "<p>send sms boolean</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"تخفیف با موفقیت ثبت شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/discount.js",
    "groupTitle": "discount"
  },
  {
    "type": "get",
    "url": "/api/user/v1/discount/",
    "title": "get discounts",
    "version": "1.0.0",
    "name": "getDiscounts",
    "description": "<p>get discounts.There is only 2 types: &quot;تولد&quot; and &quot;فرد&quot; ,if the type be &quot;تولد&quot; then we don't have customer field otherwise we have customer.</p>",
    "group": "discount",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"لیست تخفیف ها با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         name: \"ولنتاین\" ,\n         type: \"فرد\",\n         percentage: 20,\n         sms: true,\n         customer: \"60b72a70e353f0385c2fe5af\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/discount.js",
    "groupTitle": "discount"
  },
  {
    "type": "post",
    "url": "/api/user/v1/employee/application",
    "title": "add application",
    "version": "1.0.0",
    "name": "addApplication",
    "description": "<p>add application</p>",
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>employer mobile</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"درخواست با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"درخواستی موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "post",
    "url": "/api/user/v1/employee",
    "title": "add employee",
    "version": "1.0.0",
    "name": "addEmployee",
    "description": "<p>add employee</p>",
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "usernameOrMobile",
            "description": "<p>employee username or mobile</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"کاربر با موفقیت اضافه شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    success: false,\n    message: \"کاربر موجود نمی باشد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "put",
    "url": "/api/user/v1/employee",
    "title": "change employee permission",
    "version": "1.0.0",
    "name": "changeEmployeePermission",
    "description": "<p>change employee permission</p>",
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "_id",
            "description": "<p>employee id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "voipNo",
            "description": "<p>employee voip number</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "permissions",
            "description": "<p>object exactly like it is sent</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"دسترسی های کارمند خواسته شده با موفقیت تغییر پیدا کرد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    success: false,\n    message: \"دسترسی های کارمند خواسته شده با موفقیت تغییر پیدا نکرد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "put",
    "url": "/api/user/v1/employee/application",
    "title": "edit employee application",
    "version": "1.0.0",
    "name": "editApplication",
    "description": "<p>edit employee application, in status : send 1 for in progress, 2 for hired, 3 for closed application.</p>",
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>application status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "applicationId",
            "description": "<p>application id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"درخواست با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"درخواستی موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/api/user/v1/employee/application",
    "title": "get employees applications",
    "version": "1.0.0",
    "name": "getApplications",
    "description": "<p>get employees applications</p>",
    "group": "employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"ارسال درخواست ها با موفقیت انجام شد\",\n    data: \n     {\n         \"id\": \"60d9ce1bef1e876eb29265cf\",\n         \"active\": true,\n         \"status\": 1,\n         \"employer\": \"60d9ce1bef1e876eb29278c4\",\n         \"employee\": {\n             \"_id\": \"\",\n             \"family\": \"شکوهی\",\n             \"mobile\": \"09307580142\"\n         },\n         \"createdAt\": \"2021-06-01T06:54:01.691Z\",\n         \"updatedAt\": \"2021-06-01T06:54:01.691Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/api/user/v1/employee",
    "title": "get employees",
    "version": "1.0.0",
    "name": "getEmployees",
    "description": "<p>get employees</p>",
    "group": "employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"کارمندان با موفقیت فرستاده شدند\"و\n    data: [...{\n         _id: '60d9ce1bef1e876eb29265cf',\n         family: 'علی رضایی',\n         mobile: '093012342',\n         permission: [...{\n             no: 1,\n             status: true\n         }]\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "get",
    "url": "/api/user/v1/employee/permission",
    "title": "get employees permissions",
    "version": "1.0.0",
    "name": "getEmployeesPermission",
    "description": "<p>get employees permission, employees only get the status part in response</p>",
    "group": "employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"با موفقیت انجام شد\",\n    data: \n     {\n        permission: { \n            addOrder: true,\n            getOrders: true,\n            reminder: true,\n            getProducts: true,\n            finance: true,\n            getCustomers: true,\n            getEmployees: true,\n            getDiscounts: true\n          },\n        type: 1,\n        status: 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "delete",
    "url": "/api/user/v1/employee",
    "title": "remove employee",
    "version": "1.0.0",
    "name": "removeEmployee",
    "description": "<p>remove employee by id</p>",
    "group": "employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "_id",
            "description": "<p>employee id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"کارمند خواسته شده با موفقیت حذف شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    success: false,\n    message: \"کارمند خواسته شده حذف نشد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/employee.js",
    "groupTitle": "employee"
  },
  {
    "type": "post",
    "url": "/api/user/v1/finance/bill",
    "title": "add bill",
    "version": "1.0.0",
    "name": "addBill",
    "description": "<p>add bill</p>",
    "group": "finance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>current cost name</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "cost",
            "description": "<p>current cost</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"هزینه جاری با موفقیت اضافه شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/finance.js",
    "groupTitle": "finance"
  },
  {
    "type": "get",
    "url": "/api/user/v1/finance/bill",
    "title": "get bills",
    "version": "1.0.0",
    "name": "getBills",
    "description": "<p>get bills</p>",
    "group": "finance",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"هزینه های جاری با موفقیت ارسال شد\",\n    data: [...{\n         active: true,\n         name: \"اجاره\",\n         cost: \"2000000\",\n         createdAt: \"2021-06-01T06:54:01.691Z\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/finance.js",
    "groupTitle": "finance"
  },
  {
    "type": "get",
    "url": "/api/user/v1/finance/summary",
    "title": "get finance summary",
    "version": "1.0.0",
    "name": "getFinanceSummary",
    "description": "<p>get finance summary , by summary we meant income and outcome in toman</p>",
    "group": "finance",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"مجموع درامد ها و مخارج با موفقیت ارسال شد\",\n    data: {\n        income: \"1500000\",\n        outcome: \"1000000\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/finance.js",
    "groupTitle": "finance"
  },
  {
    "type": "post",
    "url": "/api/user/v1/app/info",
    "title": "app info",
    "version": "1.0.0",
    "name": "info",
    "description": "<p>app info</p>",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "versionCode",
            "description": "<p>versionCode</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "os",
            "description": "<p>os</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  status: true,\n  message:\"اطلاعات نرم افزار فرستاده شد\",\n  data:{\n      update:false,\n      updateUrl:\"http://cafebazar.com/ir.team-x.ir/mohsenapp,\n      force:false\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n   status: false,\n   message:\"کاربر بلاک می باشد\",\n   data:{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/home.js",
    "groupTitle": "home"
  },
  {
    "type": "post",
    "url": "/api/user/v1/login",
    "title": "login",
    "version": "1.0.0",
    "name": "login",
    "description": "<p>login user</p>",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobileOrEmail",
            "description": "<p>user mobile or email</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success:true,\n    message:\"کاربر با موفقیت وارد شد\",\n    data:{\n         idToken: idToken, \n         accessToken: accessToken\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success:false,\n     message:\"کاربر وارد نشد\",\n     data:{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/home.js",
    "groupTitle": "home"
  },
  {
    "type": "post",
    "url": "/api/user/v1/",
    "title": "register",
    "version": "1.0.0",
    "name": "register",
    "description": "<p>register user.all params are necessary and in case of no entry , there is a flag in parantheses for each optional param.if that flag entered it asumed as no entry. position 1 means employer and position 2 means employee.</p>",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>family</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>email (&quot;a@a.com&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "code",
            "description": "<p>verification code</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "position",
            "description": "<p>user position: employee(2) or employer(1)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "companyName",
            "description": "<p>company name: required for employer only</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "companyAddress",
            "description": "<p>company address: required for employer only</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "employerMobile",
            "description": "<p>employer mobile: required for employee only</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success:true,\n    message:\"کاربر با موفقیت ثبت شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    success:false,\n    message:\"کاربری با این مشخصات موجود است\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/home.js",
    "groupTitle": "home"
  },
  {
    "type": "post",
    "url": "/api/user/v1/verificationcode",
    "title": "requset verification Code",
    "version": "1.0.0",
    "name": "verificationCode",
    "description": "<p>requset verification Code</p>",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>user mobile</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success:true,\n     message: \"کد تاییدیه به شماره موبایل داده شده ، با موفقیت فرستاده شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success:false,\n     message:\"کاربری با این شماره موبایل در دسترس نمی باشد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/home.js",
    "groupTitle": "home"
  },
  {
    "type": "post",
    "url": "/api/user/v1/lead",
    "title": "add lead",
    "version": "1.0.0",
    "name": "addLead",
    "description": "<p>add lead</p>",
    "group": "lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>lead family</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>lead mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of lead</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سرنخ شما با موفقیت ثبت شد\",\n     data: { status: true }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n     success : true, \n     message : \"سرنخ وارد شده، موجود است\",\n     data: { status: true }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/lead.js",
    "groupTitle": "lead"
  },
  {
    "type": "post",
    "url": "/api/user/v1/lead",
    "title": "add lead",
    "version": "1.0.0",
    "name": "addLead",
    "description": "<p>add lead</p>",
    "group": "lead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>lead family</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>lead mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of lead</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سرنخ شما با موفقیت ثبت شد\",\n     data: { status: true }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n     success : true, \n     message : \"سرنخ وارد شده، موجود است\",\n     data: { status: true }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/lead.js",
    "groupTitle": "lead"
  },
  {
    "type": "get",
    "url": "/api/user/v1/lead",
    "title": "get leads",
    "version": "1.0.0",
    "name": "getLeads",
    "description": "<p>get leads</p>",
    "group": "lead",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سرنخ ها با موفقیت ارسال شد\",\n     data: [...{\n            _id: \"61669d38a19885330ee5d7b2\",\n          family: \"ریحانه شکوهی\" ,\n          mobile: \"09307580142\",\n          description: \"از شرکت روغن سازان مشهد\",\n            accepted: true\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/lead.js",
    "groupTitle": "lead"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/notes",
    "title": "add Notes to order",
    "version": "1.0.0",
    "name": "addNotes",
    "description": "<p>add notes : all params are necessary.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "notes",
            "description": "<p>notes information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   orderId : \"60b72a70e353f0385c2fe5af\",\n   notes: [...{\n        text: \"مشتری خواهان کالاست\",\n        createdAt : \"2020-05-31T05:42:13.845Z\",\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"یادداشت با موفقیت اضافه شد\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"سفارش موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order",
    "title": "add order",
    "version": "1.1.0",
    "name": "addOrder",
    "description": "<p>add order</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>array of product objects</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "notes",
            "description": "<p>array of notes objects</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>customer information</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "seller",
            "description": "<p>seller information</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "reminder",
            "description": "<p>number of days for reminding</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "duration",
            "description": "<p>order duration in ISO type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>number of days for reminding</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "mobile",
            "description": "<p>customer guest mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "force",
            "description": "<p>it will be checked if there are a number of products in stock. if you do not want to be checked set force to 1. default 0.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \n       \"force\":1,\n       \"products\": [\n           {\n           \"_id\": \"6183d40ae31477609c9ae820\",\n           \"name\":\"A4\",\n           \"quantity\": 3,\n           \"sellingPrice\": \"10000\",\n           \"ingredients\":[],\n           \"checkWareHouse\":true\n           },{\n           \"_id\":\"6181364e7bc0343e6ede593c\",\n           \"name\":\"مداد رنگی\",\n           \"quantity\":1,\n           \"sellingPrice\":\"25000\",\n           \"ingredients\":[{\"amount\":1,\"stock\":{\"amount\":0,\"_id\":\"618144e37bc0343e6ee1e45c\"}}],\n           \"checkWareHouse\":true\n           }\n       ],\n       \"notes\": [...{\n        text: \"مشتری خواهان کالاست\",\n        createdAt : \"2020-05-31T05:42:13.845Z\",\n   }],\n       \"customer\": {\n           \"family\": \"محمد جواد حیدری\",\n           \"phoneNumber\": \"05136045232\",\n           \"company\":\"مجید\"\n       },\n       \"seller\": {\n           \"family\": \"محمد جواد حیدری\",\n           \"mobile\": \"05136045232\"\n       },\n       \"address\": \"معلم 24\",\n       \"reminder\": -1,\n       \"duration\":\"2021-11-08T07:28:50.413Z\",\n       \"mobile\": \"09307580140\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارش شما با موفقیت ثبت شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/",
    "title": "add order",
    "version": "1.0.0",
    "name": "addOrder",
    "description": "<p>add order: customer birthday and reminder are optional.all params are necessary and in case of no entry , there is a flag for each optional param.if that flag entered it asumed as no entry.birthday flag is &quot;1900-01-01T05:42:13.845Z&quot;.reminder flag and duration flag are -1.address flag is &quot; &quot;</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>array of product objects</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>customer information</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "reminder",
            "description": "<p>number of days for reminding</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارش شما با موفقیت ثبت شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/trackingcode",
    "title": "add tracking code",
    "version": "1.0.0",
    "name": "addTrackingCode",
    "description": "<p>add tracking code</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerId",
            "description": "<p>customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trackingCode",
            "description": "<p>order tracking code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      success: true,\n      message: \"کد پیگیری با موفقیت ثبت شد\", \n        data: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      success: true,\n      message: \"کد پیگیری تکراری است\", \n        data: { staus: false }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/details/sharelink",
    "title": "create share link",
    "version": "1.0.0",
    "name": "createShareLink",
    "description": "<p>create share link for order.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "type",
            "description": "<p>invoice type. 0 -&gt; formal , 1 -&gt; informal</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"لینک اشتراک گذاری با موفقیت ارسال شد\",\n     data:{\n         orderId:\"5435435435865419685\",\n         keyLink:\"KTH7527AIC8QB\"\n         }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"خطا در ایجاد لینک\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "delete",
    "url": "/api/user/v1/order/",
    "title": "delete order",
    "version": "1.0.0",
    "name": "deleteOrder",
    "description": "<p>delete order product</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "productId",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارش با موفقیت حذف شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"سفارش موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/price",
    "title": "edit order price",
    "version": "1.0.0",
    "name": "editOrderPrice",
    "description": "<p>edit order price of one of it's products</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>order status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "productId",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"قیمت سفارش با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"سفارش موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/price",
    "title": "edit order quantity",
    "version": "1.0.0",
    "name": "editOrderQuantity",
    "description": "<p>edit order quantity of one of it's products</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>order status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "productId",
            "description": "<p>product id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"تعداد سفارش با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"سفارش موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/status",
    "title": "edit order status",
    "version": "1.0.0",
    "name": "editOrderStatus",
    "description": "<p>edit order status, in status : send 0 for normal order , send 2 to cancele the order</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>order status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"وضعیت سفارش با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/edit/priority",
    "title": "edit priority order",
    "version": "1.0.0",
    "name": "editPriorityOrder",
    "description": "<p>edit Priority Order : all params are necessary.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "priority",
            "description": "<p>0 -&gt; default , 1 -&gt; veryLow , 2 -&gt; low , 3 -&gt; medium  , 4 -&gt; hight  , 5 -&gt; veryHight</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   orderId : \"60b72a70e353f0385c2fe5af\",\n   priority : 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"اولویت فرصت فروش با موفقیت تغییر کرد\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"خطا در ویرایش اولویت فرصت فروش\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/seller/status",
    "title": "edit sale opportunity seler status",
    "version": "1.0.0",
    "name": "editSaleOpportunitySellerStatus",
    "description": "<p>edit ale opportunity seller status, in status : send 0 to free a sale opportunity, send 1 for getting a sale opportunity</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>order status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"وضعیت سفارش با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/trackingTime",
    "title": "edit Tracking Time order",
    "version": "1.0.0",
    "name": "editTrackingTime",
    "description": "<p>edit TrackingTime Order : all params are necessary.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingTime",
            "description": "<p>order trackingTime in ISO type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   orderId : \"60b72a70e353f0385c2fe5af\",\n   trackingTime : \"2021-11-08T07:28:50.413Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"تاریخ پیگیری سفارش با موفقیت تغییر کرد\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"خطا در ویرایش تاریخ پیگیری سفارش\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/product",
    "title": "edit product order",
    "version": "1.0.0",
    "name": "editeProductOrder",
    "description": "<p>edit product order</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>array of product objects</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "address",
            "description": "<p>user address order</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "companyName",
            "description": "<p>order company name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "nationalCard",
            "description": "<p>customer national ID card number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "financialCode",
            "description": "<p>customer financial code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "postalCode",
            "description": "<p>customer postal code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "registerNo",
            "description": "<p>customer register number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  orderId : \"60f2c37d4ca7f01d68ad6daf\",\n    products: [...{\n        _id: \"60b72a70e353f0385c2fe5af\",\n        quantity: 2,\n        sellingPrice: \"30000\"\n    }],\n    address: \"معلم 24\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارش با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"سفارش موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/api/user/v1/order/notes/status",
    "title": "edit status notes",
    "version": "1.0.0",
    "name": "editstatusnotes",
    "description": "<p>edit status notes : all params are necessary.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "status",
            "description": "<p>status Should be '0' as false Or '1' as true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   orderId : \"60b72a70e353f0385c2fe5af\",\n   status : 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"یادداشت با موفقیت ویرایش شد\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"یادداشت موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "delete",
    "url": "/api/user/v1/order/opportunity",
    "title": "fail sale opportunity",
    "version": "1.0.0",
    "name": "failSaleOpportunity",
    "description": "<p>fail sale opportunity</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "unsuccessfulReason",
            "description": "<p>order unsuccessful reason</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"orderId\": \"618cd0068a6eb5e63801bd6e\",\n    \"unsuccessfulReason\": {\n        \"text\": \"شماره اشتباه\",\n        \"id\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"وضعیت فرصت فروش با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/financial/confirm",
    "title": "confirmation Financial",
    "version": "1.0.0",
    "name": "financialApproval",
    "description": "<p>Financial confirmation of the order.for 'status' enter 1 for approving and 2 for dening</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>order confirm financial status [1, 2]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارش مورد تایید مالی قرار گرفت\", \n    data: { status: true } \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: true,\n     message: \"خطا در تایید مالی سفارش\",\n    data: { status: false } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/failurereasons",
    "title": "get failure reasons",
    "version": "1.0.0",
    "name": "getFailureReasons",
    "description": "<p>get failure reasons</p>",
    "group": "order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"دلایل ناموفق فرصت فروش ارسال شد\",\n     data: [...{\n        id: 1,\n        text: \"مشتری از قیمت کالا ناراضی بود\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/notes",
    "title": "get notes of order",
    "version": "1.0.0",
    "name": "getNotes",
    "description": "<p>get notes : all params are necessary and in case of no entry , there is a flag for each optional param.if that flag entered it asumed as no entry.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>orderId to get that order's notes</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"یادداشت ها با موفقیت ارسال شد\",\n     data: {\n        isPrivate : true,\n        data:[...{\n           text: \"خواستار همکاری های بیشتر بود فقط کمی با قیمت مشکل داشت\",\n           writtenBy: \"محمد جواد حیدری\",\n           createdAt: \"2021-06-01T06:54:01.691Z\"\n        }]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/details/orderId/keylink",
    "title": "get orderDetails",
    "version": "1.0.0",
    "name": "getOrderDetails",
    "description": "<p>get order details,</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فاکتور سفارش با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         id: \"60b72a70e353f0385c2fe5af\",\n         products: [...{\n             _id: \"60b72a70e353f0385c2fe5af\",\n             name: \"لاته\",\n             quantity: 2,\n             sellingPrice: \"30000\"\n         }],\n         customer: {\n             _id: \"7465148754878\",\n             family: \"مصطفایی\",\n             mobile: \"09152631225\",\n             createdAt: \"2021-06-01T06:54:01.691Z\"\n         },\n        createdAt: \"2021-06-01T06:54:01.691Z\",\n        updatedAt: \"2021-06-01T06:54:01.691Z\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/v1",
    "title": "get orders",
    "version": "1.1.0",
    "name": "getOrders",
    "description": "<p>get orders : all params are necessary and in case of no entry , there is a flag for each optional param.if that flag entered it asumed as no entry.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>get order or set status 3 to get order sale opprotunity</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "customerName",
            "description": "<p>customer family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "customerMobile",
            "description": "<p>customer mobile number (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "startDate",
            "description": "<p>get orders from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "endDate",
            "description": "<p>get orders to this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "startTrackingTime",
            "description": "<p>get tracking time orders from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "endTrackingTime",
            "description": "<p>get tracking time orders to this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "sort",
            "description": "<p>get arranged orders base on created At or priority or trackingTime. 1 -&gt; created At , 2 -&gt; priority, 3 -&gt; trackingTime. 0 -&gt; default</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارشات با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         id: \"60b72a70e353f0385c2fe5af\",\n         products: [...{\n             _id: \"60b72a70e353f0385c2fe5af\",\n             name: \"لاته\",\n             quantity: 2,\n             sellingPrice: \"30000\"\n         }],\n         customer: {\n             _id: \"7465148754878\",\n             family: \"مصطفایی\",\n             mobile: \"09152631225\",\n             createdAt: \"2021-06-01T06:54:01.691Z\"\n         },\n        createdAt: \"2021-06-01T06:54:01.691Z\",\n        updatedAt: \"2021-06-01T06:54:01.691Z\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/",
    "title": "get orders",
    "version": "1.0.0",
    "name": "getOrders",
    "description": "<p>get orders : all params are necessary and in case of no entry , there is a flag for each optional param.if that flag entered it asumed as no entry.</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "customerName",
            "description": "<p>customer family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "customerMobile",
            "description": "<p>customer mobile number (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "startDate",
            "description": "<p>get orders from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "endDate",
            "description": "<p>get orders to this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "startTrackingTime",
            "description": "<p>get tracking time orders from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "endTrackingTime",
            "description": "<p>get tracking time orders to this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارشات با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         id: \"60b72a70e353f0385c2fe5af\",\n         products: [...{\n             _id: \"60b72a70e353f0385c2fe5af\",\n             name: \"لاته\",\n             quantity: 2,\n             sellingPrice: \"30000\"\n         }],\n         customer: {\n             _id: \"7465148754878\",\n             family: \"مصطفایی\",\n             mobile: \"09152631225\",\n             createdAt: \"2021-06-01T06:54:01.691Z\"\n         },\n        createdAt: \"2021-06-01T06:54:01.691Z\",\n        updatedAt: \"2021-06-01T06:54:01.691Z\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/delivery/sms",
    "title": "send delivery sms",
    "version": "1.0.0",
    "name": "sendDeliverySms",
    "description": "<p>send delivery sms,</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>delivery mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"وضعیت سفارش با موفقیت ویرایش شد\"",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/doc",
    "title": "show documents",
    "version": "1.0.0",
    "name": "showDocuments",
    "description": "<p>show documents</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      success: true,\n      message: \"مدارک سفارش با موفقیت فرستاده شد\", \n        data: [...{\n            name: چک 2, \n            key: , \n            location: , \n            size: 1120\n        }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/user/v1/order/:type/:value",
    "title": "support",
    "version": "1.0.0",
    "name": "support",
    "description": "<p>support : each type is a kind of search: 1 -&gt; customer number, 2 -&gt; customer family, 3 -&gt; company, 4 -&gt; seller number, 5 -&gt; seller family</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>search type [1, 2, 3, 4, 5]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>search value</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"سفارشات با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         _id: \"60b72a70e353f0385c2fe5af\",\n         address: \"خیابان احمداباد\",\n         products: [...{\n             _id: \"6183d40ae31477609c9ae820\", \n             name: \"A4\"\n             quantity: 2,\n             sellingPrice: \"30000\"\n         }],\n         customer: {\n             _id: \"7465148754878\",\n             family: \"مصطفایی\",\n             mobile: \"09152631225\",\n             phoneNumber: \"09307580142\",\n             company: \"هتل رضوان\"\n         },\n         financialApproval: {\n              status: 1, \n              acceptedAt: \"2021-11-08T12:46:34.702Z\", \n              acceptedBy: \"ریحانه شکوهی\" \n          },\n         mobile: \"09307580120\",\n         notes: {\n              Notes: [...{\n                  text: \"بدون انقضا\", \n                  createdAt: \"2021-11-08T12:58:02.117Z\", \n                  writtenBy: \"ریحانه شکوهی\", \n                  private: false\n              }], \n              isPrivate: false\n         },\n         readyTime: \"2021-11-16T07:42:00.000Z\",\n         createdAt: \"2021-06-01T06:54:01.691Z\",\n         updatedAt: \"2021-06-01T06:54:01.691Z\",\n         seller: {\n              _id: \"6188d4ff675723337cff3d09\",\n              family: \"رضایی\", \n              mobile: '09307580121\"\n          },\n         sellers: [...{\n              id: {\n                  _id: \"61614c019128741180e6e58f\", \n                  family: \"ریحانه شکوهی\"\n              }, \n              active: true\n          }]\n          status: 0,\n          support: true\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/doc",
    "title": "upload documents",
    "version": "1.0.0",
    "name": "uploadDocuments",
    "description": "<p>upload documents</p>",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "orderId",
            "description": "<p>order id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "fileName",
            "description": "<p>file name</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "file",
            "description": "<p>document file</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"مدرک اضافه شد\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/user/v1/product/",
    "title": "add product",
    "version": "1.0.0",
    "name": "addProduct",
    "description": "<p>add product.all params are necessary and in case of no entry , there is a flag in parantheses for each optional param.if that flag entered it asumed as no entry</p>",
    "group": "product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "sellingPrice",
            "description": "<p>product selling price</p>"
          },
          {
            "group": "Parameter",
            "type": "varachar",
            "optional": false,
            "field": "description",
            "description": "<p>description of product (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "checkWareHouse",
            "description": "<p>product checkWareHouse</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "direct",
            "description": "<p>direct</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"محصول شما با موفقیت ثبت شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success : false,\n     message : \"محصول وارد شده، موجود است\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/product.js",
    "groupTitle": "product"
  },
  {
    "type": "put",
    "url": "/api/user/v1/product/",
    "title": "edit product",
    "version": "1.0.0",
    "name": "editProduct",
    "description": "<p>edit product: all params must be sent even if they don't have any changes.all params are necessary and in case of no entry , there is a flag in parantheses for each optional param.if that flag entered it asumed as no entry</p>",
    "group": "product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "_id",
            "description": "<p>product id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "active",
            "description": "<p>product activity status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>product name</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "sellingPrice",
            "description": "<p>product selling price</p>"
          },
          {
            "group": "Parameter",
            "type": "varachar",
            "optional": false,
            "field": "description",
            "description": "<p>description of product (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "checkWareHouse",
            "description": "<p>product checkWareHouse</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "direct",
            "description": "<p>direct</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"محصول شما با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success : false,\n     message : \"محصول وارد شده، موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/product.js",
    "groupTitle": "product"
  },
  {
    "type": "post",
    "url": "/api/user/v1/product/excel",
    "title": "get excel products",
    "version": "1.0.0",
    "name": "getExcelProducts",
    "description": "<p>get excel of all products</p>",
    "group": "product",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success : false,\n     message : \"متاسفانه فایل ایجاد نشد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/product.js",
    "groupTitle": "product"
  },
  {
    "type": "post",
    "url": "/api/user/v1/product/excel",
    "title": "get excel products",
    "version": "1.0.0",
    "name": "getExcelProducts",
    "description": "<p>get excel of all products</p>",
    "group": "product",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n     success : false, \n     message : \"متاسفانه فایل ایجاد نشد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/stock.js",
    "groupTitle": "product"
  },
  {
    "type": "get",
    "url": "/api/user/v1/product/",
    "title": "get products",
    "version": "1.0.0",
    "name": "getProducts",
    "description": "<p>get products</p>",
    "group": "product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"محصولات با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         name: \"روغن\" ,\n         sellingPrice: \"100000\",\n         description: \"خریداری شده از شرکت روغن سازان مشهد\"\n         createdAt: \"2021-06-01T06:54:01.691Z\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/product.js",
    "groupTitle": "product"
  },
  {
    "type": "put",
    "url": "/api/user/v1/lead/excel",
    "title": "upload excel product",
    "version": "1.0.0",
    "name": "uplaodExcelProduct",
    "description": "<p>upload file excel that contains your list of product</p>",
    "group": "product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "excel",
            "optional": false,
            "field": "excel",
            "description": "<p>excel file</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"محصولات با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n     success : false, \n     message : \"خطا در پردازش فایل\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/lead.js",
    "groupTitle": "product"
  },
  {
    "type": "put",
    "url": "/api/user/v1/product/uploadExcel",
    "title": "upload excel product",
    "version": "1.0.0",
    "name": "uplaodExcelProduct",
    "description": "<p>upload file excel that contains your list of product.The excel file should contains; name, activity status ('فعال' or 'غیر فعال'), sellingPrice, last edit date, description, checkWarehouse ('بله' or 'خیر') and direct ('بله' or 'خیر'). They should be all in order, just like the output excel of products</p>",
    "group": "product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "excel",
            "optional": false,
            "field": "excel",
            "description": "<p>excel file</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"محصولات با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success : false,\n     message : \"خطا در پردازش فایل\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/product.js",
    "groupTitle": "product"
  },
  {
    "type": "post",
    "url": "/api/user/v1/receipt",
    "title": "add receipt",
    "version": "1.1.0",
    "name": "addReceipt",
    "description": "<p>add order: customer companyname, notes , birthday and reminder are optional.all params are necessary and in case of no entry , there is a flag for each optional param.if that flag entered it asumed as no entry.birthday flag is &quot;1900-01-01T05:42:13.845Z&quot;.reminder flag and duration flag are -1.address flag is &quot; &quot;. for set order to sale opprotunity send status 3 otherwise don't send status.</p>",
    "group": "receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "stock",
            "description": "<p>supplier stock</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "note",
            "description": "<p>receipt note</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "supplier",
            "description": "<p>supplier information</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "address",
            "description": "<p>receipt address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   stock: [...{\n        _id: \"60b72a70e353f0385c2fe5af\",\n        quantity: 2,\n        sellingPrice: \"30000\"\n    }],\n   notes: {\n        text: \"شکر هفته دیگه شارژ میشه\",\n        createdAt : \"2020-05-31T05:42:13.845Z\",\n   },\n   supplier: {\n        family: \"شکوهی\",\n        mobile: \"09307580142\",\n        company: \"تیم ایکس\"\n    },\n    address: \"معلم 24\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فاکتور شما با موفقیت ثبت شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/receipt.js",
    "groupTitle": "receipt"
  },
  {
    "type": "post",
    "url": "/api/user/v1/order/confirm/shop",
    "title": "confirmation shop",
    "version": "1.0.0",
    "name": "confirmShop",
    "description": "<p>shop confirmation of the receipt. for 'status' enter 1 for approving and 2 for dening</p>",
    "group": "receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "receiptId",
            "description": "<p>receiptId</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "status",
            "description": "<p>receipt status [1, 2]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      success: true,\n      message: \"فاکتور تایید خرید شد\",\n        data: {\n            status: true\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      success: true,\n      message: \"خطا در تایید خرید فاکتور\",\n        data: {\n            status: false\n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/receipt.js",
    "groupTitle": "receipt"
  },
  {
    "type": "put",
    "url": "/api/user/v1/receipt/edit",
    "title": "edit receipt",
    "version": "1.0.0",
    "name": "editReceipt",
    "description": "<p>edit receipt</p>",
    "group": "receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "receiptId",
            "description": "<p>receipt id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "stocks",
            "description": "<p>array of stocks objects</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "address",
            "description": "<p>supplier address receipt</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  receiptId : \"60f2c37d4ca7f01d68ad6daf\",\n    stocks: [...{\n        _id: \"60b72a70e353f0385c2fe5af\",\n        quantity: 2,\n        price: \"30000\"\n    }],\n    address: \"معلم 24\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فاکتور با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: false,\n     message: \"فاکتور موجود نیست\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/receipt.js",
    "groupTitle": "receipt"
  },
  {
    "type": "put",
    "url": "/api/user/v1/receipt/status",
    "title": "edit receipt status",
    "version": "1.0.0",
    "name": "editReceiptStatus",
    "description": "<p>edit receipt status, in status : send 0 for normal receipt , send 2 to cancele the receipt</p>",
    "group": "receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>receipt status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "receiptId",
            "description": "<p>receipt id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"وضعیت فاکتور با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/receipt.js",
    "groupTitle": "receipt"
  },
  {
    "type": "put",
    "url": "/api/user/v1/receipt/note/status",
    "title": "edit note status",
    "version": "1.0.0",
    "name": "editStatusNotes",
    "description": "<p>edit note status, in status : send 0 to public note, send 1 to private the note</p>",
    "group": "receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>note privacy status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiptId",
            "description": "<p>receipt id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"وضعیت یادداشت با موفقیت ویرایش شد\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/receipt.js",
    "groupTitle": "receipt"
  },
  {
    "type": "get",
    "url": "/api/user/v1/receipt",
    "title": "get receipts",
    "version": "1.0.0",
    "name": "getReceipts",
    "description": "<p>get receipts : all params are necessary and in case of no entry , there is a flag for each optional param.if that flag entered it asumed as no entry.</p>",
    "group": "receipt",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "supplierName",
            "description": "<p>supplier family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "supplierMobile",
            "description": "<p>supplier mobile number (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "startDate",
            "description": "<p>get receipt from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "endDate",
            "description": "<p>get receipt to this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فاکتور ها با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         id: \"60b72a70e353f0385c2fe5af\",\n         products: [...{\n             _id: \"60b72a70e353f0385c2fe5af\",\n             name: \"لاته\",\n             quantity: 2,\n             sellingPrice: \"30000\"\n         }],\n         customer: {\n             _id: \"7465148754878\",\n             family: \"مصطفایی\",\n             mobile: \"09152631225\",\n             createdAt: \"2021-06-01T06:54:01.691Z\"\n         },\n        createdAt: \"2021-06-01T06:54:01.691Z\",\n        updatedAt: \"2021-06-01T06:54:01.691Z\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/receipt.js",
    "groupTitle": "receipt"
  },
  {
    "type": "get",
    "url": "/api/user/v1/reminder",
    "title": "get reminders",
    "version": "1.0.0",
    "name": "getReminder",
    "description": "<p>get Reminder: sends reminders of today.birthday of the customer may not be send because it's optional in the first place.</p>",
    "group": "reminder",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    success: true,\n    message: \"لیست یادآوری با موفقیت ارسال شد\",\n    data: {...[\n         date: '2021-06-22T12:30:36.747Z',\n         customer: {\n             _id: '60d030e8716abd4c9428d373',\n             family: 'شکوهی',\n             mobile: '09307580142',\n             birthday: '2021-05-31T05:42:13.845Z'\n         },\n         order: {\n             _id: '60d3296cc29f9d1898abb62a',\n             active: true,\n             creadtedAt: '2021-06-23T12:30:36.679Z',\n             customer: '60d030e8716abd4c9428d373',\n             products:{...[\n                 _id: '60b72a70e353f0385c2fe5af',\n                 name: 'آیس لته',\n                 quantity: 1,\n                 sellingPrice: '30000'\n             ]}\n         }\n     ]}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/reminder.js",
    "groupTitle": "reminder"
  },
  {
    "type": "post",
    "url": "/api/user/v1/seller/",
    "title": "add seller",
    "version": "1.0.0",
    "name": "addSeller",
    "description": "<p>add seller</p>",
    "group": "seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>seller phone</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>seller mobile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>seller family</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>seller company</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cardNumber",
            "description": "<p>seller cardNumber</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>seller address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>seller description</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فروشنده با موفقیت ثبت شد\",\n     data: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success : true,\n     message : \"فروشنده ای با این تلفن موجود است\",\n     data: { status: false }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/seller.js",
    "groupTitle": "seller"
  },
  {
    "type": "get",
    "url": "/api/user/v1/seller/:mobile",
    "title": "get seller",
    "version": "1.0.0",
    "name": "getSeller",
    "description": "<p>get seller. all params are necessary and in case of no entry , there is a flag in parantheses for each param.if that flag entered it asumed as no entry</p>",
    "group": "seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>seller mobile (&quot; &quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فرشنده ها با موفقیت ارسال شد\",\n     data: {\n         _id: '6183e3b0ea6d46d4bc8de170', \n         family: 'سارا بنی اسدی', \n         phone: '36041849', \n         mobile: '09307580142', \n         company: 'هتل ابان',\n         address: \"بلوار پیروزی.بین پیروزی ۶۲و ۶۴\",\n         cardNumber: 5846253665328596,\n         description: \"استقبال شدید شد\",\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/seller.js",
    "groupTitle": "seller"
  },
  {
    "type": "get",
    "url": "/api/user/v1/seller/:company/:phone/:mobile/:address",
    "title": "get sellers",
    "version": "1.0.0",
    "name": "getSellers",
    "description": "<p>get sellers. all params are necessary and in case of no entry , there is a flag in parantheses for each param.if that flag entered it asumed as no entry</p>",
    "group": "seller",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>seller company (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>seller phone (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>seller mobile (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>seller address (&quot; &quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"فرشنده ها با موفقیت ارسال شد\",\n     data: [...{\n         _id: '6183e3b0ea6d46d4bc8de170', \n         family: 'سارا بنی اسدی', \n         phone: '36041849', \n         mobile: '09307580142', \n         company: 'هتل ابان',\n         address: \"بلوار پیروزی.بین پیروزی ۶۲و ۶۴\",\n         cardNumber: 5846253665328596,\n         description: \"استقبال شدید شد\",\n         marketer: {\n                _id: \"61614c019128741180e6e58f\", \n                family: \"ریحانه شکوهی\"\n            }\n      }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/seller.js",
    "groupTitle": "seller"
  },
  {
    "type": "put",
    "url": "/api/user/v1/settings/edit/order",
    "title": "edit  order settings",
    "version": "1.0.0",
    "name": "editOrderSetting",
    "description": "<p>edit shareLinh order settings &amp; sms setting order. for e.g time is 2 and unitTime is &quot;M&quot; it means shareLink will expire after 2 minutes.</p>",
    "group": "settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>the link will expire after that base on unittime</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "unitTime",
            "description": "<p>&quot;M&quot; is minutes, &quot;H&quot; is hour, &quot;D&quot; is Day</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n  share: {\n    time: \"6\",\n    unitTime: \"D\",\n  },\n  preSms: {\n    text: \"سفارش شما با موفقیت ثبت شد. از اینکه مارا انتخاب کرده اید متشکریم\",\n    status: false,\n  },\n  postDeliverySms: {\n    text: \"\",\n    status: false,\n  },\n  postCustomerSms: {\n    text: \"سفارش شما به راننده تحویل داده شد\",\n    status: false,\n  },\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"تنظیمات با موفقیت ویرایش شد\"",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/settings.js",
    "groupTitle": "settings"
  },
  {
    "type": "get",
    "url": "/api/user/v1/settings/order",
    "title": "get Order Setting",
    "version": "1.0.0",
    "name": "getOrderSetting",
    "description": "<p>get setting order. setting sms &amp; setting Share link</p>",
    "group": "settings",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"تنظیمات با موفقیت ارسال شد\",\n     data: {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/settings.js",
    "groupTitle": "settings"
  },
  {
    "type": "post",
    "url": "/api/user/v1/stock",
    "title": "add stock",
    "version": "1.0.0",
    "name": "addStock",
    "description": "<p>add stock.</p>",
    "group": "stock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>stock name</p>"
          },
          {
            "group": "Parameter",
            "type": "varachar",
            "optional": true,
            "field": "description",
            "description": "<p>description of stock</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"ماده شما با موفقیت ثبت شد\",\n     data: { \n         status: true \n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n     success : true, \n     message : \"ماده وارد شده، موجود است\",\n     data: { \n         status: false \n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/stock.js",
    "groupTitle": "stock"
  },
  {
    "type": "put",
    "url": "/api/user/v1/stock",
    "title": "edit stock",
    "version": "1.0.0",
    "name": "editStock",
    "description": "<p>edit stock</p>",
    "group": "stock",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "_id",
            "description": "<p>stock id</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "active",
            "description": "<p>stock activity status</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>stock name</p>"
          },
          {
            "group": "Parameter",
            "type": "varachar",
            "optional": true,
            "field": "description",
            "description": "<p>description of stock</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      success: true,\n      message: \"ماده شما با موفقیت ویرایش شد\", \n        data: { \n            status: true \n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \n      success : true, \n      message : \"ماده وارد شده، موجود نیست', \n        data: { \n            status: false \n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/stock.js",
    "groupTitle": "stock"
  },
  {
    "type": "get",
    "url": "/api/user/v1/stock",
    "title": "get stock",
    "version": "1.0.0",
    "name": "getStock",
    "description": "<p>get stock</p>",
    "group": "stock",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"مواد خام با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         name: \"روغن\" ,\n         description: \"خریداری شده از شرکت روغن سازان مشهد\"\n         createdAt: \"2021-06-01T06:54:01.691Z\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/stock.js",
    "groupTitle": "stock"
  },
  {
    "type": "get",
    "url": "/api/user/v1/supplier/excel",
    "title": "get excel Suppliers",
    "version": "1.0.0",
    "name": "getExcelSuppliers",
    "description": "<p>get Excel Suppliers . respnse description: by &quot;receipts&quot; field we meant order length, &quot;lastBuy&quot; is the date of the customer last buy. all params are necessary and in case of no entry , there is a flag in parantheses for each param.if that flag entered it asumed as no entry</p>",
    "group": "supplier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>supplier family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>supplier mobile (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtFrom",
            "description": "<p>supplier membership from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtTo",
            "description": "<p>supplier membership until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyFrom",
            "description": "<p>supplier last buy from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyTo",
            "description": "<p>supplier last buy until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "receiptFrom",
            "description": "<p>minimum number of receipts (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "receiptTo",
            "description": "<p>maximum number of receipts (&quot;0&quot;)</p>"
          }
        ]
      }
    },
    "filename": "app/routes/user/v1/supplier.js",
    "groupTitle": "supplier"
  },
  {
    "type": "get",
    "url": "/api/user/v1/supplier",
    "title": "get supplier",
    "version": "1.0.0",
    "name": "getSupplier",
    "description": "<p>get supplier .It gives you the supplier information of the mobile you sent , if there is no supplier with that mobile number when sends false</p>",
    "group": "supplier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>supplier mobile</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"اطلاعات تامین کننده با موفقیت ارسال شد\",\n     data: {\n         family: \"مصطفایی\",\n         mobile: \"09625846122\",\n         company: \"تیم ایکس\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     success: true,\n     message: \"تامین کننده موجود نیست\",\n     data: { \n         status: false \n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/supplier.js",
    "groupTitle": "supplier"
  },
  {
    "type": "get",
    "url": "/api/user/v1/supplier",
    "title": "get suppliers",
    "version": "1.0.0",
    "name": "getSuppliers",
    "description": "<p>get suppliers . respnse description: by &quot;receipts&quot; field we meant receipts length, &quot;lastBuy&quot; is the date of the customer last buy,and &quot;total&quot; is the total price of all customer orders. all params are necessary and in case of no entry , there is a flag in parantheses for each param.if that flag entered it asumed as no entry</p>",
    "group": "supplier",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "family",
            "description": "<p>customer family (&quot; &quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "mobile",
            "description": "<p>customer mobile (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtFrom",
            "description": "<p>customer membership from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "createdAtTo",
            "description": "<p>customer membership until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyFrom",
            "description": "<p>customer last buy from this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "lastBuyTo",
            "description": "<p>customer last buy until this date (&quot;1900-01-01T05:42:13.845Z&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderFrom",
            "description": "<p>minimum number of orders (&quot;0&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderTo",
            "description": "<p>maximum number of orders (&quot;0&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     success: true,\n     message: \"اطلاعات مشتریان با موفقیت ارسال شد\",\n     data: [...{\n         active: true,\n         family: \"مصطفایی\",\n         mobile: \"09625846122\",\n         birthday: \"1990-12-18T23:59:00.798Z\",\n         createdAt: \"2010-12-18T23:59:00.798Z\",\n         order: 4,\n         lastBy: \"2021-12-18T23:59:00.798Z\",\n         total: 270000\n      }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user/v1/supplier.js",
    "groupTitle": "supplier"
  }
] });
