import { makeTextFileLineIterator } from './index';

describe('makeTextFileLineIterator', () => {
    let blob: Blob;
    let iterator: AsyncGenerator<string>;
    let lines: string[];

    beforeEach(() => {
        lines = ['line1', 'line2', 'line3'];
        blob = new Blob([lines.join('\n')]);
        iterator = makeTextFileLineIterator(blob);
    });

    it('should allow user to read first line', async () => 
        expectAsync(iterator.next()).toBeResolvedTo({ value: 'line1', done: false })
    );

    it('should allow user to read all lines', async () => {
        const result = [] as string[];

        for await (let line of iterator) {
            result.push(line);
        }
        
        expect(result).toEqual(lines);
    });
});