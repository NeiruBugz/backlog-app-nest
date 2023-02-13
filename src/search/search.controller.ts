import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('api/v1/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':query')
  search(@Param('query') query: string) {
    return this.searchService.search(query);
  }

  @Get('details/:id')
  getDetails(@Param('id') id: string) {
    return this.searchService.getDetails(id);
  }
}
