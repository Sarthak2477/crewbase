import { baseProcedure, createTRPCRouter } from '../init';
import prisma from '@/lib/db';
 
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure
    .query(() => {
      return prisma.orm.public.User.all();
    }),
});
 
// export type definition of API
export type AppRouter = typeof appRouter;