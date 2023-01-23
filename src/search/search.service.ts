import { Injectable } from '@nestjs/common';
import { HowLongToBeatService } from 'howlongtobeat';

@Injectable()
export class SearchService {
  private hltb = new HowLongToBeatService();

  search(query: string) {
    return this.hltb.search(query);
  }
}
