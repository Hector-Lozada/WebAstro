import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import Facebook from '@auth/core/providers/facebook';
import Apple from '@auth/core/providers/apple';
import Twitter from '@auth/core/providers/twitter';
import Twitch from '@auth/core/providers/twitch';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  providers: [
    GitHub({
        clientId: import.meta.env.GITHUB_CLIENT_ID,
        clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
      }),
    Google({
        clientId: import.meta.env.GOOGLE_CLIENT_ID,
        clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      }),
    // Facebook({
    //   clientId: import.meta.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: import.meta.env.FACEBOOK_CLIENT_SECRET,
    // }),
    Apple({
        clientId: import.meta.env.APPLE_CLIENT_ID,
        clientSecret: import.meta.env.APPLE_CLIENT_SECRET,
      }),
    Twitter({
        clientId: import.meta.env.TWITTER_CLIENT_ID,
        clientSecret: import.meta.env.TWITTER_CLIENT_SECRET,
    }),
    Twitch({
        clientId: import.meta.env.TWICH_CLIENT_ID,
        clientSecret: import.meta.env.TWICH_CLIENT_SECRET,
    }),
  ],
});