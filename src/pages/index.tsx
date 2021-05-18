

import { CompletedChallenges } from "../compenents/CompletedChallenges";
import { Countdown } from "../compenents/Countdown";
import { ExperienceBar } from "../compenents/ExperienceBar";
import { Profile } from "../compenents/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
      <title>Inicio | move.it</title>
    </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
