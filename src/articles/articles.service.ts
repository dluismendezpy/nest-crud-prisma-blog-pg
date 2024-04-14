import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Article } from "@prisma/client";

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async getArticles(): Promise<Article[]> {
    return this.prisma.article.findMany({
      where: { published: true },
    });
  }

  async getArticle({ id }: { id: number }): Promise<Article> {
    return this.prisma.article.findUnique({
      where: { id, published: true },
    });
  }
}
