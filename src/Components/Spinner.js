import { useState } from "react";

const Spinner = (state) => {
    // const [spin, setSpin] = useState(false);
    // setSpin(state)
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner;

