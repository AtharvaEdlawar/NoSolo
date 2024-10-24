const connectDB = require("../../db");
const ArtistModel = require("../../model/artistData");

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
            fullName,
            email,
            phone,
            bandName,
            noOfBandMembers,
            genre,
            duration,
            requirement
        } = req.body;

        // Check if artist already exists
        const existingArtist = await ArtistModel.findOne({
            $or: [{ email }, { phone }]
        });

        if (existingArtist) {
            return res.status(409).json({
                message: 'Artist with this email or phone number already exists.'
            });
        }

        // Create a new Artist entry
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

        return res.status(201).json({
            message: 'Form submitted and data saved to MongoDB!'
        });
    } catch (error) {
        console.error('Error saving Artist data:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
};