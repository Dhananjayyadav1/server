import TeamSchema from "../models/Team.js";

export const getTeams = async (req, res) => {
  try {
    const teams = await TeamSchema.find().sort({ createdAt: -1 });
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getTeam = async (req, res) => {
  const { id } = req.params;

  try {
    const team = await TeamSchema.findById(id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: 'Team not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

export const addTeam = async (req, res) => {
  const { first_name, last_name, email, gender, avatar, domain, available } = req.body;

  const team = TeamSchema({
    team_name,
    total_members,
    team_members,
    team_image
  });

  try {
    await team.save();
    res.status(200).json({ message: 'Team Added' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}