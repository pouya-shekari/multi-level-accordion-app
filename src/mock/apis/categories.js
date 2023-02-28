import { rest } from "msw";
import {BASE_URL} from "config/variables.config";
export const categories = [
    rest.get(`${BASE_URL}/categories.json`, async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    name: "پوشاک",
                    link: "/category/cloths",
                    children: [
                        {
                            name: "مردانه",
                            link: "/category/cloths/men",
                            children: [
                                {
                                    name: "پیراهن",
                                    link: "/category/cloths/men/shirt",
                                    children: [
                                        {
                                            name: "آستین کوتاه",
                                            link: "/category/cloths/men/shirt/short-sleeve",
                                            children: [

                                            ]
                                        },
                                        {
                                            name: "آستین بلند",
                                            link: "/category/cloths/men/shirt/long-sleeve",
                                            children: [

                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "شلوار",
                                    link: "/category/cloths/men/trousers",
                                    children: [

                                    ]
                                }
                            ]
                        },
                        {
                            name: "زنانه",
                            link: "/category/cloths/women",
                            children: [

                            ]
                        },
                        {
                            name: "بچگانه",
                            link: "/category/cloths/kids",
                            children: [

                            ]
                        }
                    ]
                },
                {
                    name: "کفش",
                    link: "/category/cloths",
                    children: [

                    ]
                },
                {
                    name: "آرایشی",
                    link: "/category/cloths",
                    children: [

                    ]
                }
            ])
        );
    }),
];