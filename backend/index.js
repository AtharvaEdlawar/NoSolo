const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db.js");
const cosplayerModel = require("./model/cosplayersData.js")

const ArtistModel = require("./model/artistData.js");

const app = express();
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const corsOptions = {
    origin: '',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
connectDB()


//******************************************************************COSPLAYER FORM HANDLING *************************************** ********************/

app.get("/",(req,res)=>{
  res.send("Hello");
})

app.post('/api/submit', async (req, res) => {
  try {
    
    const { fullname, email, phone, cosplayCharacter, hasCosplayedBefore, favouriteAnimeCharacter, paymentCosplayers } = req.body;

    // Check if a user with the same email or phone number already exists
    const existingCosplayer = await cosplayerModel.findOne({ $or: [{ email }, { phone }] });

    if (existingCosplayer) {
      return res.status(409).json({ message: 'Cosplayer with this email or phone number already exists.' });
    }

    // Create a new cosplayer entry
    const newCosplayer = new cosplayerModel({
      fullname,
      email,
      phone,
      cosplayCharacter,
      hasCosplayedBefore,
      favouriteAnimeCharacter,
      paymentCosplayers
    });

    // Save the data to MongoDB
    await newCosplayer.save();

    res.status(201).json({ message: 'Form submitted and data saved to MongoDB!' ,});
  } catch (error) {
    console.error('Error saving cosplayer data:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
})




//*********************************************************ARTIST FORM SUBMISSION HANDLING *************************************************************/
 




app.post('/api/Artistsubmit', async (req, res) => {
  try {
    // Destructure the incoming request data
    const { fullName, email, phone, bandName, noOfBandMembers, genre, duration, requirement } = req.body;
    const existingArtist = await ArtistModel.findOne({ $or: [{ email }, { phone }] });

    if (existingArtist) {
      return res.status(409).json({ message: 'Artist with this email or phone number already exists.' });
    }
   

    // Create a new Artist entry (field names match the frontend)
    const newArtist = new ArtistModel({
      fullname: fullName,
      email,
      phone,
      bandName,
      sizeoftheband: noOfBandMembers,
      genre,
      duration,
      requirement
    });

    // Save the data to MongoDB
    await newArtist.save();

    // Return success response
    res.status(201).json({ message: 'Form submitted and data saved to MongoDB!' });
  } catch (error) {
    console.error('Error saving Artist data:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

 const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
})

