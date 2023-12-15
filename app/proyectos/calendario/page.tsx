"use client"
import getMonth from "@/app/proyectos/calendario/util"

export default function VistaCalendario() {
    const monthMatrix = getMonth()

    return (
        <div>
            <h1>calendario :)</h1>
            <>
                <div>
                    <h1>calendar header</h1>
                    <div>
                        <p>sidebar</p>
                        
                    </div>
                </div>
            </>
        </div>
    )
}