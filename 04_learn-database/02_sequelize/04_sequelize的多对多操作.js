const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const sequelize = new Sequelize("coderhub", "root", "zjtmysql132", {
  host: "localhost",
  dialect: "mysql",
});

// students
class Students extends Model {}

Students.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: DataTypes.INTEGER,
  },
  {
    tableName: "students",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// courses
class Courses extends Model {}

Courses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.DOUBLE,
  },
  {
    tableName: "courses",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// studentSelectCourses
class StudentSelectCourses extends Model {}

StudentSelectCourses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      field: "student_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Students,
        key: "id",
      },
    },
    courseId: {
      field: "course_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Courses,
        key: "id",
      },
    },
  },
  {
    tableName: "students_select_courses",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

// 多对多关系的联系
Students.belongsToMany(Courses, {
  through: StudentSelectCourses,
  foreignKey: "studentId",
  otherKey: "courseId",
});

Courses.belongsToMany(Students, {
  through: StudentSelectCourses,
  foreignKey: "courseId",
  otherKey: "studentId",
});

async function queryProducts() {
  const result = await Students.findAll({
    include: {
      model: Courses,
    },
  });
  console.log(result);
}

queryProducts();
