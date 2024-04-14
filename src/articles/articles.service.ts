import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Article } from "@prisma/client";
import { CreateArticleDto } from "./dto/createArticleDto";
import { UpdateArticleDto } from "./dto/updateArticleDto";

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

  async createArticle({
    article,
  }: {
    article: CreateArticleDto;
  }): Promise<Article> {
    return this.prisma.article.create({
      data: article,
    });
  }

  async updateArticle({
    id,
    article,
  }: {
    id: number;
    article: UpdateArticleDto;
  }): Promise<Article> {
    return this.prisma.article.update({
      where: { id },
      data: article,
    });
  }

  async deleteArticle({ id }: { id: number }): Promise<Article> {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
