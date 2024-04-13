import { Article, PrismaClient, ReviewStatus } from "@prisma/client";

const prisma = new PrismaClient();

const articles: Omit<Article, "id" | "createdAt" | "updatedAt">[] = [
  {
    title: "Introduction to NestJS",
    content:
      "NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications...",
    description: "Learn about the basics of NestJS and its key features.",
    published: true,
    reviewStatus: ReviewStatus.APPROVED,
    publicationDate: null,
  },
  {
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications...",
    description:
      "Explore the fundamentals of Next.js and how to quickly get started with building React applications.",
    published: true,
    reviewStatus: ReviewStatus.APPROVED,
    publicationDate: null,
  },
];

async function main(): Promise<void> {
  const createdArticles = await prisma.article.createMany({
    data: articles,
  });

  console.log(createdArticles);

  await prisma.$disconnect();
}

main().catch((e): void => {
  console.error(e);
  process.exit(1);
});
