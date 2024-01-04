"use client"
import getMonthData from "./getMonthData"

export default function VistaCalendario() {
    const monthData = getMonthData()

    return (
        <div>
            <h1>calendario :)</h1>
            <>
                <p>sidebar</p>
                <div>
                    <h1>calendar header</h1>
                    <div>
                        {
                            monthData.map((week)=>(
                                <>
                                    {
                                        week.map((day)=>(
                                            <>
                                                <div>{day}</div>
                                            </>
                                        ))
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>
            </>
        </div>
    )
}