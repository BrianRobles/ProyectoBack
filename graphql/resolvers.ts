import { userResolvers } from '../models/user/resolvers';
import { projectResolvers } from '../models/project/resolvers';
import { advanceResolvers } from '../models/advance/resolvers';
import { inscriptionResolvers } from '../models/inscription/resolvers';
import { objectiveResolvers } from '../models/objective/resolvers';

export const resolvers = [
  userResolvers,
  projectResolvers,
  advanceResolvers,
  inscriptionResolvers,
  objectiveResolvers,
];
