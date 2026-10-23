// Import the express module
import express from 'express';

// Create a instance of an
// express application
const app = express();

// Define port number
// for our server to listen on
const PORT = 3004;

const appointments = [];

// Enable static file serving
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));



// Define a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.post('/submit-appointment', (req, res) => {
  console.log(req.body);
  
  const appointment = req.body;
  appointment.timestamp = new Date();

  console.log(appointment);
  
  appointments.push(appointment);
  console.log(appointments);
  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.get('/admin', (req, res) => {
    res.send(appointments);
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});