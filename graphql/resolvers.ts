import { userResolvers } from '../models/user/resolvers';
import { projectResolvers } from '../models/project/resolvers';
import { advanceResolvers } from '../models/advance/resolvers';

export const resolvers = [userResolvers, projectResolvers, advanceResolvers];
