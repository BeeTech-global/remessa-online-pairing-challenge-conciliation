const getTransactions = require("./getTransactions");

describe("getTransactions()", () => {
    let promise;
    let output;

    beforeAll(async () => {
        promise = getTransactions();
        output = await promise;
    });

    it("returns a promise", () => {
        expect(promise).toBeInstanceOf(Promise);
    });

    describe("output", () => {
        it("contains 4 succeeded transactions", () => {
            expect(output.ok).toHaveLength(4);
        });

        it("contains 2 pending transactions", () => {
            expect(output.waiting).toHaveLength(2);
        });

        it("contains 5 failed transactions", () => {
            expect(output.failed).toHaveLength(5);
        });

        it("maps transaction statuses to lists of transaction IDs", () => {
            expect(output).toEqual({
                failed: [1000103, 1000104, 1000105, 1000109, 1000111],
                ok: [1000106, 1000107, 1000108, 1000110],
                waiting: [1000101, 1000102],
            });
        });
    });
});
