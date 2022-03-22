const Song = require('../models/song.model');

// TODO: api song

module.exports = {
    createSong: async (req, res) => {

        const { name_song, title, artists, thumbnail, link} = req.body;

        try {
            const items = new Song({
                name_song,
                title,
                artists,
                thumbnail,
                link
            });

            items.save();

            res.status(200).json({msg: "success", items})

        } catch (error) {
            res.status(500).json(error)
        }
    }
}