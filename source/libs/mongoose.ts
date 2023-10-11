import { connect } from "mongoose";

const { DBNAME, DBUSER, DBPASS, DBHOST } = process.env;

connect(`mongodb://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}`)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));