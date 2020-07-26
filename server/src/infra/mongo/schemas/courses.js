module.exports = (mongoose) => {
    const { Schema } = mongoose;

    return new Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        startDate: { type: Date, required: true },
        category: { type: String, required: true }
    });
}