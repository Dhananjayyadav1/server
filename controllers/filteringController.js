import UserSchema from "../models/User.js";

export const getGenders = async (req, res) => {
    try {
      const uniqueGenders = await UserSchema.distinct('gender');
      res.status(200).json(uniqueGenders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  
  export const getDomains = async (req, res) => {
    try {
      const uniqueDomains = await UserSchema.distinct('domain');
      res.status(200).json(uniqueDomains);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };