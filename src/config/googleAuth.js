import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import LoginModel from '../Schema/loginSchema.js';

dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/v1/auth/google/callback",
        },
        async function(accessToken, refreshToken, profile, done) {
            try {
               
                const existingUser = await LoginModel.findOne({
                    email: profile.emails[0].value
                });

                if (existingUser) {
                    return done(null, existingUser);
                }

                
                const newUser = await LoginModel.create({
                    email: profile.emails[0].value,
                    password: "GOOGLE_AUTH_USER", 
                    googleId: profile.id
                });

                done(null, newUser);
            } catch (error) {
                done(error, null);
            }
        }
    )
);
// ✅ Serialize user (Store user ID in session)
passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  // ✅ Deserialize user (Retrieve user from session)
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
export default passport; 