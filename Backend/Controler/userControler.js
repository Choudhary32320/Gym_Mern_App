const User = require("../Schema/userSchema");

// Update Active Plan
exports.updateActivePlan = async (req, res) => {
  try {
    const { plan } = req.body;

    if (!plan) {
      return res.status(400).json({ message: "Plan is required" });
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { activePlan: plan },
      { new: true }
    );

    res.json({
      message: "Plan updated successfully",
      activePlan: user.activePlan,
    });
  } catch (error) {
    console.error("Error updating plan:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch User Details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      name: user.name,
      email: user.email,
      activePlan: user.activePlan,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Server error" });
  }
};
