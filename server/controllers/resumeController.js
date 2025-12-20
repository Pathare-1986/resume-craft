import imageKit from "../config/imageKit.js";
import Resume from "../models/resume.js";
import fs from "fs";

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
    return res
      .status(201)
      .json({ message: "Resume created successfully", resume: newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for deleting a new resume
// DELETE: /api/resume/delete
export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });

    // return success message
    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for get user resume by id
// GET : /api/resume/get
export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });

    if (!resume) {
      return res.status(401).json({ message: "Resume not found" });
    }

    resume.__V = undefined;
    resume.__createdAt = undefined;
    resume.__updatedAt = undefined;

    // return success message
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for get resume by id public
// GET : /api/resume/public
export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;
    const resume = await Resume.findOne({ public: true, _id: resumeId });

    if (!resume) {
      return res.status(401).json({ message: "Resume not found" });
    }
    // return success message
    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for updating a resume
// PUT : /api/resume/update
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file;

    let resumeDataCopy;
    if (typeof resumeData == "string") {
      resumeDataCopy = await JSON.parse(resumeData);
    } else {
      resumeDataCopy = structuredClone(resumeData);
    }

    if (image) {
      const imageBufferData = fs.createReadStream(image.path);
      const response = await imageKit.files.upload({
        file: imageBufferData,
        fileName: "file-name.jpg",
        folder: "user-resumes",
        transformation: {
          pre:
            "w-300,h-300,fo-face,z-0.75" +
            (removeBackground ? ",e-bgremove" : ""),
        },
      });
      resumeDataCopy.personal_info.image = response.url;
    }

    const resume = await Resume.findByIdAndUpdate(
      { userId, _id: resumeId },
      resumeDataCopy,
      {
        new: true,
      }
    );

    // return success message
    return res.status(201).json({ message: "Saved Successfully", resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
