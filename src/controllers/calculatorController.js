export const calculate = (req, res) => {
  const { age, gender, height, weight, activity } = req.body;

  if (!age || !gender || !height || !weight || !activity) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  let bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const activityMap = { low: 1.2, medium: 1.55, high: 1.75 };
  const calories = Math.round(bmr * (activityMap[activity] || 1.2));

  const bodyFat = gender === "male"
    ? (1.20 * (weight / ((height / 100) ** 2))) + (0.23 * age) - 16.2
    : (1.20 * (weight / ((height / 100) ** 2))) + (0.23 * age) - 5.4;

  let goal = "";
  if (calories > 2500) goal = "Lose Weight";
  else if (calories < 2000) goal = "Gain Weight";
  else goal = "Maintain Weight";

  return res.status(200).json({
    calories,
    bodyFat: Number(bodyFat.toFixed(1)),
    goal,
    tip: "Stay consistent with your daily calorie target to stay on track."
  });
};