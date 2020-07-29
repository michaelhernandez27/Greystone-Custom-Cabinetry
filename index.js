const jwt = require("./jwt");

app.post("/login", async (req, res) => {
    let doc = await Users.findOne({ username: req.body.username });
    if (doc) {
      if (bcrypt.compareSync(req.body.password, doc.password)) {
        const payload = {
          id: doc._id,
          level: doc.level,
          username: doc.username
        };
  
        let token = jwt.sign(payload);
        console.log(token);
        res.json({ result: "success", token, message: "Login successfully" });
      } else {
        // Invalid password
        res.json({ result: "error", message: "Invalid password" });
      }
    } else {
      // Invalid username
      res.json({ result: "error", message: "Invalid username" });
    }
  });

  app.post("/signup", async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 8);
      await Users.create(req.body);
      res.json({ result: "success", message: "Register successfully" });
    } catch (err) {
      res.json({ result: "error", message: err.errmsg });
    }
  });