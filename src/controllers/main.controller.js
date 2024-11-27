const path = require('path')

// Home page
const home = (req, res) => {
  try {
    console.log('Index file displayed')
    return res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } catch (error) {
    return res.status(404).json({ message: 'Error encountered' })
  }
}

// About us page
const about = (req, res) => {
  try {
    console.log('about file rendered')
    return res.sendFile(path.join(__dirname, '..', 'public', 'about.html'))
  } catch (error) {
    return res.status(404).json({ message: 'Error encountered' })
  }
}

// Contact us page
const contact = (req, res) => {
  try {
    console.log('contact file rendered')

    return res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'))
  } catch (error) {
    return res.status(404).json({ message: 'Error encountered' })
  }
}

const product = (req, res) => {
  console.log(path.join('../', __dirname, 'public', 'about.html'))
  res.sendFile(path.join(__dirname, '..', 'public', 'about.html'))

  // return res.status(200).json({ message: 'Product is live' })
}

// const about = (req, res) => {
//   // Parse the requested URL
//   const parsedUrl = url.parse(req.url)
//   let pathname = parsedUrl.pathname

//   // Set the path to the public folder
//   const publicDir = path.join(__dirname, 'public')

//   // Construct the full file path
//   const filePath = path.join(publicDir, pathname)

//   // Read the file from the public folder
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       // If the file doesn't exist or there's an error
//       res.statusCode = 404
//       res.end(`File not found: ${pathname}`)
//     } else {
//       // Set the appropriate content type
//       const extname = path.extname(filePath)
//       let contentType = 'text/html'

//       if (extname === '.css') {
//         contentType = 'text/css'
//       } else if (extname === '.js') {
//         contentType = 'application/javascript'
//       } else if (extname === '.png') {
//         contentType = 'image/png'
//       } else if (extname === '.jpg' || extname === '.jpeg') {
//         contentType = 'image/jpeg'
//       } else if (extname === '.gif') {
//         contentType = 'image/gif'
//       }

//       // Set the content type in the response header
//       res.setHeader('Content-Type', contentType)

//       // Send the file contents to the client
//       res.statusCode = 200
//       res.end(data)
//     }
//   })
// }

// Start the server

module.exports = { home, about, product, contact }
