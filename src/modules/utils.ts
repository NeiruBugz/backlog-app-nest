import { HowLongToBeatEntry } from 'howlongtobeat';

const sortById = (
  records: HowLongToBeatEntry[],
  order?: 'ASC' | 'DESC',
): HowLongToBeatEntry[] => {
  return records.sort((first, second) => {
    if (!order || order === 'DESC') {
      return Number(second.id) - Number(first.id);
    } else {
      return Number(first.id) - Number(second.id);
    }
  });
};

export { sortById };
