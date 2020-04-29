var mongoose = require('mongoose');
var Schema = mongoose.Schema;

detailSchema = new Schema( {
	unique_id:Number,
	Name: String,
	Discription: String,
	AlbumArt:String,
	image1:String,
	image2:String,
	image3:String,
	image4:String,
	added_date:{
		type: Date,
		default: Date.now
	},
	songs: {
        type: Array
    }
}),
Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;