print('\n Start init-mongo.js \n')

db = db.getSiblingDB('entropy')

db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [{ role: "readWrite", db: "entropy" }]
})

db.createCollection('users')
db.createCollection('roles')
db.createCollection('guilds')
db.createCollection('channels')
db.createCollection('messages')

print('\n End init-mongo.js \n')