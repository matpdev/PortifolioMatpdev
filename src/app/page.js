import Image from "next/image";

import styles from "@css/Home.module.css";
import FirstPage from "@/components/fragments/firstPage/firstPage";
import IndexZero from "@/components/fragments/indexZero/indexZero";
import IndexOne from "@/components/fragments/indexOne/indexOne";
import IndexTwo from "@/components/fragments/indexTwo/indexTwo";

export default async function Home() {
  let allSelectables = await getAllExperiences();

  return (
    <div className={styles.Home}>
      <FirstPage></FirstPage>
      <IndexZero></IndexZero>
      <IndexOne selectables={allSelectables}></IndexOne>
      <IndexTwo></IndexTwo>
    </div>
  );
}

async function getAllExperiences() {
  try {
    let all = await (
      await fetch(
        "https://raw.githubusercontent.com/matpdev/portifolio-files/master/indexOne.json",
        {
          next: 600,
        }
      )
    ).json();

    return all;
  } catch (error) {
    return [];
  }
}
