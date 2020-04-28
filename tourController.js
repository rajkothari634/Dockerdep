const Tour = require("./tourModel");

exports.createTour = async (req, res) => {
  try {
    console.log("okk");
    const newTour = await Tour.create(req.body);
    console.log("okk");
    if (!newTour) {
      res.status(200).json({
        status: "fail",
        message: "errors",
      });
    } else {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "find something else",
    });
  }
};
