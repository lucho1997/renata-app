const { Schema, model } = require("mongoose");

const suscriberSchema = new Schema ({
    nombre : {
        type : String,
        required: true
    },
    apellido : String,
    email : {
        type : String,
        required: true,
        unique: true
    }
},{
    timestamps: true
})


module.exports = model('Suscriber', suscriberSchema);

