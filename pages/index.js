import styles from "../styles/Home.module.css"
import Head from 'next/head'
import { v4 as uuid4 } from 'uuid';
import { useState, useEffect } from "react";



export default function Home(props) {

    const [state, setState] = useState(false);

    useEffect(() => {
      newWord()
    }, [])


    const newWord = () => {
      fetch('/api/vocapi')
      .then(response => response.json())
      .then(data => setState(data))
    }


    console.log(state);

    let randomWord;
    if(state){
      const array = state.englishList[0].data;
      randomWord = array[Math.floor(Math.random() * array.length )].en
    }

      return (
        <>
          <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Titre</title>
          </Head>
          <div>
            <h1 className={styles.titre}>Mot au hasard </h1>

            {/* <table className={styles.tableau}>
              <tbody>
                {props.array.map((el) => (
                    <tr key={uuid4()}>
                      <td>{el.en}</td>
                      <td>{el.fr}</td>
                    </tr>))}
              </tbody>
            </table> */
            }

            <button onClick={newWord}>Get Random words</button>
            <h2>{randomWord}</h2>

          </div>
        </>
      )
}

export async function getStaticProps() {
  const data = await import (`../data/vocabulary.json`);
  const array = data.vocabulary;

  // si pas de donné 
  
  // if(array.length === 0) {
  //   return {
  //     notFound: true
  //   }
   

  // Redirection 
  // if(array.length === 0) {
  //   return {
  //     redirect: {
  //       destination: "/isr"
  //     }
  //   }
  // }


  return {
    props: {
      array : array
    }
  }
}



