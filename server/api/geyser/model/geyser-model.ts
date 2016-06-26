import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
    temperature: {type: Number, required: true}
});

export default schema;
