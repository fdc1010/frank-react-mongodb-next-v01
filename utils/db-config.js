module.exports = {
  "development": {
    "database": {
      "url": process.env.MONGODB_URI,
      "options": {
        "useNewUrlParser": true
      }
    }
  },
  "test": {
    "database": {
      "url": process.env.MONGODB_URI,
      "options": {
        "useNewUrlParser": true
      }
    }
  },
  "production": {
    "database": {
      "protocol": "mongodb",
      "username": "root",
      "password": "password",
      "name": "database_production",
      "host": "localhost",
      "port": "",
      "options": {
        "useNewUrlParser": true
      }
    }
  }
}
