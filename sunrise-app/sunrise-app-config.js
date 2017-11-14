var SunriseApp={
    app_base:"http://zhangjl.sunrizetech.co/framework-core-ui/",
    sys_hosts: {
        member: "http://member.sunrizetech.dev/",
        crm: "http://rap.sunrizetech.cn/mockjsdata/7/",
        proc: "http://rap.sunrizetech.cn/mockjsdata/3/",
        cas: "http://account.esaleb.com/"
    },
    security_params: {
        urls: {
            login_check: "",
            login_info: "http://zhangjl.sunrizetech.co/esaleb/!sys/security/~java/LoginState.get",
            functions: "http://rap.sunrizetech.cn:81/mockjsdata/7/!member/permit/~java/Permit.tree",
            permissions: ""
        },
        status_pages: {
            206: "components/sunrise-app/206.html",
            302: "components/sunrise-app/302.html",
            403: "",
            404: "",
            500: ""
        }
    }
};