import React from 'react'
import { v4 as uuid4 } from 'uuid';
import { useRouter } from 'next/router';

export default function Liste(props) {

    const router = useRouter();
    console.log(router)
  return (
    <>
        <h1>Liste de vocabulaire {router.query.liste}</h1>

        <ul>
        {
            props.listeEnCours.map(item => (
                // <h4>{item.name}</h4>
                <li key={uuid4()}>{item.en} - {item.fr}  </li>
                
            ))
        }
        </ul>
    </>
  )
}


export async function getStaticProps(context) {
    const slug = context.params.liste;
    const data = await import ('../../data/listes.json');

    const listeEnCours = data.englishList.find(list => list.name === slug)

    return {
        props: {
            listeEnCours: listeEnCours.data
        }
    }

}


export async function getStaticPaths() {
    const data = await import ('../../data/listes.json')

    const paths = data.englishList.map(item => ({
        params: {liste: item.name}
    }))

    return {
        // paths: [
        //     {params: {liste: "words"}}
        // ], 
        paths,
        fallback: false
    }
}
