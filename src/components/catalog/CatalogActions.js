import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

const style = {
    icon: {
        color: '#dcad54',
        backgroundColor: 'transparent',

    },
    iconBox: {
        border: 'solid 2px #dfe1e5c2',
        textAlign: 'center',
        paddingTop: 5,
        borderRadius: 50,
        width: 40,
        height: 40,
        cursor: 'pointer'
    }
}



class CatalogActions extends Component {
    state = {
        openModal: false,
    };

    onOpenModal = () => {
        //this.setState({ open: true });
        alert('test')
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { openModal } = this.state;
        return (
            <div>
                <div className="row">
                    <div style={style.iconBox} className="ml-3" >
                        <i className="far fa-heart" style={style.icon} onClick={this.onOpenModal}  ></i>
                    </div>
                    <div style={style.iconBox} className="ml-2">
                        <i className="fas fa-download" style={style.icon} ></i>
                    </div>
                    <div style={style.iconBox} className="ml-2">
                        <i className="fas fa-music" style={style.icon} ></i>
                    </div>
                    <div className="example">

                        <Modal
                            open={openModal}
                            onClose={this.onCloseModal}
                            center
                            classNames={{
                                transitionEnter: 'transition-enter',
                                transitionEnterActive: 'transition-enter-active',
                                transitionExit: 'transition-exit-active',
                                transitionExitActive: 'transition-exit-active',
                            }}
                            animationDuration={1000}
                        >
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                            </p>
                        </Modal>
                    </div>
                </div>

            </div>
        );
    }
}

export default CatalogActions;

