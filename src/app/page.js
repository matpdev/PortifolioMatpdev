import Image from "next/image";

import styles from "@css/Home.module.css";
import FirstPage from "@/components/fragments/firstPage/firstPage";
import IndexZero from "@/components/fragments/indexZero/indexZero";
import IndexOne from "@/components/fragments/indexOne/indexOne";

export default function Home() {
  return (
    <div className={styles.Home}>
      <FirstPage></FirstPage>
      <IndexZero></IndexZero>
      <IndexOne></IndexOne>
    </div>
  );
}
