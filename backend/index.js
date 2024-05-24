const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/userregister')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/classroom", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Register route
app.post('/register', async (req, res) => {
  try {
    const { username, email, password, is_teach } = req.body;

    if (!username || !email || !password || typeof is_teach !== 'number') {
      return res.status(400).json({ error: 'All fields are required and is_seller must be a number' });
    }

    const existingUser = await UserModel.findOne({
      username: username,
      email: email,
      is_teach: is_teach
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists for this seller/buyer type' });
    }

    const user = new UserModel({ username, email, password, is_teach });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Login route

app.post('/login', async (req, res) => {
    try {
      const { email, password, checked } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }
  
      const users = await UserModel.find({ email: email });
  
      if (users.length === 0) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      for (const user of users) {
       
        if (user.password === password && user.is_teach === checked) {
          const id = user.id;
          return res.status(200).json({ id });
        }
      }
  
      return res.status(400).json({ error: 'Incorrect password or role' });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });






// // Login route
// app.post('/login', async (req, res) => {
  
//   try {
//     const { email,password,checked } = req.body;
//     if (!email  || !password) {
       
//       return res.status(400).json({ error: 'Username or email and password are required' });
//     }
//     const user = await UserModel.findOne(
//        { email: email }
//     );

//     if (!user) {
       
//       return res.status(400).json({ error: 'User not found' });
      
//     }

//     if (  (user.password!==  password) || (user.is_teach != checked) ) {
//         console.log('hello');
//       return res.status(400).json({ error: 'Incorrect password' });
//        console.log('hello');
     
//     }

//     const id = user.id;

//     res.status(200).json({ id });

//     console.log("Login successful")
// }
//   catch(err) {

//     console.error('Error during login:', err);
//     res.status(500).json({ error: 'Internal server error' });
//     console.log(err);
//   }

// }

// );

// // Signup endpoint
// // app.post('/api/signup', (req, res) => {
// //   UserModel.create(req.body)
// //     .then(user => res.json(user))
// //     .catch(err => res.status(500).json({ error: err.message }));
// // });

// //bike register
// app.post('/prdreg', (req, res) => {
//   BikeModel.create(req.body)
//     .then(user => res.json(user))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

// app.get('/get-all', (req, res) => {
//   BikeModel.find()
//     .then(bikes => res.json(bikes))  // Send the found bikes as JSON response
//     .catch(err => res.status(500).json({ error: err.message }));  // Handle any errors
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
