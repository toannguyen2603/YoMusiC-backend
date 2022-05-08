const Song = require('../models/song.model');
// const Category = require('../models/category.model');
// const PlayList = require('../models/playlist.model');
// const Album = require('../models/album.model');



// TODO: api song

module.exports = {
    createSong: async (req, res) => {

        const { name_song, album_id, title, artists, thumbnail, playlist_id,category_id, link, like} = req.body;

        try {
            const items = new Song({
                name_song,
                title,
                artists,
                thumbnail,
                link,
                album_id,
                playlist_id,
                category_id,
        
                like
            });

            items.save();

            res.status(200).json({msg: "success", items})

        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllSong: async (req,res) => {
     try {
         let songs = await Song.find();
         res.status(200).json(songs);
     } catch (error) {
         res.status(500).json(error)
     }
    },

    getMostLikeSong: async (req, res) => {

        try{
            let songsLike  = await Song.find({like : {$gt: 1}}).limit(5);
            res.status(200).json(songsLike);
        } catch (error) {
            res.status(500).json(error)
        }

    }, 



}