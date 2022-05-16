// // Your code here
// The payroll system
//     populates a record from an Array
//       1) has a function called createEmployeeRecord
//       createEmployeeRecord
//         2) populates a firstName field from the 0th element
//         3) populates a familyName field from the 1th element
//         4) populates a title field from the 2th element
//         5) populates a payPerHour field from the 3th element
//         6) initializes a field, timeInEvents, to hold an empty Array
//         7) initializes a field, timeOutEvents, to hold an empty Array
//     process an Array of Arrays into an Array of employee records
//       8) has a function called createEmployeeRecords
//       createEmployeeRecords
//         9) creates two records
//         10) correctly assigns the first names
//         11) creates more than 2 records
//     it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
//       12) has a function called createTimeInEvent
//       createTimeInEvent
//         13) creates the correct type
//         14) extracts the correct date
//         15) extracts the correct hour
//     it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
//       16) has a function called createTimeOutEvent
//       createTimeOutEvent
//         17) creates the correct type
//         18) extracts the correct date
//         19) extracts the correct hour
//     Given an employee record with a date-matched timeInEvent and timeOutEvent
//       20) hoursWorkedOnDate calculates the hours worked when given an employee record and a date
//       hoursWorkedOnDate
//         21) calculates that the employee worked 2 hours
//     Given an employee record with a date-matched timeInEvent and timeOutEvent
//       22) wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
//       wagesEarnedOnDate
//         23) calculates that the employee earned 54 dollars
//     Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//       24) allWagesFor aggregates all the dates' wages and adds them together
//       allWagesFor
//         25) calculates that the employee earned 378 dollars
//     Given an array of multiple employees
//       26) calculatePayroll aggregates all the dates' wages and adds them together
//       calculatePayroll
//         27) calculates that the employees earned 770 dollars
//     runs payroll using the mock data provided by Ultron data systems
//       Dependent functions: createEmployeeRecords
//         takes CSV data, returns an array of employee records
//           28) exists
//           29) returns an Array with 2 records for Loki and Natalia
//       Full Payroll Test
//         from several imported CSV structures
//           calculatePayroll
//             30) exists
//             31) correctly sums the payroll burden to $11,880 when passed an array of employee records

/* Creates object whose fields are populated from array values. */
function createEmployeeRecord(arr) {
    return {firstName: arr[0],
            familyName: arr[1],
            title: arr[2],
            payPerHour: arr[3],
            timeInEvents: [],
            timeOutEvents: []
            }
}
/* Creates an array of objects from arrays in array. */
function createEmployeeRecords(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // newArr.push({})
        // console.log(arr[i])
        /* Pass each array in array to createEmployeeRecord.
           createEmployeeRecord will create an object with fields populated with array's values. */
        let employee = createEmployeeRecord(arr[i])
        // console.log(employee)
        /* Push employee object into newArr array. */
        // newArr[i] = employee
        newArr.push(employee)
        console.log(newArr)
    }
    return newArr
}
/* Updates timeInEvents field of employee record object. 
   Returns updated employee record object. */
function createTimeInEvent(empRecord, timeStamp) {
    /* Extract date of time stamp. */
    const dateTimeIn = timeStamp.slice(0,10)
    /* Extract hour of time stamp. */
    const hourTimeIn = timeStamp.slice(11)
    const hourTimeInInt = parseInt(hourTimeIn, 10)
    /* Object fields will have type, date and hour. */
    const updateTimeInEvents = {type: "TimeIn",
                                date: dateTimeIn,
                                hour: hourTimeInInt}
    // If timeInEvents[].length === 0, add updateTimeInEvents
    // into array's 0th position timeInEvents[0].
    // If timeInEvent[].length > 0 append updateTimeInEvents
    // into next position (i.e. timeInEvent[timeInEvent[].length]).

    // empRecord.timeInEvents[0] =  updateTimeInEvents
    empRecord.timeInEvents.push(updateTimeInEvents)
    return empRecord
}
/* Updates timeOutEvents field of employee record object. 
   Returns updated employee record object. */
