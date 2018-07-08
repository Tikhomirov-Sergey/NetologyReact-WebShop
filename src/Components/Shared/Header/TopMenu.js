import React, { Component } from 'react';

export default class TopMenu extends Component {

    links = [
        {
            text: "Возврат",
            link: "/#"
        },
        {
            text: "Доставка и оплата",
            link: "/#"
        },
        {
            text: "О магазине",
            link: "/#"
        },
        {
            text: "Контакты",
            link: "/#"
        },
        {
            text: "Новости",
            link: "/#"
        }
    ];


    render() {
        return (
            <div className="top-menu">
                <div className="wrapper">
                    <ul className="top-menu__items">
                        {
                            this.links.map((item) => {
                                return (
                                    <li>
                                        <a className="menu__item" href={item.link}>{item.text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

