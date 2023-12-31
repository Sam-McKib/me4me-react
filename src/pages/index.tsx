
import Head from "next/head";
import React from "react";
import ReminderTable from "../components/Table";
import Reminders from "../components/Reminders"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>me4me</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>        <Reminders />
        <ReminderTable/>
        {/* <ReminderTable2/> */}
      </main>
    </div>
  );
}
