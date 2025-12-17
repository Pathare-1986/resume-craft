import Resume from "../models/resume.js";

// controller for creating a new resume
// POST: /api/resume/create
export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    // create new resume
    const newResume = await Resume.create({
      userId,
      title,
    });

    // return success message
    return res.status(400).json({ message: "Resume created successfully"});

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
