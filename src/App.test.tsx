// import {describe,it,expect} from "vitest";
// import {fireEvent, render,screen} from "@testing-library/react";
// import {userEvent} from "@testing-library/user-event"

// import App from "./App";

// describe("App Component test suite",()=>{
//     it("should render the app with correct initial state",()=>{
//         render(<App/>)
//         screen.debug(undefined,100000000)
//     })
//     //  it.only("should render the app name prop",()=> {
//     //     render(<App name="learning testing in react"/>)
//     //     const heading = screen.getByText("learning testing in react")
//     //     screen.debug(undefined,100000000)
//     //     expect (heading).toBeDefined()
//     // })

//     it.only("should increment the count on click button", async ()=>{
//         render(<App/>)
//         const initialCount = screen.getByRole("heading",{name:"0"})
//         expect (initialCount).toBeDefined()
//         const button = screen.getByRole("button",{name:"Increment"})
//         expect (button).toBeDefined()
//         // fireEvent.click(button)
//         await userEvent.click(button)
//         const updatedCount = await screen.getByRole("heading",{name:"1"})
//         expect (updatedCount).toBeDefined()
//     })
// it.only("should fetch userName", async ()=> {
//     render(<App/>)

//     const button = screen.getByRole("button", { name: "fetch user" })
//     expect(button).toBeDefined()

//     await userEvent.click(button)

//     const userName = await screen.findByRole("heading", { name: "Leanne Graham" })
//     expect(userName).toBeDefined()
// })


// })
import { describe, it, expect,vi } from "vitest";
import { act ,render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App Component test suite", () => {
//   it("should render the app with correct initial state", () => {
//     render(<App />);
//     screen.debug(undefined, 100000000);
//   });

//   it("should increment the count on click button", async () => {
//     render(<App />);
//     const initialCount = screen.getByRole("heading", { name: "0" });
//     expect(initialCount).toBeDefined();

//     const button = screen.getByRole("button", { name: "Increment" });
//     expect(button).toBeDefined();

//     await userEvent.click(button);

//     const updatedCount = await screen.getByRole("heading", { name: "1" });
//     expect(updatedCount).toBeDefined();
//   });

  it.only("should fetch userName", async () => {
     vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      json: async () => ({ name: "Leanne Graham" }),
    } as Response);
    render(<App />);

    const button = screen.getByRole("button", { name: "fetch User" });
    expect(button).toBeDefined();

    await userEvent.click(button);

    const userName = await screen.findByRole("heading", {
      name: "Leanne Graham",
    });
    expect(userName).toBeDefined();
  });
});
