import headerConfig from './HeaderConfig';

export default {
    subscribe:{
        title:"подписаться на рассылку выгодных предложений",
        subscribeText:"Подписка оформлена! Спасибо!",
        nameRadio:"subscribe",
        radioItems:[
            {
                value:"women",
                text:"Женское"
            },
            {
                value:"men",
                text:"Мужское"
            },
            {
                value:"both",
                text:"Всё",
                checked:true
            }
        ],
        emailInput:{
            placeholder:"Ваш e-mail"
        },
        button:{
            text:"ПОДПИСАТЬСЯ"
        }
    },
    footerMenu:[
        {
            title:"О магазине",
            className:"footer__menu_about",
            items:[
                {
                    to:"/",
                    text:"BosaNoga"
                },
                {
                    to:"/",
                    text:"BosaNoga1"
                },
                {
                    to:"/",
                    text:"BosaNoga2"
                }
            ]

        },
        {
            title:"Коллекции",
            className:"footer__menu_collection",
            items:[
                {
                    to:"/",
                    text:"Обувь"
                },
                {
                    to:"/",
                    text:"Аксессуары"
                },
                {
                    to:"/",
                    text:"Для дома"
                }
            ]

        },
        {
            title:"Помощь",
            className:"footer__menu_help",
            items:[
                {
                    to:"/",
                    text:"Как купить?"
                },
                {
                    to:"/",
                    text:"Возврат"
                },
                {
                    to:"/",
                    text:"Контакты"
                }
            ]

        }
    ],
    footerInfo:{
        paidSystem: {
            title:"Принимаем к оплате:",
            items:[
                {
                    className:"footer__paid_paypal"
                },
                {
                    className:"footer__paid_master-card"
                },
                {
                    className:"footer__paid_visa"
                },
                {
                    className:"footer__paid_yandex"
                },
                {
                    className:"footer__paid_webmoney"
                },
                {
                    className:"footer__paid_qiwi"
                }
            ]
        },
        socialLinks:{
            title:"Мы в соц.сетях:",
            items:[
                {
                    className:"footer__social-link_twitter"
                },
                {
                    className:"footer__social-link_vk"
                }
            ]
        }
    },
    footerContacts: {
        tel: {
            text:"+7 495 79 03 5 03",
            tel:"+7-495-790-35-03"
        },
        workingTime: {
            text:"Ежедневно: с 09-00 до 21-00"
        },
        email:{
            email:"office@bosanoga.ru",
            emailText:"office@bosanoga.ru"
        }
    }
}
