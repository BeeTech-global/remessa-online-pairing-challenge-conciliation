const getSettlements = require("./getSettlements");

describe("getSettlements()", () => {
    let promise;
    let output;

    beforeAll(async () => {
        promise = getSettlements();
        output = await promise;
    });

    it("returns a promise", () => {
        expect(promise).toBeInstanceOf(Promise);
    });

    describe("output", () => {
        it("contains 7 succeeded transactions", () => {
            expect(output.SUCCESS).toHaveLength(7);
        });

        it("contains 2 pending transactions", () => {
            expect(output.PENDING).toHaveLength(2);
        });

        it("contains 2 failed transactions", () => {
            expect(output.ERROR).toHaveLength(2);
        });

        it("is an object mapping statuses to transaction IDs", () => {
            expect(output).toEqual({
                ERROR: [1000105, 1000109],
                PENDING: [1000101, 1000111],
                SUCCESS: [1000100, 1000102, 1000103, 1000104, 1000106, 1000107, 1000108],
            });
        });
    });
});
