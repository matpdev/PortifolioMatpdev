import Image from "next/image";

import styles from "@css/Home.module.css";
import FirstPage from "@/components/fragments/firstPage/firstPage";

export default function Home() {
  return (
    <div className={styles.Home}>
      <FirstPage></FirstPage>
      <FirstPage></FirstPage>
    </div>
  );
}
