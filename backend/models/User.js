const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    imgURL: {
      type: String,
      default: 'https://www.waspcom.com/wp-content/uploads/2014/10/user-placeholder-circle-1.png',
    },
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
