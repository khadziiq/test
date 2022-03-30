const { job } = require("../models");
class JobController {
  static async getAll(req, res) {
    try {
      let jobs = await job.findAll();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
      const {
        type,
        url,
        company,
        company_url,
        location,
        title,
        description,
        how_to_apply,
        company_logo,
      } = req.body;

      let result = await job.create({
        type,
        url,
        company,
        company_url,
        location,
        title,
        description,
        how_to_apply,
        company_logo,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = JobController;
