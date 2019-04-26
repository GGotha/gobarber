const { User } = require("../models");

class AppointmentController {
  async create(req, res) {
    const provider = await User.findByPk(
      req.params.provider
    ); /* findByPk <- buscar o req pelo id */

    return res.render("appointments/create", { provider });
  }
}

module.exports = new AppointmentController();
