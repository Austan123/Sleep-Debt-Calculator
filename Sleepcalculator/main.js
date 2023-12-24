const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 4;
        break;
      case "tuesday":
        return 5;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 10;
        break;
      case "friday":
        return 3;
        break;
      case "saturday":
        return 7;
        break;
      case "sunday":
        return 9;
        break;
  
      default:
        return "Error!";
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  
  const getIdealSleepHours = () => {
    let idealHours = 8 * 7;
    return idealHours;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("User got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("User got more sleep than needed");
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  calculateSleepDebt()
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());