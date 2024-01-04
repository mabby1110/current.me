import dayjs from "dayjs"

export default function getMonthData() {
    const month = 0

    const year = dayjs().year()
    const weekDay = dayjs(new Date(year, month, 1)).day()
    let currentDay = 0 - weekDay
    
    const monthData = new Array(5).fill([]).map(()=>{
        return new Array(7).fill([]).map(()=>{
            currentDay++
            return dayjs(new Date(year, month, currentDay)).toISOString()
        })
    })
    console.log(year)
    console.log(monthData[0][0])
    return monthData
}