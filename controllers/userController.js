import UserSchema from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    let query = UserSchema.find();

    if(req.query.gender) {
      query = query.where('gender').equals(req.query.gender);
    }

    if(req.query.available) {
      query = query.where('available').equals(req.query.available);
    }

    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      query = query.or([
        { first_name: searchRegex },
        { last_name: searchRegex },
      ]);
    }
    if(req.query.page) {
    const pageSize = 20;
    const skip = (req.query.page - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);
    }

    const users = await query.exec();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};




export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserSchema.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

export const getGenders = async (req, res) => {
  try {
    const uniqueGenders = await UserSchema.distinct('gender');
    console.error(error);
    res.status(200).json(uniqueGenders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

export const addUser = async (req, res) => {
  const { first_name, last_name, email, gender, avatar, domain, available } = req.body;

  const user = UserSchema({
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available
  });

  try {
    await user.save();
    res.status(200).json({ message: 'User Added' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, gender, avatar, domain, available } = req.body;

  try {
    const updatedUser = await UserSchema.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        email,
        gender,
        avatar,
        domain,
        available,
      },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await UserSchema.findByIdAndDelete(id);
    res.status(200).json({ message: 'User Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

