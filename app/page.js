import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
          FIRST page

          perhaps a link:

          <Link href="/testfolder">
            <div className={styles.card}>
              <h2>Go to the second page</h2>
              <p>Click here to go to the second page</p>
            </div>
          </Link>
      </main>

    </div>
  );
}
