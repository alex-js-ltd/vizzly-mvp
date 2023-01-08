import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { prisma } from 'utils/prisma.server';
import { readFileSync } from 'fs';
import resolvers from 'utils/resolvers.server';
import type { PrismaClient } from '@prisma/client';
import type { NextApiResponse, NextApiRequest } from 'next';
import path from 'path';
import { Order } from '@prisma/client';

export type Context = {
  prisma: PrismaClient;
  res: NextApiResponse;
  req: NextApiRequest;
};

export type PrismaOrder = Order;

const rootDirectory = path.join(process.cwd(), '/');

const typeDefs = readFileSync(rootDirectory + './schema.graphql', {
  encoding: 'utf-8',
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res): Promise<Context> => {
    return { prisma, res, req };
  },
});

export default handler;
