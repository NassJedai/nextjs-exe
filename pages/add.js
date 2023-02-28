import React, {useRef, useState, useEffect} from 'react'

export default function Add() {

    const enWord = useRef(null);
    const frWord = useRef(null);


    const handleSubmit = e => {
        e.preventDefault()

        const newWord = {
            en:enWord.current.value,
            fr:frWord.current.value
        }

        fetch('/api/vocapi', {
            method:"POST",
            body: JSON.stringify(newWord),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

        enWord.current.value ="";
        frWord.current.value ="";
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='addEn'>
                Ajouter un mot en Anglais 
            </label>
            <input ref={enWord} type="text" id="addEn" />

            <label htmlFor='addFr'>
                Ajouter un mot en Anglais 
            </label>
            <input ref={frWord} type="text" id="addFr" />

            <button>Ajouter</button>
        </form>
    </div>
  )
}
