import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./PasswordInput.css";

function PasswordInput({
    placeholder,
}) {

    const [show,setShow] = useState(false);

    return (

        <div className="password-input">

            <input
                type={show ? "text" : "password"}
                placeholder={placeholder}
            />

            <button
                type="button"
                onClick={()=>setShow(!show)}
            >

                {show ? <FaEyeSlash /> : <FaEye />}

            </button>

        </div>

    );

}

export default PasswordInput;