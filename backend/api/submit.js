const connectDB = require("../../db");
const cosplayerModel = require("../../model/cosplayersData");

// Connect to database
connectDB();

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST method
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const {
            fullname,
            email,
            phone,
            cosplayCharacter,
            hasCosplayedBefore,
            favouriteAnimeCharacter,
            paymentCosplayers
        } = req.body;

        // Check if a user with the same email or phone number already exists
        const existingCosplayer = await cosplayerModel.findOne({
            $or: [{ email }, { phone }]
        });

        if (existingCosplayer) {
            return res.status(409).json({
                message: 'Cosplayer with this email or phone number already exists.'
            });
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

        return res.status(201).json({
            message: 'Form submitted and data saved to MongoDB!'
        });
    } catch (error) {
        console.error('Error saving cosplayer data:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};