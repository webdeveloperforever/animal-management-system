/*
 * JS for Account generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '32c961fa-1d24-428b-aa1d-5e922f17f152';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "MyFollowings",
    "location": "MyFollowings.html"
}, {
    "name": "DirectChat",
    "location": "DirectChat.html"
}, {
    "name": "ApplicationOption",
    "location": "ApplicationOption.html"
}, {
    "name": "CarriageOrderChoices",
    "location": "CarriageOrderChoices.html"
}, {
    "name": "TypeChoice",
    "location": "TypeChoice.html"
}, {
    "name": "MyFollowers",
    "location": "MyFollowers.html"
}, {
    "name": "Settings",
    "location": "Settings.html"
}, {
    "name": "Favorite",
    "location": "Favorite.html"
}, {
    "name": "Account",
    "location": "Account.html"
}, {
    "name": "AddFrinds",
    "location": "AddFrinds.html"
}, {
    "name": "GuidingInformation",
    "location": "GuidingInformation.html"
}, {
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "PhoneConfirm",
    "location": "PhoneConfirm.html"
}, {
    "name": "RecevingSMSCode",
    "location": "RecevingSMSCode.html"
}, {
    "name": "TermsServices",
    "location": "TermsServices.html"
}, {
    "name": "NewFavoriteGroup",
    "location": "NewFavoriteGroup.html"
}, {
    "name": "ChooseUserName",
    "location": "ChooseUserName.html"
}, {
    "name": "Profile",
    "location": "Profile.html"
}, {
    "name": "Welcome",
    "location": "Welcome.html"
}, {
    "name": "ApplicationFirstPage",
    "location": "ApplicationFirstPage.html"
}, {
    "name": "UploadAd",
    "location": "UploadAd.html"
}, {
    "name": "ad_details",
    "location": "ad_details.html"
}, {
    "name": "CarriageOrders",
    "location": "CarriageOrders.html"
}, {
    "name": "ApproveActivatePhone",
    "location": "ApproveActivatePhone.html"
}, {
    "name": "SingleFavoriteGroup",
    "location": "SingleFavoriteGroup.html"
}, {
    "name": "MyOrders",
    "location": "MyOrders.html"
}, {
    "name": "DriverServiceOffer",
    "location": "DriverServiceOffer.html"
}];

function Account_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileworkarea_10': 'Account_mobileworkarea_10',
        'mobilelabel_msg': 'Account_mobilelabel_msg',
        'mobiletextinput_phone': 'Account_mobiletextinput_phone',
        'mobilebutton_login': 'Account_mobilebutton_login',
        'mobilebutton_register': 'Account_mobilebutton_register',
        'mobilenavbar_6': 'Account_mobilenavbar_6',
        'favorite_item': 'Account_favorite_item',
        'home_item': 'Account_home_item',
        'upload_item': 'Account_upload_item'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["Account_restservice_login_onsuccess_mapping_0"] = {
        "homeScreen": "Account",
        "directions": [

        {
            "from_name": "restservice_login",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "user_info",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['user'][0]['id']",
                "target": "$['users_id']"

            },

            {

                "source": "$['body']['user'][0]['nick_name']",
                "target": "$['nick_name']"

            },

            {

                "source": "$['body']['user'][0]['username']",
                "target": "$['username']"

            },

            {

                "source": "$['body']['user'][0]['first_name']",
                "target": "$['first_name']"

            },

            {

                "source": "$['body']['user'][0]['last_name']",
                "target": "$['last_name']"

            },

            {

                "source": "$['body']['user'][0]['verified']",
                "target": "$['verified']"

            },

            {

                "source": "$['body']['user'][0]['delivery_driver_job']",
                "target": "$['delivery_driver_job']"

            },

            {

                "source": "$['body']['user'][0]['status']",
                "target": "$['status']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Account_restservice_login_onbeforesend_mapping_0"] = {
        "homeScreen": "Account",
        "directions": [

        {
            "from_name": "Account",
            "from_type": "UI",

            "to_name": "restservice_login",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$['mobiletextinput_phone:text']",
                "target": "$['parameters']['phone_no']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.restservice_login = Apperyio.datasources.restservice_login = new Apperyio.DataSource(Login_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Account_restservice_login_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Account_restservice_login_onsuccess_mapping_0"]);
            if (data['login_status']['status'] === 'success') {
                Msg(data['login_status']['msg'], 'mobilelabel_msg');

/*
   
    user_info_data = Apperyio.storage.user_info.get();
 
    user_info_data.users_id              = data['user']['0']['id'];
    user_info_data.nick_name             = data['user']['0']['nick_name'];
    user_info_data.username              = data['user']['0']['username'];
    user_info_data.first_name            = data['user']['0']['first_name'];
    user_info_data.last_name             = data['user']['0']['last_name'];
    user_info_data.phone_no              = data['user']['0']['phone_no'];
    user_info_data.verified              = data['user']['0']['verified'];
    user_info_data.delivery_driver_job   = data['user']['0']['delivery_driver_job'];
    user_info_data.status                = data['login_status']['status'];
    
    Apperyio.storage.user_info.set(user_info_data);*/
            } else if (data['login_status']['status'] === 'fail') {
                Msg(data['login_status']['msg'], 'mobilelabel_msg');
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Account';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Account_onLoad = function() {
            Account_elementsExtraJS();

            Account_deviceEvents();
            Account_windowEvents();
            Account_elementsEvents();
        };

    // screen window events


    function Account_windowEvents() {

        $('#Account').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#Account').on({
            pageshow: function(event) {
                user_info_data = Apperyio.storage.user_info.get();
                if (typeof(user_info_data) === "undefined") {
                    Toast("Please press on register if you are a new user otherwise enter your phone no to login");
                } else {
                    phone_no = user_info_data.phone_no;
                    Apperyio("mobiletextinput_phone").val(phone_no);
                };
            },
        });

    };

    // device events


    function Account_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Account_elementsExtraJS() {
        // screen (Account) extra code

    };

    // screen elements handler


    function Account_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Account_mobilecontainer1 [name="mobilebutton_login"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        restservice_login.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#Account_mobilecontainer1 [name="mobilebutton_login"]');
        $(document).off("click", '#Account_mobilecontainer1 [name="mobilebutton_register"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('ApplicationFirstPage', {
                        reverse: false
                    });

                }
            },
        }, '#Account_mobilecontainer1 [name="mobilebutton_register"]');

        $(document).off("click", '#Account_mobilefooter1 [name="favorite_item"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    user_info_data = Apperyio.storage.user_info.get();
                    if (typeof(user_info_data) === "undefined") {
                        Toast("You are not a registered user.Please make an account first");
                        return;
                    } else {
                        phone_no = user_info_data.phone_no;
                        if (phone_no.length === 0) {
                            Toast("You are not a registered user.Please make an account first");
                            return;
                        }
                    };
                    Apperyio.navigateTo('Favorite', {
                        reverse: false
                    });

                }
            },
        }, '#Account_mobilefooter1 [name="favorite_item"]');
        $(document).off("click", '#Account_mobilefooter1 [name="home_item"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    user_info_data = Apperyio.storage.user_info.get();
                    if (typeof(user_info_data) === "undefined") {
                        Toast("You are not a registered user.Please make an account first");
                        return;
                    } else {
                        phone_no = user_info_data.phone_no;
                        if (phone_no.length === 0) {
                            Toast("You are not a registered user.Please make an account first");
                            return;
                        }
                    };
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Account_mobilefooter1 [name="home_item"]');
        $(document).off("click", '#Account_mobilefooter1 [name="upload_item"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    user_info_data = Apperyio.storage.user_info.get();
                    if (typeof(user_info_data) === "undefined") {
                        Toast("You are not a registered user.Please make an account first");
                        return;
                    } else {
                        phone_no = user_info_data.phone_no;
                        if (phone_no.length === 0) {
                            Toast("You are not a registered user.Please make an account first");
                            return;
                        }
                    };
                    Apperyio.navigateTo('TypeChoice', {
                        reverse: false
                    });
                    localStorage.setItem('page_from', 'UploadAd');

                }
            },
        }, '#Account_mobilefooter1 [name="upload_item"]');

    };

    $(document).off("pagebeforeshow", "#Account").on("pagebeforeshow", "#Account", function(event, ui) {
        Apperyio.CurrentScreen = "Account";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Account_onLoad();
};

$(document).off("pagecreate", "#Account").on("pagecreate", "#Account", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Account_js();
});