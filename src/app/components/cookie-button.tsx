"use client";
import { useCookies } from "react-cookie";

const btnCookieKey = "cookie-btn";

export default function CookieButton() {
    
    const [_, setCookies] = useCookies([btnCookieKey]);
    
    console.log("Render cookie button");
    
    return (
        <button onClick={() => {
            console.log("changing btn cookie")
            setCookies(btnCookieKey, Math.random());
        }}>
            Change btn Cookie
        </button>
    );
    }