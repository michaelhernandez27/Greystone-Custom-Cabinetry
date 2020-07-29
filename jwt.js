const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
var publicKEY = fs.readFileSync(path.join(__dirname + 'https://soshace-12d3e.kxcdn.com/public.key'), 'utf8');
var privateKEY = fs.readFileSync(path.join(__dirname + 'https://soshace-12d3e.kxcdn.com/private.key'), 'utf8');

var i 	= 'Michael';    	// Issuer (Software organization who issues the token)
var s 	= 'michael.hernandez27@outlook.com';	// Subject (intended user of the token)
var a 	= 'https://michaelhernandez27.github.io/Updated-Portfolio/';	// Audience (Domain within which this token will live and function)

module.exports = {
    sign : (payload)=>{
         // Token signing options
         var signOptions = {
            issuer: 	i,
            subject: 	s,
            audience: 	a,
            expiresIn: "30d",    // 30 days validity
            algorithm: "RS256"
        };
        return jwt.sign(payload, privateKEY, signOptions);
    },
}

