import Head from 'next/head';
import Link from 'next/link';
import { v4 as uuid4 } from 'uuid';


const index = (props) => {

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Titre</title>
      </Head>

      <h1>Chapitre</h1>

    <ul>

      {  
          props.array.map((el) => (
            
            <li key={uuid4()}>
              <Link href={`/listes/${el.name}`}>
                {el.name}
              </Link>
            </li>
            ))
            
      }
    </ul>


    </> 
  )
}



export async function getStaticProps() {
  const data = await import ('../../data/listes.json');
  const array = data.englishList

  return {
    props: {
      array : array
    }
  }
  
}
export default index