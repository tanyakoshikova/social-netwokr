import ProfileStatus from "./ProfileStatus";
import {create} from "axios";


describe("ProfileStatus component", () => {
    test ("status from props should be in the state", () => {
        const component = create (<ProfileStatus status = "it.com" /> );
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it.com");
    });

    test ("after creation <span> should be displayed", () => {
        const component = create (<ProfileStatus status = "it.com" /> );
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
});
})