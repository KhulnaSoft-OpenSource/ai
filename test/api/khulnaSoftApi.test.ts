import { describe, it, expect } from "vitest"

import {
    KHULNASOFT_OPENSOURCE_USERS_ENDPOINT,
    KHULNASOFT_OPENSOURCE_REPOS_ENDPOINT,
} from "../../src/constants";
import { UserResponse } from "./types/userResponse";
import { RepoResponse } from "./types/repoResponse"

describe("khulnaSoftUserEndpoint", () => {
    it("should return a user object", async () => {
        const response = await fetch(`${KHULNASOFT_OPENSOURCE_USERS_ENDPOINT}/bdougie`);
        const data = await response.json() as UserResponse;
        expect(data.login).toBe("bdougie");
    })

    it("should return a 404 error for a user that does not exist", async () => {
        const response = await fetch(`${KHULNASOFT_OPENSOURCE_USERS_ENDPOINT}/1`);
        expect(response.status).toBe(404);
    })
})

describe("khulnaSoftRepoEndpoint", () => {
    it("should return a repository object", async () => {
        const response = await fetch(`${KHULNASOFT_OPENSOURCE_REPOS_ENDPOINT}/71359796`);
        const data = await response.json() as RepoResponse;
        expect(data.full_name).toBe("khulnasoft-opensource/khulnasoft-opensource");
    })

    it("should return a 404 error for a repo that does not exist", async () => {
        const response = await fetch(`${KHULNASOFT_OPENSOURCE_REPOS_ENDPOINT}/0`);
        expect(response.status).toBe(404);
    })
})
