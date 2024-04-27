#! /usr/bin/env node

import inquirer from "inquirer";

//Get the current date, month, year, hour, minutes & seconds

const currentDate: Date = new Date();
//this is a date object, it is used for current date

const currentYear: number = currentDate.getFullYear();
//getfullyear is a method used to get the current year

const currentMonth: number = currentDate.getMonth() + 1;
/*getMonth is a method used to get the current month number 0-11 
e.g: jan = 0 
and after adding 1 to the getMonth method it will return the number from 1-12
e.g: jan = 1.*/

const currentDay: number = currentDate.getDate();
//getdate is a method used to get the specified date

const currentHour: number = currentDate.getHours();
//gethour is a method used to get the current hour

const currentMinutes: number = currentDate.getMinutes();
//getminutes is a method used to get the current minute of the hour as a number

const currentSeconds: number = currentDate.getSeconds();
//getsecond is also a method used to get the current second

// prints date in YYYY-MM-DD format

console.log(`Currennt Date: ${currentYear}-${currentMonth}-${currentDay}`);

// prints time in HH:MM format
console.log(`Current Time: ${currentHour}:${currentMinutes}:${currentSeconds}`);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(
  `Current date-time formatted as YYYY-MM-DD hh:mm:ss : ${currentYear}-${currentMonth}-${currentMonth} ${currentHour}:${currentMinutes}:${currentSeconds}`
);

//get the current timestamp

let ts = Date.now();
console.log(`Current Timestamp: ${ts}`);

//getting date and time from timestamp
//the timestamp is in milliseconds
const timestamp = 1714222669822; // Example timestamp

// Create a new Date object using the timestamp
const date = new Date(timestamp);

// Get the individual date and time values
const day = date.getDate();
const month = date.getMonth() + 1; // Months are zero-based, so we add 1
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Create a formatted string for the date and time
const formattedDate = `${day}/${month}/${year}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;

// Print the date and time values
console.log("Date from Timestamp:", formattedDate);
console.log("Time from Timestamp:", formattedTime);
