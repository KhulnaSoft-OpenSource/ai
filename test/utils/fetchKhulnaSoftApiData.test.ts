import { describe, it, expect } from "vitest"
import { isKhulnaSoftUser } from "../../src/utils/fetchKhulnaSoftApiData"

describe("isKhulnaSoftUser", () => {
    it("should return true for an khulnasoft opensource user", async () => {
        expect(await isKhulnaSoftUser("bdougie")).toBe(true)
    })
    it("should return false for a non khulnasoft opensource user", async () => {
        expect(await isKhulnaSoftUser("1")).toBe(false)
    })
})