import { Module } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { ArticlesController } from "./articles.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController],
  imports: [PrismaModule],
})
export class ArticlesModule {}
