import { render , screen } from "@testing-library/react";
import AccordionComponent from "./Accordion.component";
import {data} from "config/variables.config";

test("Accordion component render correctly", () => {
    render(<AccordionComponent data={data} />)
    const headers = screen.queryAllByRole('headerItems')
    const lastLevelItems = screen.queryAllByRole('lastLevel')
    expect(headers.length).toEqual(3) // ['پوشاک'  , 'مردانه' , 'پیراهن']
    expect(lastLevelItems.length).toEqual(7)
});