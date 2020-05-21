const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    email: String,
    facebookId: String,
    googleId: String,
    role: { type: String, enum: ['teacher', 'student'], default: 'student' },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });
module.exports = model('User', userSchema);