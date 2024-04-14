import { Controller, Get, Param } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { Article } from "@prisma/client";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles(): Promise<Article[]> {
    return this.articlesService.getArticles();
  }

  @Get(":id")
  async getArticle(@Param("id") id: string): Promise<Article> {
    return this.articlesService.getArticle({ id: Number(id) });
  }
}
