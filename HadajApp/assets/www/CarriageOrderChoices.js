/*
 * JS for CarriageOrderChoices generated by Appery.io
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

function CarriageOrderChoices_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobileworkarea_10': 'CarriageOrderChoices_mobileworkarea_10',
        'mobilelabel_80': 'CarriageOrderChoices_mobilelabel_80',
        'mobilebutton_cancel': 'CarriageOrderChoices_mobilebutton_cancel',
        'mobilelabel_error': 'CarriageOrderChoices_mobilelabel_error',
        'mobilegrid_choice': 'CarriageOrderChoices_mobilegrid_choice',
        'mobilegridcell_12': 'CarriageOrderChoices_mobilegridcell_12',
        'mobilelabel_83': 'CarriageOrderChoices_mobilelabel_83',
        'mobilegridcell_13': 'CarriageOrderChoices_mobilegridcell_13',
        'mobileselectmenu_type': 'CarriageOrderChoices_mobileselectmenu_type',
        'mobileselectmenu_type-0': 'CarriageOrderChoices_mobileselectmenu_type-0',
        'mobilegridcell_14': 'CarriageOrderChoices_mobilegridcell_14',
        'mobilelabel_43': 'CarriageOrderChoices_mobilelabel_43',
        'mobilegridcell_15': 'CarriageOrderChoices_mobilegridcell_15',
        'mobileselectmenu_breed': 'CarriageOrderChoices_mobileselectmenu_breed',
        'mobileselectmenu_breed-0': 'CarriageOrderChoices_mobileselectmenu_breed-0',
        'mobilegridcell_16': 'CarriageOrderChoices_mobilegridcell_16',
        'mobilelabel_44': 'CarriageOrderChoices_mobilelabel_44',
        'mobilegridcell_17': 'CarriageOrderChoices_mobilegridcell_17',
        'mobileselectmenu_gender': 'CarriageOrderChoices_mobileselectmenu_gender',
        'mobileselectmenu_gender-0': 'CarriageOrderChoices_mobileselectmenu_gender-0',
        'mobilegridcell_18': 'CarriageOrderChoices_mobilegridcell_18',
        'mobilelabel_87': 'CarriageOrderChoices_mobilelabel_87',
        'mobilegridcell_19': 'CarriageOrderChoices_mobilegridcell_19',
        'mobiletextinput_quantity': 'CarriageOrderChoices_mobiletextinput_quantity',
        'mobilegridcell_20': 'CarriageOrderChoices_mobilegridcell_20',
        'mobilelabel_94': 'CarriageOrderChoices_mobilelabel_94',
        'mobilegridcell_21': 'CarriageOrderChoices_mobilegridcell_21',
        'mobilelabel_47': 'CarriageOrderChoices_mobilelabel_47',
        'mobileselectmenu_from_contry': 'CarriageOrderChoices_mobileselectmenu_from_contry',
        'mobileselectmenu_from_contry-0': 'CarriageOrderChoices_mobileselectmenu_from_contry-0',
        'mobilegridcell_22': 'CarriageOrderChoices_mobilegridcell_22',
        'mobilegridcell_23': 'CarriageOrderChoices_mobilegridcell_23',
        'mobilelabel_48': 'CarriageOrderChoices_mobilelabel_48',
        'mobileselectmenu_from_city': 'CarriageOrderChoices_mobileselectmenu_from_city',
        'mobileselectmenu_from_city-0': 'CarriageOrderChoices_mobileselectmenu_from_city-0',
        'mobilegridcell_84': 'CarriageOrderChoices_mobilegridcell_84',
        'mobilelabel_95': 'CarriageOrderChoices_mobilelabel_95',
        'mobilegridcell_85': 'CarriageOrderChoices_mobilegridcell_85',
        'mobilelabel_98': 'CarriageOrderChoices_mobilelabel_98',
        'mobileselectmenu_to_contry': 'CarriageOrderChoices_mobileselectmenu_to_contry',
        'mobileselectmenu_to_contry-0': 'CarriageOrderChoices_mobileselectmenu_to_contry-0',
        'mobilegridcell_90': 'CarriageOrderChoices_mobilegridcell_90',
        'mobilegridcell_91': 'CarriageOrderChoices_mobilegridcell_91',
        'mobilelabel_99': 'CarriageOrderChoices_mobilelabel_99',
        'mobileselectmenu_to_city': 'CarriageOrderChoices_mobileselectmenu_to_city',
        'mobileselectmenu_to_city-0': 'CarriageOrderChoices_mobileselectmenu_to_city-0',
        'mobilegridcell_92': 'CarriageOrderChoices_mobilegridcell_92',
        'mobilelabel_89': 'CarriageOrderChoices_mobilelabel_89',
        'mobilegridcell_93': 'CarriageOrderChoices_mobilegridcell_93',
        'mobiletextarea_info': 'CarriageOrderChoices_mobiletextarea_info',
        'mobilegrid_72': 'CarriageOrderChoices_mobilegrid_72',
        'mobilegridcell_73': 'CarriageOrderChoices_mobilegridcell_73',
        'mobilegridcell_74': 'CarriageOrderChoices_mobilegridcell_74',
        'mobilebutton_done': 'CarriageOrderChoices_mobilebutton_done',
        'mobilenavbar_6': 'CarriageOrderChoices_mobilenavbar_6',
        'favorite_item': 'CarriageOrderChoices_favorite_item',
        'home_item': 'CarriageOrderChoices_home_item',
        'upload_item': 'CarriageOrderChoices_upload_item'
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

    Apperyio.mappings["CarriageOrderChoices_restservice_breed5_onsuccess_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "restservice_breed5",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CarriageOrderChoices",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['breed_name']",
                "target": "$['mobileselectmenu_breed-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_breed-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_breed-0']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_breed5_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "CarriageOrderChoices",
            "from_type": "UI",

            "to_name": "restservice_breed5",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "type_id": "3"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['mobileselectmenu_type:selectedMenuItem']",
                "target": "$['parameters']['type_id']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_gender5_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "CarriageOrderChoices",
            "from_type": "UI",

            "to_name": "restservice_gender5",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "Content-Type": "text/plain"
                },
                "parameters": {
                    "breed_id": "6"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['mobileselectmenu_breed:selectedMenuItem']",
                "target": "$['parameters']['breed_id']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_gender5_onsuccess_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "restservice_gender5",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CarriageOrderChoices",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['gender_name']",
                "target": "$['mobileselectmenu_gender-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_gender-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_gender-0']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_contry5_onsuccess_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "restservice_contry5",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CarriageOrderChoices",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['contry_name']",
                "target": "$['mobileselectmenu_from_contry-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_from_contry-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_from_contry-0']"

            },

            {

                "source": "$['body'][i]['contry_name']",
                "target": "$['mobileselectmenu_to_contry-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_to_contry-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_to_contry-0']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_contry5_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": []
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_city5_onsuccess_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "restservice_city5",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CarriageOrderChoices",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['city_name']",
                "target": "$['mobileselectmenu_from_city-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_from_city-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_from_city-0']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_city5_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "CarriageOrderChoices",
            "from_type": "UI",

            "to_name": "restservice_city5",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "contry_id": "4"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['mobileselectmenu_from_contry:selectedMenuItem']",
                "target": "$['parameters']['contry_id']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_type5_onsuccess_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "restservice_type5",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CarriageOrderChoices",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['type_name']",
                "target": "$['mobileselectmenu_type-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_type-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_type-0']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_type5_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": []
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_save_choice_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "user_info",
            "from_type": "LOCAL_STORAGE",

            "to_name": "restservice_save_choice",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$['users_id']",
                "target": "$['parameters']['users_id']"

            }

            ]
        },

        {
            "from_name": "CarriageOrderChoices",
            "from_type": "UI",

            "to_name": "restservice_save_choice",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$['mobileselectmenu_breed:selectedMenuItem']",
                "target_transformation": function(value) {
                    return Appery("mobileselectmenu_breed").find("option:selected").text();
                },
                "target": "$['parameters']['breed']"

            },

            {

                "source": "$['mobileselectmenu_gender:selectedMenuItem']",
                "target_transformation": function(value) {
                    return Appery("mobileselectmenu_gender").find("option:selected").text();
                },
                "target": "$['parameters']['gender']"

            },

            {

                "source": "$['mobileselectmenu_from_contry:selectedMenuItem']",
                "target_transformation": function(value) {
                    return Appery("mobileselectmenu_from_contry").find("option:selected").text();
                },
                "target": "$['parameters']['from_contry']"

            },

            {

                "source": "$['mobileselectmenu_from_city:selectedMenuItem']",
                "target_transformation": function(value) {
                    return Appery("mobileselectmenu_from_city").find("option:selected").text();
                },
                "target": "$['parameters']['from_city']"

            },

            {

                "source": "$['mobiletextarea_info:text']",
                "target": "$['parameters']['info']"

            },

            {

                "source": "$['mobiletextinput_quantity:text']",
                "target": "$['parameters']['quantity']"

            },

            {

                "source": "$['mobileselectmenu_to_contry:selectedMenuItem']",
                "target_transformation": function(value) {
                    return Appery("mobileselectmenu_to_contry").find("option:selected").text();
                },
                "target": "$['parameters']['to_contry']"

            },

            {

                "source": "$['mobileselectmenu_to_city:selectedMenuItem']",
                "target_transformation": function(value) {
                    return Appery("mobileselectmenu_to_city").find("option:selected").text();
                },
                "target": "$['parameters']['to_city']"

            }

            ]
        },

        {
            "from_name": "type",
            "from_type": "LOCAL_STORAGE",

            "to_name": "restservice_save_choice",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['parameters']['type']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_to_city5_onsuccess_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "restservice_to_city5",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CarriageOrderChoices",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['city_name']",
                "target": "$['mobileselectmenu_to_city-0:label']"

            },

            {

                "source": "$['body'][i]['id']",
                "target": "$['mobileselectmenu_to_city-0:value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobileselectmenu_to_city-0']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CarriageOrderChoices_restservice_to_city5_onbeforesend_mapping_0"] = {
        "homeScreen": "CarriageOrderChoices",
        "directions": [

        {
            "from_name": "CarriageOrderChoices",
            "from_type": "UI",

            "to_name": "restservice_to_city5",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "contry_id": "4"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['mobileselectmenu_to_contry:selectedMenuItem']",
                "target": "$['parameters']['contry_id']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.restservice_breed5 = Apperyio.datasources.restservice_breed5 = new Apperyio.DataSource(Breed_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_breed5_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Appery("mobileselectmenu_breed").val('Select');
            Appery("mobileselectmenu_breed").selectmenu('refresh', true);

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_breed5_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restservice_gender5 = Apperyio.datasources.restservice_gender5 = new Apperyio.DataSource(Gender_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_gender5_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Appery("mobileselectmenu_gender").val('Select');
            Appery("mobileselectmenu_gender").selectmenu('refresh', true);

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_gender5_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restservice_contry5 = Apperyio.datasources.restservice_contry5 = new Apperyio.DataSource(Contry_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_contry5_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Appery("mobileselectmenu_from_contry").val('Select');
            Appery("mobileselectmenu_from_contry").selectmenu('refresh', true);

            Appery("mobileselectmenu_to_contry").val('Select');
            Appery("mobileselectmenu_to_contry").selectmenu('refresh', true);

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_contry5_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restservice_city5 = Apperyio.datasources.restservice_city5 = new Apperyio.DataSource(City_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_city5_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Appery("mobileselectmenu_from_city").val('Select');
            Appery("mobileselectmenu_from_city").selectmenu('refresh', true);

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_city5_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restservice_type5 = Apperyio.datasources.restservice_type5 = new Apperyio.DataSource(Type_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_type5_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Appery("mobileselectmenu_type").val('Select');
            Appery("mobileselectmenu_type").selectmenu('refresh', true);

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_type5_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restservice_save_choice = Apperyio.datasources.restservice_save_choice = new Apperyio.DataSource(SaveChoice_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_save_choice_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Apperyio.navigateTo('MyOrders', {
                reverse: false
            });

        },
        "onSuccess": function(data) {},
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restservice_to_city5 = Apperyio.datasources.restservice_to_city5 = new Apperyio.DataSource(City_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_to_city5_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            Appery("mobileselectmenu_to_city").val('Select');
            Appery("mobileselectmenu_to_city").selectmenu('refresh', true);

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CarriageOrderChoices_restservice_to_city5_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'CarriageOrderChoices';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var CarriageOrderChoices_onLoad = function() {
            CarriageOrderChoices_elementsExtraJS();

            CarriageOrderChoices_deviceEvents();
            CarriageOrderChoices_windowEvents();
            CarriageOrderChoices_elementsEvents();
        };

    // screen window events


    function CarriageOrderChoices_windowEvents() {

        $('#CarriageOrderChoices').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#CarriageOrderChoices').on({
            pageshow: function(event) {
                try {
                    restservice_type5.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                try {
                    restservice_contry5.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });

    };

    // device events


    function CarriageOrderChoices_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function CarriageOrderChoices_elementsExtraJS() {
        // screen (CarriageOrderChoices) extra code

        /* mobileselectmenu_type */

        $("#CarriageOrderChoices_mobileselectmenu_type").parent().find("a.ui-btn").attr("tabindex", "16");

        /* mobileselectmenu_breed */

        $("#CarriageOrderChoices_mobileselectmenu_breed").parent().find("a.ui-btn").attr("tabindex", "2");

        /* mobileselectmenu_gender */

        $("#CarriageOrderChoices_mobileselectmenu_gender").parent().find("a.ui-btn").attr("tabindex", "3");

        /* mobileselectmenu_from_contry */

        $("#CarriageOrderChoices_mobileselectmenu_from_contry").parent().find("a.ui-btn").attr("tabindex", "6");

        /* mobileselectmenu_from_city */

        $("#CarriageOrderChoices_mobileselectmenu_from_city").parent().find("a.ui-btn").attr("tabindex", "7");

        /* mobileselectmenu_to_contry */

        $("#CarriageOrderChoices_mobileselectmenu_to_contry").parent().find("a.ui-btn").attr("tabindex", "19");

        /* mobileselectmenu_to_city */

        $("#CarriageOrderChoices_mobileselectmenu_to_city").parent().find("a.ui-btn").attr("tabindex", "20");

    };

    // screen elements handler


    function CarriageOrderChoices_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#CarriageOrderChoices_mobilecontainer1 [name="mobilebutton_cancel"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('CarriageOrders', {
                        reverse: false
                    });

                }
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobilebutton_cancel"]');

        $(document).off("change", '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_type"]').on({
            change: function(event) {
                try {
                    restservice_breed5.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
                localStorage.setItem("type", Appery("mobileselectmenu_type").find("option:selected").text());
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_type"]');

        $(document).off("change", '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_breed"]').on({
            change: function(event) {
                Apperyio("mobilelabel_error").text('');
                try {
                    restservice_gender5.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_breed"]');

        $(document).off("change", '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_gender"]').on({
            change: function(event) {
                Apperyio("mobilelabel_error").text('');
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_gender"]');

        $(document).off("change", '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_from_contry"]').on({
            change: function(event) {
                Apperyio("mobilelabel_error").text('');
                try {
                    restservice_city5.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_from_contry"]');

        $(document).off("change", '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_from_city"]').on({
            change: function(event) {
                Apperyio("mobilelabel_error").text('');
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_from_city"]');

        $(document).off("change", '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_to_contry"]').on({
            change: function(event) {
                try {
                    restservice_to_city5.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobileselectmenu_to_contry"]');

        $(document).off("click", '#CarriageOrderChoices_mobilecontainer1 [name="mobilebutton_done"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        restservice_save_choice.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#CarriageOrderChoices_mobilecontainer1 [name="mobilebutton_done"]');

        $(document).off("click", '#CarriageOrderChoices_mobilefooter1 [name="favorite_item"]').on({
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
        }, '#CarriageOrderChoices_mobilefooter1 [name="favorite_item"]');
        $(document).off("click", '#CarriageOrderChoices_mobilefooter1 [name="home_item"]').on({
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
        }, '#CarriageOrderChoices_mobilefooter1 [name="home_item"]');
        $(document).off("click", '#CarriageOrderChoices_mobilefooter1 [name="upload_item"]').on({
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
        }, '#CarriageOrderChoices_mobilefooter1 [name="upload_item"]');

    };

    $(document).off("pagebeforeshow", "#CarriageOrderChoices").on("pagebeforeshow", "#CarriageOrderChoices", function(event, ui) {
        Apperyio.CurrentScreen = "CarriageOrderChoices";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    CarriageOrderChoices_onLoad();
};

$(document).off("pagecreate", "#CarriageOrderChoices").on("pagecreate", "#CarriageOrderChoices", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    CarriageOrderChoices_js();
});