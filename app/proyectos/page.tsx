import Link from "next/link"

export default function VProyectos() {
    return (
        <div>
            <h1>Mis proyectos</h1>
            <div>
                <Link href='/proyectos/calendario'>lista proyectos</Link>
                <div>meta</div>
                <div>preview</div>
            </div>
        </div>
    )
}