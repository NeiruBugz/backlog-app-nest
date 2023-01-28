import { Injectable } from '@nestjs/common';
import { HowLongToBeatEntry, HowLongToBeatService } from 'howlongtobeat';
import { sortById } from 'src/modules/utils';

@Injectable()
export class SearchService {
  private howLongToBeatService: HowLongToBeatService;

  constructor() {
    this.howLongToBeatService = new HowLongToBeatService();
  }

  public async search(query: string): Promise<HowLongToBeatEntry[]> {
    const response = await this.howLongToBeatService.search(query);
    return sortById(response);
  }
}
