import { authMiddleware } from '@civic/auth/nextjs/middleware';

export default authMiddleware();

export const config = {
  matcher: [
    "/profile/:path*"
  ],
};
