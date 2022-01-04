
export default GetDeliveryDates = () => {
    let dates = [],
        today = new Date(),
        holidays = ['01/01', '04/04', '05/04', '01/05', '13/05', '23/05', '24/05', '21/07', '15/08', '01/11', '11/11', '25/12'];

    for (let i=1;i<60;i++) {
        let theday = new Date(today.getTime() + (24 * 60 * 60 * 1000 * i)),
            dd = (theday.getDate() < 10) ? '0' + theday.getDate().toString() : theday.getDate().toString() ,
            mm = ((theday.getMonth() + 1) < 10) ? '0' + (theday.getMonth() + 1).toString() : (theday.getMonth() + 1).toString(),
            yy = theday.getFullYear(),
            dw = theday.getDay();

        if (!holidays.includes(dd + '/' + mm)) {
            if (dw == 2){ 
                dates.push('Mardi ' + dd + '/' + mm + '/' + yy);
            } else if (dw == 4){ 
                dates.push('Jeudi ' + dd + '/' + mm + '/' + yy);
            } else if (dw == 5){ 
                dates.push('Vendredi ' + dd + '/' + mm + '/' + yy);
            } else if (dw == 6){ 
                dates.push('Samedi ' + dd + '/' + mm + '/' + yy);
            }
        }
    }

    return dates;
}
