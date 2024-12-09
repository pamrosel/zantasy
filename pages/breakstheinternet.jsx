import Head from "next/head";
import React, { Suspense } from "react";
import styles from "../styles/Home.module.css";
import CloseX from "../components/CloseX";
import Loader from "../components/Loader";
import { motion } from "framer-motion";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function BreakTheInternet() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className={styles.container}>
        <Head>
          <link rel="preconnect" href="https://www.youtube.com/" crossOrigin />
          <link rel="dns-prefetch" href="https://www.youtube.com/" />
          <link
            rel="preconnect"
            href="https://prod.spline.design"
            crossOrigin
          />
          <link rel="dns-prefetch" href="https://prod.spline.design" />
        </Head>
        <Loader />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="spline-bg breaktheinternetbg"
        ></motion.div>

        <CloseX />

        <main className="page">
          <h1 className="text-[#800000]">
            brb breaking the internet<span>crowbar set</span>
          </h1>
          <article>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <details className="text-[#35ffff] border-[#35ffff]">
                <summary>info</summary>
                <p>
                  Shot by{" "}
                  <a href="https://www.youtube.com/@gimmiezine">
                    Gimmie Gimmie Gimmie
                  </a>{" "}
                  at Crowbar
                </p>
              </details>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="video-container"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sY_H5kbNlYk?"
                title="GUPPY - Live at Crowbar (01/12/24) on Gimmie Gimmie Gimmie"
              ></iframe>
            </motion.div>
          </article>
        </main>
      </div>
    </motion.div>
  );
}
