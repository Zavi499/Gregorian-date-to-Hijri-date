function myHijriDateFormat(date) {
    let startDate = new Date(date),
        c = 'en-u-ca-islamic-umalqura-nu-latn',  // use 'islamic-umalqura' calendar for the islamic date
        n = 'numeric',
        iDay = new Intl.DateTimeFormat(c, { day: n }).format(startDate),
        iMonth = new Intl.DateTimeFormat(c, { month: 'long' }).format(startDate),
        iYear = new Intl.DateTimeFormat(c, { year: n }).format(startDate).split(" ")[0];

    return iDay + " " + iMonth + ", " + iYear;
}
console.log(myHijriDateFormat(new Date(Date.now()))); // today's date
console.log(myHijriDateFormat("2022-04-02"));         // first Ramadan 2022
