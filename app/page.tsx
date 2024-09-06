"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

import Gallery from "./gallery";

export default function Home() {
 
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then ((res) => {
      return res.json();
    })
    .then((data)=> {
      console.log(data);
      console.log("Wow! Data successfully fetched!");
      setUsers(data);
    })
    .catch((error) => {
      console.error('Oops! Error fetching data:', error);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
