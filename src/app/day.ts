export interface Day {
    isDay: boolean, // represents if day object is a placeholder or not
    dayNum: number, // represents day of the month
    date: Date, // represents whole date
    monthIndex: number, // represents where Day goes in array of days
    mood: number,  // represents how user felt on x day
    sleep: number, // represents how much sleep a user got
    physicalActivity: number, // represents a users amount of physical activity gotten
    cssClass: string,
}

export const calendar = newJanuaryFunc();

function newJanuaryFunc(): Day[] {
    let janArray = [];
    for(var i = 1; i < 32; i++){
        let x = "";
        if(i%2){
            x="grey"
        }
        else{
            x='beige'
        }
        let newDay = {
            isDay: true,
            dayNum: i,
            date: new Date(2023, 0, i),
            monthIndex: i - 1,
            mood: -1,
            sleep: -1,
            physicalActivity: -1,
            cssClass: 'grey'
        }
        janArray.push(newDay);
    }
    for(var i = 0;i < 4; i++){
        let newDay = {
            isDay: false,
            dayNum: i,
            date: new Date(1900, 0, 1),
            monthIndex: i,
            mood: -1,
            sleep: -1,
            physicalActivity: -1,
            cssClass: "white"
        }
        janArray.push(newDay)
    }
    return janArray;
}