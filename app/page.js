"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Form from "@/components/form";
import { useState } from "react";
import Khud from "@/components/khud";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [videoVisible, setvideoVisible] = useState(false);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/myName.svg"
              alt="Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <p>ناشد الجهات المختصة</p>
      </div>

      <div className={styles.center}>
        {!videoVisible && <Form setvideoVisible={setvideoVisible} />}
        {videoVisible && <Khud />}
      </div>
    </main>
  );
}
