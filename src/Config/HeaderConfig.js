
import logo from '../img/header-logo.png';

export default {
    topMenu: [
        {
            text: "Возврат",
            link: "/"
        },
        {
            text: "Доставка и оплата",
            link: "/"
        },
        {
            text: "О магазине",
            link: "/"
        },
        {
            text: "Контакты",
            link: "/"
        },
        {
            text: "Новости",
            link: "/"
        }
    ],
    headerMain: {
        headerPhone:{
            tel: {
                text:"+7 495 79 03 5 03",
                tel:"+7-495-790-35-03"
            },
            workingTime: {
                text:"Ежедневно: с 09-00 до 21-00"
            }
        },
        headerLogo: {
            logo: {
                src:logo,
                alt:"logotype"
            },
            info: {
                text:"Обувь и аксессуары для всей семьи"
            }
        }
    },
    nav: [
        {
            to:"/",
            text:"Акции",
            className:"main-menu__item_sales"
        },
        {
            to:"/",
            text:"Женская обувь",
            className:"main-menu__item_women"
        },
        {
            to:"/",
            text:"Мужская обувь",
            className:"main-menu__item_men"
        },
        {
            to:"/",
            text:"Детская обувь",
            className:"main-menu__item_kids"
        },
        {
            to:"/",
            text:"Аксессуары",
            className:"main-menu__item_accessories"
        },
        {
            to:"/",
            text:"Для дома",
            className:"main-menu__item_home"
        },
        {
            to:"/",
            text:"Бренды",
            className:"main-menu__item_brands"
        },
        {
            to:"/",
            text:"Новинки",
            className:"main-menu__item_new"
        },
    ]
}
