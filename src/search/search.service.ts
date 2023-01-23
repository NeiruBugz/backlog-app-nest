import { Injectable } from '@nestjs/common';
import { HowLongToBeatService } from 'howlongtobeat';

@Injectable()
export class SearchService {
  private hltb = new HowLongToBeatService();

  search(query: string) {
    const result = this.hltb.search(query);
    const response = result.then((res) => res);
    return response;
  }
}
