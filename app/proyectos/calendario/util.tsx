import dayjs from "dayjs"

export default function getMonth(month = dayjs().month()) {
    const year = dayjs().year()
    const firstDay = dayjs(new Date(year, month, 1)).day()
    let aux = 0 - firstDay
    
    // cuadricula calendario - 5x7 = 35 casillas
    const calendarMatrix = new Array(6).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            aux ++
            return dayjs(new Date(year, month, aux))
        })
    })
    
    return calendarMatrix
}