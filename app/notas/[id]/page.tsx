async function obtNota(notaId: string) {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records/${notaId}',
        {
            next: { revalidate: 10 }
        },
    )

    const data = await res.json()
    return data
}

export default async function PaginaNota({params}: any) {
    const nota = await obtNota(params.id)

    return (
        <div>
            <h1>nota: {nota.id}</h1>
            <div>
                <h2>{nota.titulo}</h2>
                <h5>{nota.contenido}</h5>
                <p>{nota.created}</p>
            </div>
        </div>
    )
}