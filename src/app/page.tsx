"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { Cookies } from "react-cookie";
import CookieButton from "./components/cookie-button";
import CookieObject, { cookieObjKey } from "./components/cookie-obj";

export default function Home() {
  const c = new Cookies();

  useEffect(() => {
    c.set(cookieObjKey, [{key1: "value1"}, {key2: "value2"}]);
    console.log("Cookie obj set");
  }, []);
  
  return (
    <main className={styles.main}>
      <CookieButton />
      <CookieObject />
    </main>
  );
}
