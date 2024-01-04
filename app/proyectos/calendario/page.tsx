"use client"
import getMonthData from "./getMonthData"
import Style from './calendario.module.css'

export default function VistaCalendario() {
    const monthData = getMonthData()

    return (
        <div>
            <h1>calendario :)</h1>
            <>
                <p>sidebar</p>
                <div>
                    <h1>calendar header</h1>
                    <div className={Style.monthGrid}>
                        {
                            monthData.map((week)=>(
                                <>
                                    {
                                        week.map((day)=>(
                                            //[ 'Sun', '31', 'Dec', '2023', '06:00:00', 'GMT' ]
                                            <>
                                                <div className={Style.dayCell}>{day[1]}</div>
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