const actions = [{ type: "upper_case" }, { type: "lower_case" }];
const initialName = "Mary";
const newName = actions.reduce((name, action) => {
    switch (action.type) {
        case "upper_case":
            return name.toUpperCase();
        case "lower_case":
            return name.toLowerCase();
        default:
            return name;
    }
}, initialName);
