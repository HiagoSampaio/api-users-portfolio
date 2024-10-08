
const express = require("express");
const controllers = require("../controllers/users")
const router = express.Router();
const auth = require("../controllers/auth")
const employee = require("../controllers/employes")
router.get("/users",auth.verifyLogin,auth.verifyToken,controllers.usersFinder);
router.post("/register",controllers.registerUsers);
router.post("/login",controllers.loginUser)
router.put("/updateUsers/:id",controllers.updateUser)
router.delete("/delete/:id",controllers.deleteUser)
router.get("/admin",auth.verifyADMIN,controllers.admin)
router.get('/employees', employee.listEmployees);
router.post('/employees/register', employee.registerEmployee);
router.put('/employees/update/:id', employee.updateEmployee);
router.delete('/employees/delete/:id', employee.deleteEmployee);
router.post('/employees/login', employee.loginEmployee);
module.exports = router;