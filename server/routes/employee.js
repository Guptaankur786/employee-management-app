const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// Create Employee
router.post('/', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Retrieve all Employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).send(employees);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Retrieve a single Employee
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).send();
        res.status(200).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update Employee
router.patch('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) return res.status(404).send();
        res.status(200).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete Employee
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).send();
        res.status(200).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
