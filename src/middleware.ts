import { authMiddleware } from '@civic/auth/nextjs/middleware';

export default authMiddleware();

export const config = {
  matcher: [

    "/track/:path*",
    "/profile/:path*"
  ],
};
