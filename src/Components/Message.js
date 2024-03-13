// const Message = () => {
//     return (
//         <>


//         </>
//     )
// }


// export default Message



import React, { useState } from 'react';

function Message() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-primary" onClick={handleShow}>
                Message
            </button>

            <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Your Message</h5>
                            <button type="button" className="close" onClick={handleClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            This is your popup message content.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;
