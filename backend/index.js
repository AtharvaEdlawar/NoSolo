const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const connectDB = require("./db.js");
const cosplayerModel = require("./model/cosplayersData.js")



const app = express();
app.use(express.json())
const upload = multer({dest: 'uploads/'})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
connectDB()



app.post('/api/submit', upload.single('cosplayImage'), async (req, res) => {
  try {
    const { fullname, email, phone, cosplayCharacter, hasCosplayedBefore, favouriteAnimeCharacter } = req.body;
    const cosplayImage = req.file ? req.file.path : null; // Save the file path

    // Create a new cosplayer entry
    const newCosplayer = new cosplayerModel({
      fullname,
      email,
      phone,
      cosplayCharacter,
      hasCosplayedBefore,
      favouriteAnimeCharacter,
      cosplayImage
    });

    // Save the data to MongoDB
    await newCosplayer.save();

    res.status(201).json({ message: 'Form submitted and data saved to MongoDB!' });
  } catch (error) {
    console.error('Error saving cosplayer data:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

 const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})

