 module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    rollNo: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dob: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    faculty: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    semester: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Student;
};
