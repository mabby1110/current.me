import Link from "next/link"

export default function VProyectos() {
    return (
        <div>
            <h1>Mis proyectos</h1>
            <div>
                <ul>
                    <li><Link href='/proyectos/calendario'>calendario</Link></li>
                    <li><Link href='/proyectos/tienda'>Tienda</Link></li>
                </ul>
            </div>
        </div>
    )
}