function createTimeOutEvent(empRecord, timeStamp) {
    /* Extract date of time stamp. */
    const dateTimeOut = timeStamp.slice(0,10)
    /* Extract hour of time stamp. */
    const hourTimeOut = timeStamp.slice(11)
    const hourTimeOutInt = parseInt(hourTimeOut, 10)
    /* Object fields will have type, date and hour. */
    const updateTimeOutEvents = {type: "TimeOut",
                                date: dateTimeOut,
                                hour: hourTimeOutInt}
    // If timeOutEvents[].length === 0, add updateTimeOutEvents
    // into array's 0th position timeOutEvents[0].
    // If timeOutEvent[].length > 0 append updateTimeOutEvents
    // into next position (i.e. timeOutEvent[timeOutEvent[].length]).                            
    
    // empRecord.timeOutEvents[0] =  updateTimeOutEvents
    empRecord.timeOutEvents.push(updateTimeOutEvents)
    return empRecord
}
/* Calculates hours worked given employee record object and matching date. */
function hoursWorkedOnDate(empRecord, date) {
    // Loop through empRecord.timeInEvents array
    // to check which object's date matches date passed in.
    let hourIn
    let hourOut
    for (let i = 0; i < empRecord.timeInEvents.length; i++) {
        // Verify if employee record time in and time out dates are equal 
        // to time that is passed in as argument.
        const timeInDate = empRecord.timeInEvents[i].date
        if (timeInDate === date) {
            hourIn = empRecord.timeInEvents[i].hour
        }
    } 
    for (let i = 0; i < empRecord.timeOutEvents.length; i++) {
        // Verify if employee record time in and time out dates are equal 
        // to time that is passed in as argument.
        const timeOutDate = empRecord.timeOutEvents[i].date
        if (timeOutDate === date) {
            hourOut = empRecord.timeOutEvents[i].hour
        }
    } 
    // If true then calculate hours worked by 
    // subtracting hour out from hour in.
    const hoursWorked = (hourOut - hourIn) / 100
    // Returns hours worked.
    return hoursWorked
}
/* Calculates wages for Single Date by mulitplying hours worked by employee's 
   rate per hour.
   Given employee record with a date-matched timeInEvent and timeOutEvent. */
function wagesEarnedOnDate(empRecord, date) {
    // Get int hours worked.
    const getHoursWorked = hoursWorkedOnDate(empRecord, date)
    console.log("hours: ", typeof getHoursWorked)
    // Get employee's int rate per hour.
    const getRatePerHour = empRecord.payPerHour
    console.log("rate: ", getRatePerHour)
    // Calculate wages by multiplying hours worked by rate per hour.
    const calWagesEarned = getHoursWorked * getRatePerHour
    console.log("wages: ", calWagesEarned)
    // // Return wages earned on date.
    return calWagesEarned
}
/* Aggregates all dates' wages and adds them together. */
function allWagesFor(empRecord) {
    // Loop through employee record and access each date
    // from timeInEvent and timeOutEvent array of objects.
    // Get timeInEvents array and get timeOutEvents array.
    const timeIn = empRecord.timeInEvents
    const timeOut = empRecord.timeOutEvents
    let dateIn
    let dateOut
    let totalWages = 0

    // Check that timeIn and timeOut are of the 
    // same length (i.e. same number of objects in array).
    if (timeIn.length === timeOut.length) {
        // Loop through each corresponding
        // timeIn and timeOut to check that they have matching dates.
        for (let i = 0; i < timeIn.length; i++) {
            // console.log(timeIn[i].date)
            // console.log(timeOut[i].date)
            if (timeIn[i].date !== timeOut[i].date) {
                return console.log("DATES NOT MATCH")
            } else {
                // Call wagesEarnedOnDate for each date.
                let date = timeIn[i].date
                totalWages += wagesEarnedOnDate(empRecord, date)
                console.log(totalWages)
            }
        }
    }
    // Return total wages for all dates. 
    return totalWages
}
/*  */
// Test with: 
// const emps = [["Rafiki", "", "Aide", 10], ["Simba", "", "King", 100]]
function calculatePayroll(employees) {
    // Create employee record object for mulitiple employees 
    // from array of arrays.
    // Returns array of objects.
    // const allEmpRecords = createEmployeeRecords(employees)

    // Total wages earned for all employees.
    let totalWagesAllEmp = 0

    // Loop through array of objects and pass
    // each to allWagesFor.
    // for (const employee of allEmpRecords) {
    for (const employee of employees) {
        // Takes single employee record object.
        // Returns int totalWages for single employee.
        totalWagesAllEmp += allWagesFor(employee)
        console.log(totalWagesAllEmp)
    }
    return totalWagesAllEmp
}