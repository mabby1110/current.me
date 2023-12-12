import getMonth from "@/app/lib/util"

export default function VistaCalendario() {
    const monthMatrix = getMonth()

    console.table(typeof getMonth())

    return (
        <div>
            <h1>calendario :)</h1>
        </div>
    )
}