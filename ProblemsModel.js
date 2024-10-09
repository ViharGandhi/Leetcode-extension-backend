const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    problem_link: String,
    problem_name: String,
    company_name: String,
    num_occur: Number
});

const ProblemsModel = mongoose.model('ProblemsModel', problemSchema);

module.exports = ProblemsModel;
