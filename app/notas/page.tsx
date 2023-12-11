import Link from "next/link"
import styles from './Notas.module.css'
import PocketBase from 'pocketbase'

async function obtNotas() {
    // const res = await fetch(
    //     'http://127.0.0.1:8090/api/collections/Notas/records',
    //     {cache: 'no-store'}
    // )
    // const data = await res.json()

    const pb = new PocketBase('http://127.0.0.1:8090')
    const data = await pb.collection('Notas').getList()

    return data?.items as any[]
}

export default async function Notas() {
    const notas = await obtNotas()
    
    return(
        <div>
            <h1>
                Notas
            </h1>
            <div className={styles.grid}>
                {
                    notas?.map((nota) => {
                        return <Nota key={nota.id} nota={nota}/>
                    })
                }
            </div>
        </div>
    )
}

function Nota({nota}: any) {
    const {id, titulo, contenido, created} = nota || {}

    return (
        <Link href={'/notas/${id}'}>
            <div className={styles.note}>
                <h2>{titulo}</h2>
                <h5>{contenido}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}