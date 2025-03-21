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
            callbackURL: "http://localhost:8000/v1/auth/google/callback",
            scope: ['profile', 'email']
        },
        async function (accessToken, refreshToken, profile, done) {
            console.log("profile",profile);
            try {
                console.log("Google Profile:", profile); // Debug log

                const existingUser = await LoginModel.findOne({
                    googleId: profile.id
                });

                if (!existingUser) {
                    const user = new LoginModel({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value,
                        password: "GOOGLE_AUTH_USER",
                    });
                    await user.save();
                    return done(null, user); // Return the new user
                }
                return done(null, existingUser);
            } catch (error) {
                console.error("Google Auth Error:", error); // Debug log
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