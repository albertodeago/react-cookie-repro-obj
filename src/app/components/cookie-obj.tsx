"use client";
import { useCookies } from "react-cookie";

export const cookieObjKey = "cookie-obj";

export default function CookieObject() {

    const [cookies, setCookies] = useCookies([cookieObjKey]);

    console.log("Render cookie object");

    return (
        <div>
            <button onClick={() => {
                console.log("changing cookie obj")
                setCookies(cookieObjKey, [{key1: "value1"}, {key2: "value2"}]);
            }}>
                Change Cookie Object
            </button>
            
        </div>
    );
}