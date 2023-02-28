import {render, screen, waitFor} from "@testing-library/react";
import {Home} from "./Home.Page";
import {act} from "react-dom/test-utils";
import {BASE_URL} from "config/variables.config";
import { rest } from "msw";
import { server } from "mock/server";
import { SWRConfig } from "swr";

test("Home page render correctly", async () => {
    await act( async () => render(<Home />));
    await waitFor(() => expect(document.title).toEqual("Multi Level Accordion"));
});

test("data accordion show no data when data is empty", async () => {
    server.use(
        rest.get(`${BASE_URL}/categories.json`, (req, res, ctx) => {
            return res(ctx.status(200), ctx.json([]));
        })
    );
    await act( async () =>
        render(
            <SWRConfig value={{ provider: () => new Map() }}>
                <Home />
            </SWRConfig>
        )
    );
    expect(screen.getByRole("noData")).toHaveTextContent(
        /داده‌ای یافت نشد/i
    );
});

test("data accordion is shown after progressbar",  async () => {
    await act( async () => render(<Home />));
    expect(screen.getByRole("hasData")).toBeInTheDocument()
});

test("error message should be shown when request failed", async () => {
    server.use(
        rest.get(`${BASE_URL}/categories.json`, (req, res, ctx) => res(ctx.status(400)))
    );
    await act( async () =>
        render(
            <SWRConfig value={{ provider: () => new Map() }}>
                <Home />
            </SWRConfig>
        )
    );
    expect(screen.getByRole("fetchError")).toHaveTextContent(
        /دریافت اطلاعات با خطا مواجه شد!/i
    );
});
