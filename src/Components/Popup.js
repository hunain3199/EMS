import React, { useState } from 'react';
import Stepper from './Stepper';

const Popup = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setCurrentStep(1);
    };
    const [currentStep, setCurrentStep] = useState(1);

    // Function to handle moving to the next step
    const nextStep = () => {

        setCurrentStep(currentStep < 3 ? currentStep + 1 : 1);
    };

    // Function to handle moving to the previous step
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    return (
        <div>
            <button className="btn btn-success btn-sm" onClick={openPopup}>
                {props.BtnTitle}
            </button>

            {showPopup && (
                <>
                    <div
                        className="modal-backdrop fade show"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1050 }}
                    ></div>
                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{props.title}</h5>
                                    <button type="button" className="close" onClick={closePopup}>
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* <p>This is the content of the popup.</p> */}
                                    <Stepper next={nextStep} prev={prevStep} current={currentStep} />
                                </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn btn-secondary" onClick={prevStep} hidden={(currentStep >= 2) && (currentStep <= 3) ? false : true}>
                                        Previous
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={currentStep >= 3 ? closePopup : nextStep} >
                                        {currentStep >= 3 ? "Submit" : "Next"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)}
        </div>
    );
};

export default Popup;
