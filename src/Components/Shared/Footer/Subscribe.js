import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subscribe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subscribe:false
        };

        this.subscribe = this.subscribe.bind(this);
    }

    subscribe(event) {
        this.setState({
            subscribe:true
        });

        event.preventDefault();
    }

    render() {


        if(this.state.subscribe)
            return (
                <section className="subscribe">
                    <div className="subscribe__wrapper">
                        <h2 className="subscribe__title">{this.props.title}</h2>
                        <form className="subscribe__radios" action="">
                            {this.props.subscribeText}
                        </form>
                    </div>
                </section>
            );

        return (
            <section className="subscribe">
                <div className="subscribe__wrapper">
                    <h2 className="subscribe__title">{this.props.title}</h2>

                    <form className="subscribe__radios" action="">

                        {
                            this.props.radioItems.map((item) => {
                                return (
                                    <label className="subscribe__radio_label" key={item.value}>
                                        <input className="subscribe__radio" type="radio" name={this.props.nameRadio} value={item.value} defaultChecked={item.checked}/>
                                        <div className="subscribe__radio_text">{item.text}</div>
                                    </label>
                                );
                            })
                        }

                        <input className="subscribe__email" type="email" placeholder={this.props.emailInput.placeholder}/>
                            <input className="subscribe__submit" type="submit" value={this.props.button.text} onClick={this.subscribe}/>
                    </form>
                </div>
            </section>
        );
    }
}

Subscribe.propTypes = {
    radioItems:PropTypes.arrayOf(PropTypes.shape({
        value:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })),
    nameRadio:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    subscribeText:PropTypes.string.isRequired,
    emailInput:PropTypes.shape({
        placeholder:PropTypes.string.isRequired
    }),
    button:PropTypes.shape({
        text:PropTypes.string.isRequired
    })
};