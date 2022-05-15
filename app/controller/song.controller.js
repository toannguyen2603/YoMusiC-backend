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

    updateLikeForSong: async(req, res) => {
        try {
            await Song.findByIdAndUpdate(
                {_id: req.params.id},
                {$set: {like: req.query}}
            )
            res.status(200).json("Update like success");

        } catch(error) {
            res.status(500).json(error);
        }
    
    },

    searchByKeywords: async(req, res) => {
        try {

            let text = Object.values(req.query)[0]

            await Song.createIndexes({ name_song: "text"})

            let search = await Song.find({
                $text: {$search: text }
            })

            res.status(200).json(search);
        } catch(error) {
            res.status(500).json(error)
        }
    }

}