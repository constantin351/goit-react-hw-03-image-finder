import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component { 
     static propTypes = {
        onClose: PropTypes.func.isRequired,
        imgUrl: PropTypes.string.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeClick)
    };

    componentWillUnmount() { 
        window.removeEventListener('keydown', this.handleEscapeClick)
    };

    handleEscapeClick = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() { 
        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick} >
                <div className="Modal">
                    <img src={this.props.imgUrl} className="Modal-img" alt="" />
                </div>
            </div>,
            modalRoot
        );
    }

};

export default Modal;