const moment = require('moment') // You can use moment.js to handle date/time validation

// Middleware function to validate time and day
function validateTimeAndDay(req, res, next) {
  const currentDay = moment().day() // Get current day (0 = Sunday, 1 = Monday, etc.)
  const currentTime = moment().hour() // Get current hour (0 - 23)

  const allowedDays = [1, 2, 3, 4, 5] // Monday to Friday (1 = Monday, 5 = Friday)
  const allowedStartTime = 9 // Start of business hours (9 AM)
  const allowedEndTime = 17 // End of business hours (5 PM)

  // Check if today is an allowed day
  if (!allowedDays.includes(currentDay)) {
    return res.status(403).json({
      error: 'Service is available only on weekdays (Monday to Friday).',
    })
  }

  // Check if current time is within allowed business hours
  if (currentTime < allowedStartTime || currentTime >= allowedEndTime) {
    return res.status(403).json({
      error: 'Service is available only between 9 AM and 5 PM.',
    })
  }

  // If both checks pass, proceed with the request
  next()
}

module.exports = validateTimeAndDay
