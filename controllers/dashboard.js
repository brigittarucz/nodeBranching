const express = require('express');

exports.getDashboard = (req, res) => {
    res.render('dashboard', {
        username: req.params.username
    })
}