const express = require('express');
const User = require('../models/User');

exports.login = (req, res) => {
    res.json({data: 'login path is already connected'});

    console.log(req.body)
}

exports.register = async (req, res) => {
    res.json({data: 'register path is already connected'});

    await User.create(req.body)
    console.log('success')
}