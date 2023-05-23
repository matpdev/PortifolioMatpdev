import Image from "next/image";

import styles from "@css/Home.module.css";
import FirstPage from "@/components/fragments/firstPage/firstPage";
import IndexZero from "@/components/fragments/indexZero/indexZero";

export default function Home() {
  return (
    <div className={styles.Home}>
      <FirstPage></FirstPage>
      <IndexZero></IndexZero>
    </div>
  );
}
