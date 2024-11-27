const healthCheck = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: 'Server running all age and  🔥 💪 ' })
  } catch (error) {
    res.status(404).json({ message: 'Internal server error' })
  }
}

module.exports = healthCheck
