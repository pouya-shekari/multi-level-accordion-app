import { rest } from "msw";
import {BASE_URL, data} from "config/variables.config";
export const categories = [
    rest.get(`${BASE_URL}/categories.json`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(data)
        );
    }),
];