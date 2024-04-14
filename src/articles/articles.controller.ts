import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { Article } from "@prisma/client";
import { CreateArticleDto } from "./dto/createArticleDto";
import { UpdateArticleDto } from "./dto/updateArticleDto";
import { ApiTags } from "@nestjs/swagger";

@Controller("articles")
@ApiTags("articles")
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

  @Post()
  async createArticle(@Body() article: CreateArticleDto): Promise<Article> {
    return this.articlesService.createArticle({ article });
  }

  @Patch(":id")
  async updateArticle(
    @Param("id") id: string,
    @Body() article: UpdateArticleDto,
  ): Promise<Article> {
    return this.articlesService.updateArticle({ id: Number(id), article });
  }

  @Delete(":id")
  async deleteArticle(@Param("id") id: string): Promise<Article> {
    return this.articlesService.deleteArticle({ id: Number(id) });
  }
}
