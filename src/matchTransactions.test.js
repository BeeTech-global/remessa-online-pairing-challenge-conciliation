const matchTransactions = require("./matchTransactions");

describe("matchTransactions()", () => {
    let promise;
    let output;

    beforeAll(async () => {
        promise = matchTransactions();
        output = await promise;
    });

    it("returns a promise", () => {
        expect(promise).toBeInstanceOf(Promise);
    });

    describe("output", () => {
        it("contains 6 matching transactions", () => {
            expect(output["matched"]).toHaveLength(6);
        });

        it("contains 4 mis-matching transactions", () => {
            expect(output["mismatched"]).toHaveLength(4);
        });

        it("contains 2 missing transactions", () => {
            expect(output["missing"]).toHaveLength(2);
        });

        it("identifies matched, mis-matched and missing transactions", () => {
            expect(output.matched).toEqual(
                expect.arrayContaining([1000105, 1000106, 1000107, 1000108, 1000109, 1000101]));

            expect(output.mismatched).toEqual(
                expect.arrayContaining([1000102, 1000103, 1000104, 1000111]));

            expect(output.missing).toEqual(
                expect.arrayContaining([1000100, 1000110]));
        });
    });
});
