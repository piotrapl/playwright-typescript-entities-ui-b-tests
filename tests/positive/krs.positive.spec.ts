import { test } from '../../fixtures/test-fixtures';
import { existingKrsNumbers } from '../../data/valid-krsnumbers';

for (const dataset of existingKrsNumbers) {
  test(`KRS positive search: ${dataset.krs}`, async ({ positiveFlow }) => {
    const result = await positiveFlow.searchValid('krs', dataset.krs);

    await result.assert();
  });
}